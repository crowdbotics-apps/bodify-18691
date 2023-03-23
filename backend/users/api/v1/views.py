from rest_framework import permissions, authentication, status, generics
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import *
import logging
from rest_auth.views import LoginView, PasswordChangeView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_auth.registration.views import SocialLoginView, SocialConnectView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.apple.views import AppleOAuth2Adapter
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from rest_framework.viewsets import ModelViewSet, ViewSet
from .serializers import *
from users.models import *



class AccountRegistration(CreateAPIView):
    serializer_class = AccountSignupSerializer
    authentication_classes = []
    permission_classes = [permissions.AllowAny]


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


class AuthAccountProfileDetails(RetrieveUpdateAPIView):
    authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = AuthAccountProfileSerializer

    def get_object(self):
        return get_object_or_404(self.get_queryset(), pk=self.request.user.pk)


class CustomSocialLoginView(SocialLoginView):
    authentication_classes = []
    permission_classes = []

    def process_login(self):
        super(CustomSocialLoginView, self).process_login()
        if 'user_type' in self.request.data:
            user_type = self.request.data.get('user_type')
            user = self.user
            if user_type:
                user.user_type = user_type
                try:
                    user.save()
                except Exception as e:
                    logging.warning(e)
                    print(e)

    # def post(self, request, *args, **kwargs):
    #     super(CustomSocialLoginView, self).post(request, *args, **kwargs)
    #     if 'user_type' in request.data:
    #         user_type = request.data.get('user_type')
    #         user = self.user
    #         if user_type:
    #             user.user_type = user_type
    #             try:
    #                 user.save()
    #             except Exception as e:
    #                 print(e)
    #
    #     return self.get_response()


class GoogleLoginAPI(CustomSocialLoginView):
    adapter_class = GoogleOAuth2Adapter

class FacebookLoginAPI(CustomSocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class AppleLoginAPI(CustomSocialLoginView):
    adapter_class = AppleOAuth2Adapter

class AccountPasswordReset(CreateAPIView):
    authentication_classes = []
    permission_classes = [permissions.AllowAny]
    serializer_class = PasswordResetOTPSerializer
    queryset = PasswordResetOTP.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(
                {"detail": ("Password reset OTP sent to your email")},
                status=status.HTTP_200_OK
            )
        return Response(
            {"detail": _("Failed to send OTP.")},
            status=status.HTTP_400_BAD_REQUEST
        )

class AccountPasswordResetConfirm(CreateAPIView):
    authentication_classes = []
    permission_classes = [permissions.AllowAny]
    serializer_class = PasswordResetConfirmWithOTPSerializer
    queryset = None

    @staticmethod
    def post(request, *args, **kwargs):
        serializer = PasswordResetConfirmWithOTPSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'detail': 'Password resetted successfully.'})
        return Response({'detail': 'Password reset failed.'}, status=status.HTTP_400_BAD_REQUEST)
