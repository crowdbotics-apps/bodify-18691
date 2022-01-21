from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

USER_TYPE = (
    (1, 1),  # End Users
    (2, 2),  # Admin
)


class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    user_type = models.IntegerField(choices=USER_TYPE, default=1)
    agree_policy = models.BooleanField(default=False)
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class UserResetPasswordCode(models.Model):
    code = models.SmallIntegerField()
    is_verified = models.BooleanField(default=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)