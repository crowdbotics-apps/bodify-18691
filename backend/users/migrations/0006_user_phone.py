# Generated by Django 2.2.20 on 2022-04-26 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20220426_0711'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.CharField(max_length=20, null=True, verbose_name='Phone Number'),
        ),
    ]
