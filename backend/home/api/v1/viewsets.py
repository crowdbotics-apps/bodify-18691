from allauth.utils import generate_unique_username
from django.contrib.auth import get_user_model
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.utils.translation import gettext_lazy as _

User = get_user_model()

from home.api.v1.serializers import (
    SignupSerializer,
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
)
from home.api.v1.utils import send_reset_password_code
from home.models import CustomText, HomePage


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class CustomTextViewSet(ModelViewSet):
    serializer_class = CustomTextSerializer
    queryset = CustomText.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class HomePageViewSet(ModelViewSet):
    serializer_class = HomePageSerializer
    queryset = HomePage.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class ResetPasswordViewSet(ViewSet):
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        try:
            send_reset_password_code(request)
            return Response({"success": "Password reset e-mail has been sent."}, status=HTTP_200_OK)
        except Exception as e:
            return Response({"error": e.args[0]}, status=HTTP_400_BAD_REQUEST)


class SocialLoginViewSet(ViewSet):
    permission_classes = [AllowAny, ]
    http_allow_methods = ['POST']

    def create(self, request):
        context = {
            "non_field_errors": [
                _('Unable to log in with provided credentials.')
            ]
        }
        email = request.data.get('email')
        password = request.data.get('password')
        kwargs = {'email': email}
        try:
            try:
                User.objects.get(email=email)
            except User.DoesNotExist:
                save_user = User(email=email, is_active=True,
                                 username=generate_unique_username(email, 'user'),
                                 )
                save_user.set_password(password)
                save_user.save()

            user = User.objects.get(**kwargs)
            if user.check_password(password):
                token, created = Token.objects.get_or_create(user=user)

                return Response({
                    'token': token.key,
                    'user': UserSerializer(user).data}, status=HTTP_200_OK)

            else:
                return Response(context, status=HTTP_400_BAD_REQUEST)

        except User.DoesNotExist as e:
            return Response(context, status=HTTP_400_BAD_REQUEST)