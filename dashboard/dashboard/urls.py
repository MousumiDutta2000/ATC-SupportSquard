from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from ATCdash import views
from rest_framework import routers
from ATCdash.views import UserViewSet

router = routers.DefaultRouter() #Initializing a router for DRF.
router.register(r'users', UserViewSet) #Registering UserViewSet class with the router, so it can be used as an API endpoint.

urlpatterns = [
    path('admin/', admin.site.urls, name='djangoadmin'),
    path('', views.home, name='login'),
    path('main/', views.dashboard, name='dashboard'),
    path('logout/', views.log_out, name='logout'),
    path('accounts/', include('allauth.urls')),
    path('profile_image/', views.generate_profile_image, name='generate_profile_image'),

    # Reset Password #
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='password_reset_form.html'), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='password_reset_done.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html'), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'), name='password_reset_complete'),
    
    # Django Rest Framework
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('user_list/', UserViewSet.as_view({'get': 'list'}), name='user_list'),

    # URL pattern for API
    path('api/', include('ATCdash.urls'))
]
