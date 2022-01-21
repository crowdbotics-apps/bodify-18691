import random

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

from users.models import UserResetPasswordCode

User = get_user_model()


def email_users(user, subject, template, domain):
    subject = subject
    message = render_to_string(template, {
        'user': user,
        'domain': domain,
        'email': user.email,
    })
    to_email = user.email

    email = EmailMessage(
        subject, message, to=[to_email], from_email=settings.EMAIL_FROM
    )
    email.content_subtype = 'html'
    email.send()


def send_reset_password_code(request):
    user = User.objects.get(email=request.data['email'])
    code = random.randint(0000, 9999)
    try:
        user_reset_code = UserResetPasswordCode.objects.get(user=user)
        user_reset_code.code = code
        user_reset_code.is_verified = False

    except UserResetPasswordCode.DoesNotExist:
        user_reset_code = UserResetPasswordCode(code=code, user=user)

    user_reset_code.save()
    email_users(user, '[Blsh Delivery App] Create new password',
                'account/account_reset_password_email.txt', code)