from django.urls import path
from . import views
from knox import views as knox_views

urlpatterns = [
    # URL pattern for the login API
    path('login/', views.login_api),

    # URL pattern for the user data API
    path('user/', views.get_user_data),

    # URL pattern for the user registration API
    path('register/', views.register_api),

    # handles logout requests
    path('logout/', knox_views.LogoutView.as_view()),

    # handles logout requests for all tokens
    path('logoutall/', knox_views.LogoutAllView.as_view())
]
