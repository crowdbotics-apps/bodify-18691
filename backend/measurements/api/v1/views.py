from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from measurements.models import *
from .serializers import *


@api_view(['GET', 'POST'])
def manual_lists(request):
    """
    Create or list all manual measurements.
    """
    if request.method == 'GET':
        manual = Manual.objects.all()
        serializer = ManualSerializer(manual, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ManualSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def photo_lists(request):
    """
    Create or list all photo measurements.
    """
    if request.method == 'GET':
        manual = Photo.objects.all()
        serializer = PhotoSerializer(manual, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PhotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)