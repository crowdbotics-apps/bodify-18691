from django.contrib import admin
from .models import *


@admin.register(Analytics)
class AnalyticsAdmin(admin.ModelAdmin):
    list_display = ["categories"]