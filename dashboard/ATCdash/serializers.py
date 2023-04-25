# Importing necessary modules
from django.contrib.auth.models import User
from rest_framework import serializers, validators


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'first_name', 'last_name', 'is_staff']


# Defining a serializer to handle user registration
class RegisterSerializer(serializers.ModelSerializer):
    # Defining the model and fields to serialize
    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name', 'last_name', 'is_staff']

        # Adding extra keyword arguments for specific fields
        extra_kwargs = {
            "password": {"write_only": True},  # password field will not be displayed in the response
            "email": {
                "required": True,  # email field is required for user registration
                "allow_blank": False,  # email field cannot be blank
                "validators": [  # adding a custom validator to ensure email uniqueness
                    validators.UniqueValidator(
                        User.objects.all(), "A user with that email already exists."
                    )
                ]
            }
        }

    # Overriding the create() method to create a new user with validated data
    def create(self, validated_data):
        # Extracting necessary fields from validated data
        username = validated_data.get('username')
        password = validated_data.get('password')
        email = validated_data.get('email')
        first_name = validated_data.get('first_name')
        last_name = validated_data.get('last_name')

        # Creating a new user instance
        user = User.objects.create(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )

        # Returning the created user
        return user
