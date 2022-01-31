from django.http import HttpRequest
from rest_framework import serializers

from measurements.models import *


class ManualSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manual
        fields = '__all__'

    def create(self, validated_data):
        jean_size = validated_data.get('jean_size')
        fav_brands = validated_data.get('fav_brands')
        print(validated_data)
        if (jean_size): 
            manual = Manual(
                jean_size = jean_size,
                user = self.validated_data['user'],
                fav_brands = fav_brands,
                shopping_issue_one = self.validated_data['shopping_issue_one'],
                shopping_issue_two = self.validated_data['shopping_issue_two']
            )
            manual.save()
            return manual
        raise serializers.ValidationError(_('Failed to save manual measurements...'))


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'

    def create(self, validated_data):
        photo_front = validated_data.get('photo_front')
        if (photo_front): 
            photo = Photo(
                photo_front = photo_front,
                user = self.validated_data['user'],
                photo_side = self.validated_data['photo_side']
            )
            photo.save()
            return photo
        raise serializers.ValidationError(_('Failed to save photo measurements...'))
