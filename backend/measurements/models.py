from django.db import models
from django.contrib.postgres.fields.jsonb import JSONField
from users.models import User

# Create your models here.

class Manual(models.Model):
    jean_size = models.CharField(max_length=200)
    fav_brands = models.CharField(max_length=200, null=True)
    shopping_issue_one = JSONField(null=True)
    shopping_issue_two = JSONField(null=True)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='user_manual_measurements')
    created = models.DateTimeField(auto_now_add=True)


class Photo(models.Model):
    photo_front = JSONField(null=True)
    photo_side = JSONField(null=True)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='user_photo_measurements')
    created = models.DateTimeField(auto_now_add=True)