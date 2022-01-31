from django.urls import path, include
from .views import *



urlpatterns = [
    path('manual/', manual_lists, name='manual_measurements'),
    path('photo/', photo_lists, name='photo_measurements')
]
