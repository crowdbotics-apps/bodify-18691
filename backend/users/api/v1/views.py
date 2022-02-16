from rest_framework import permissions, authentication, status, generics
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import *
from rest_auth.views import LoginView, PasswordChangeView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from .serializers import ChangePasswordSerializer, UserSerializerForToken
from rest_framework.viewsets import ModelViewSet, ViewSet
from .serializers import SignupSerializer, UserSerializer
from users.models import User

# Create your views here.

class CustomAuthToken(ObtainAuthToken):
    authentication_classes = []
    permission_classes = [permissions.AllowAny]
    serializer_class = AuthTokenSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        print(request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializerForToken(user)
        #user = authenticate(request, username=request.data['username'], password=request.data['password'])
        #login(request, user)
        user.last_login = timezone.now()
        user.save()
        return Response({"token": token.key, "user": user_serializer.data})


@api_view(['POST',])
def signup_view(request):

    if request.method == 'POST':
        serializer = SignupSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = 'successfully registered a new user'
            data['email'] = user.email
            data['first_name'] = user.first_name
            data['username'] = user.username
            data['last_name'] = user.last_name
            data['dob'] = user.dob
        else:
            data = serializer.errors
        return Response(data)


@api_view(['GET',])
def users_list(request):
    """
    List all Bodify users
    """
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer



@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def change_password(request):
    '''
    Change the user password.
    '''
    serializer = ChangePasswordSerializer(
        data=request.data,
        context={'request': request},
    )
    serializer.is_valid(raise_exception=True)

    user = request.user
    user.set_password(serializer.validated_data['password'])
    user.save()
    return Response(_("Password changed successfully"))


