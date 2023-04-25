from django.db import models
from django.contrib.auth.models import User


class UserActivity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=50, null=True, blank=True)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    login_time = models.DateTimeField(null=True, blank=True)
    logout_time = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        self.username = self.user.username
        self.first_name = self.user.first_name
        self.last_name = self.user.last_name
        super().save(*args, **kwargs)


