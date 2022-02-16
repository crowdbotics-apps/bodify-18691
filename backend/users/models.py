from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)

    dob = models.CharField(_("Date of Birth"), blank=True, null=True, max_length=255)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class Closet(models.Model):
    product_id = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    rating = models.CharField(max_length=200)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='user_closet')
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_id
