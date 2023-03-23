from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
from users.api.v1.viewsets import (
    LoginViewSet,
)

#router = DefaultRouter()
#router.register("login", LoginViewSet, basename="login")

#urlpatterns = [
 #   path("", include(router.urls)),
#]


urlpatterns = [
    path('login/token/', CustomAuthToken.as_view(), name='account_login'),
    path('signup/', AccountRegistration.as_view(), name='account_registration'),
    path('login/social/google/', GoogleLoginAPI.as_view(), name="google_login"),
    path('login/social/facebook/', FacebookLoginAPI.as_view(), name="facebook_login"),
    path('login/social/apple/', AppleLoginAPI.as_view(), name="apple_login"),
    path('profile/', AuthAccountProfileDetails.as_view(), name='auth_profile'),
    path('password-reset/', AccountPasswordReset.as_view()),
    path('password-reset/confirm/', AccountPasswordResetConfirm.as_view(), ),
    #path('password/change/', AccountPasswordChange.as_view()),
]
