# Generated by Django 2.2.20 on 2022-01-26 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='dob',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Date of Birth'),
        ),
    ]