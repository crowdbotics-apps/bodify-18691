from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet, ResetPasswordViewSet, SocialLoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("reset/password", ResetPasswordViewSet, basename="reset-password")
router.register("login", LoginViewSet, basename="login")
router.register('social_login', SocialLoginViewSet, basename='social-login')
router.register("customtext", CustomTextViewSet)
router.register("homepage", HomePageViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
