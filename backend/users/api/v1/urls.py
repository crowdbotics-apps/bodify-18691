from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
from .views import *
from users.api.v1.viewsets import (
    LoginViewSet,
)

#router = DefaultRouter()
#router.register("login", LoginViewSet, basename="login")

#urlpatterns = [
 #   path("", include(router.urls)),
#]


urlpatterns = [
    path('login/', CustomAuthToken.as_view(), name='user_login'),
    path('signup/', signup_view, name='user_signup'),
    path('', users_list, name='users'),
   # path('<int:pk>', user_detail, name='user_detail'),
   # path('change_password/<int:pk>/', change_password_view, name='auth_change_password'),
]
