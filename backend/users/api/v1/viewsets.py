from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from users.api.v1.views import CustomAuthToken


class LoginViewSet(ModelViewSet):
    serializer_class = CustomAuthToken.as_view()
    http_method_names = ["post"]

