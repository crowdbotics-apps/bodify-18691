from django.contrib.sites.models import Site
from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string

from modules.twilio_utils import *


def send_password_reset_otp_email(user, otp):
    send_mail(
        'Password Reset OTP',
        'Your OTP: %s' % otp,
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        fail_silently=False,
    )


def user_mobile_number_verification_create(user, mobile_number):
    verification = None
    try:
        verification = send_sms_verification(mobile_number)
    except Exception as e:
        print(e)

    if verification:
        obj = user.user_mobile_number.create(mobile_number=mobile_number, otp_hash=verification.sid)
        return obj
    return None


def send_user_credentials(user, password):
    current_site = Site.objects.get(id=settings.SITE_ID)
    subject = 'Account Credentials'
    to = user.email
    from_email = settings.DEFAULT_FROM_EMAIL
    text_content = ""
    data = {'user': user, 'site': current_site, 'password': password}
    html_content = render_to_string('users/emails/email_credentials.html', data)
    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    return msg.send()
