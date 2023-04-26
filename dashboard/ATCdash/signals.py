from django.contrib.auth.signals import user_logged_in, user_logged_out
from django.dispatch import receiver
from .models import UserActivity
from django.utils import timezone


#gets triggered when a user logs in. 
@receiver(user_logged_in)
def user_logged_in_receiver(sender, request, user, **kwargs):
    user_activity, created = UserActivity.objects.get_or_create(user=user)
    user_activity.login_time = timezone.now()
    user_activity.save()


#gets triggered when a user logs out.
@receiver(user_logged_out)
def user_logged_out_receiver(sender, request, user, **kwargs):
    try:
        user_activity = UserActivity.objects.get(user=user)
        user_activity.logout_time = timezone.now()
        user_activity.save()
    except UserActivity.DoesNotExist:
        pass
