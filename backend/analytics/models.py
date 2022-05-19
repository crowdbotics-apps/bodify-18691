from django.db import models

# Create your models here.

class Analytics(models.Model):
    categories = models.CharField(max_length=200)
    total_users = models.CharField(max_length=200, null=True)
    created = models.DateTimeField(auto_now_add=True)