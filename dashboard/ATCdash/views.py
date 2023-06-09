from PIL import Image, ImageDraw, ImageFont  # importing necessary modules
import random
import io
from django.contrib.auth import authenticate, login, logout  # importing necessary modules
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib import messages  # importing necessary modules
from django.contrib.auth.models import User  # importing User model from django's auth module
from rest_framework import viewsets  # importing viewsets from rest_framework module
from .serializers import UserSerializer, RegisterSerializer  # importing necessary serializers
# The 'api_view' decorator is used to define the view functions for API endpoints
from rest_framework.decorators import api_view
# The 'Response' class is used to send responses from the server.
from rest_framework.response import Response
# The 'AuthTokenSerializer' class is used to serialize and deserialize authentication token data.
from rest_framework.authtoken.serializers import AuthTokenSerializer
# The 'AuthToken' class is used to create authentication tokens for users.
from knox.auth import AuthToken
# The 'RegisterSerializer' class is a custom serializer used for user registration. The 'from .serializers' statement
# imports the 'RegisterSerializer' class from the 'serializers' module in the current package.
from .serializers import RegisterSerializer


# Define a view for user login
@login_required(login_url='login')
def dashboard(request):
    messages.success(request, 'login Successfully')
    return render(request, 'main.html')


# Define a view for the home page, where users can login
def home(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        log = authenticate(request, username=username, password=password)

        if log is not None:
            login(request, log)
            return redirect('dashboard')
        else:
            messages.error(request, 'Invalid username or password')

    if request.user.is_authenticated:
        return redirect('dashboard')
    else:
        return render(request, 'index.html')


# Define a view for user logout
def log_out(request):

    if request.method == 'POST':
        logout(request)
        messages.success(request, 'logout Successfully')
        return redirect('login')
    else:
        return redirect('dashboard')


# Generate a profile image
def generate_profile_image(request):

    # Get user's first and last name
    first_name = request.user.first_name
    last_name = request.user.last_name

    bg_color = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

    # Check the brightness of the background color and set the font color accordingly
    brightness = (299 * bg_color[0] + 587 * bg_color[1] + 114 * bg_color[2]) / 1000
    if brightness < 128:
        font_color = (255, 255, 255)  # White font color for dark background
    else:
        font_color = (0, 0, 0)  # Black font color for light background

    size = random.randint(80, 80)
    image = Image.new('RGBA', (size, size), bg_color)

    # Add a rectangle to act as a background
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, size, size), fill=bg_color)

    # Draw the user's initials on the image with the appropriate font color
    initials = first_name[0].upper() + last_name[0].upper()  # First letter of first and last name
    text_size = draw.textsize(initials, font=ImageFont.truetype('arial.ttf', 18))
    text_x = (size - text_size[0]) // 2
    text_y = (size - text_size[1]) // 2
    draw.text((text_x, text_y), initials, fill=font_color, font=ImageFont.truetype('arial.ttf', 18))

    # Create a circular mask for the image
    mask = Image.new('L', (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)

    # Apply the mask to the image
    image.putalpha(mask)

    # Save the image to a byte stream
    byte_stream = io.BytesIO()
    image.save(byte_stream, format='PNG')
    byte_stream.seek(0)

    # Return the image as an HTTP response
    return HttpResponse(byte_stream.getvalue(), content_type='image/png')


# DRF view set
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Log In API
@api_view(['POST'])
def login_api(request):
    # Creating an instance of AuthTokenSerializer and passing the request data to it
    serializer = AuthTokenSerializer(data=request.data)
    # Validating the serializer, raising an exception if it fails
    serializer.is_valid(raise_exception=True)
    # Getting the user object from the serializer's validated data
    user = serializer.validated_data['user']
    # Creating an authentication token for the user
    _, token = AuthToken.objects.create(user)

    # Returning the user information and authentication token as a response
    return Response({
        'user_info': {
            'id': user.id,
            "username": user.username,
            'email': user.email
        },
        'token': token
    })


# User data show API
@api_view(['GET'])
def get_user_data(request):
    # Getting the authenticated user from the request
    user = request.user
    # Creating an authentication token for the user
    # _, token = AuthToken.objects.create(user)

    # Checking if the user is authenticated and returning the user information and authentication token as a response
    if user.is_authenticated:
        return Response({
            'user_info': {
                'id': user.id,
                'username': user.username,
                'password': user.password,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
            },
            # 'token': token
        })
    # If the user is not authenticated, returning an error response with status code 400
    return Response({'error': 'not authenticated'}, status=400)


# User Registration api
@api_view(['POST'])
def register_api(request):
    # Creating an instance of RegisterSerializer and passing the request data to it
    serializer = RegisterSerializer(data=request.data)
    # Validating the serializer, raising an exception if it fails
    serializer.is_valid(raise_exception=True)

    # Saving the user object and creating an authentication token for the user
    user = serializer.save()
    _, token = AuthToken.objects.create(user)

    # Returning the user information and authentication token as a response
    return Response({
        'user_info': {
            'id': user.id,
            "username": user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        },
        'token': token
    })

# Define a function to generate an access token for the Zoom API
def get_access_token(account_id, client_id, client_secret):
    # Create the URL for the OAuth token request with the account ID, client ID, and secret
    url = f'https://api.zoom.us/oauth/token?grant_type=account_credentials&account_id={account_id}&client_id={client_id}&client_secret={client_secret}'

    # Send the token request to the Zoom API and handle the response
    response = requests.post(url)

    # If the token request is successful, return the access token from the response JSON
    if response.status_code == 200:
        return response.json()['access_token']
    # If the token request is unsuccessful, raise an exception with the error message from the response JSON
    else:
        raise Exception(f"Error getting access token from Zoom API: {response.json()['message']}")


# Function to create a Zoom meeting
@login_required(login_url='login')
def create_zoom_meeting(request):
    if request.method == 'POST':
        account_id = '8CefIGCsQY-lMV1C-YaqoQ'
        client_id = 'e2aPPgEETeiD3qA6HydRaA'
        client_secret = 'EwewoNT2zkPgyGuvfAi4U00J15CXpEgB'
        # Get account credentials and client ID and secret from environment variables or settings.py

        # Generate the access token using the get_access_token function
        access_token = get_access_token(account_id, client_id, client_secret)

        # Print the access token to the Django terminal
        print(f"Access token: {access_token}")

        # Set the headers for the Zoom API request with the access token
        headers = {'Authorization': f'Bearer {access_token}', 'Content-Type': 'application/json'}

        # URL for the Zoom API endpoint to create a new meeting
        url = f'https://api.zoom.us/v2/users/me/meetings'

        # Get the meeting details from the request form
        topic = request.POST['topic']
        start_time_str = request.POST['start_time']
        start_time = datetime.strptime(start_time_str, '%Y-%m-%dT%H:%M').strftime('%Y-%m-%dT%H:%M:%SZ')
        duration = request.POST['duration']
        timezone = request.POST.get('timezone') # Use get() method to retrieve the value, which returns None if key is not present

        # Create a JSON payload for the Zoom meeting creation request
        data = {
            'topic': topic,
            'type': 2,
            'start_time': start_time,
            'duration': duration,
            'timezone': timezone,
        }

        # Send the Zoom meeting creation request and handle the response
        response = requests.post(url, headers=headers, data=json.dumps(data))

        if response.status_code == 201:
            # Get the meeting details from the response JSON
            meeting = response.json()
            meeting_details = {
                'id': meeting.get('id'),
                'join_url': meeting.get('join_url'),
                'start_url': meeting.get('start_url'),
                'topic': meeting.get('topic'),
            }
            meeting_details_json = json.dumps(meeting_details)

            # Render the template with the meeting details and access token in the context
            context = {'meeting_details': meeting_details, 'access_token': access_token}
            return render(request, 'create_zoom_meeting.html', context)
        else:
            # Handle the error response from the Zoom API
            error_message = response.json().get('message')
