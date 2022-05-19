from django.conf import settings
from twilio.rest import Client as TwilioClient

account_sid = settings.TWILIO_ACCOUNT_SID
auth_token = settings.TWILIO_AUTH_TOKEN

twilio_client = TwilioClient(account_sid, auth_token)


def lookup_phone_number(mobile_number):
    return twilio_client.lookups.v1.phone_numbers(mobile_number).fetch()


def send_sms_verification(mobile_number, channel='sms'):
    return twilio_client.verify.services(settings.TWILIO_VERIFICATION_SERVICE_SID) \
        .verifications.create(to=mobile_number, channel=channel)


def _verification_checks_with_phone(mobile_number, sid, code):
    return twilio_client.verify.services(settings.TWILIO_VERIFICATION_SERVICE_SID) \
        .verification_checks.create(to=mobile_number, code=code)


def mobile_verification_checks_with_sid(sid, code):
    return twilio_client.verify.services(settings.TWILIO_VERIFICATION_SERVICE_SID) \
        .verification_checks.create(verification_sid=sid, code=code)


