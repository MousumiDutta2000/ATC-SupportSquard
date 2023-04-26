from django.urls import path
from . import views

urlpatterns = [
    # URL pattern for the login API
    path('login/', views.login_api),

    # URL pattern for the user data API
    path('user/', views.get_user_data),

    # URL pattern for the user registration API
    path('register/', views.register_api),
]
