# Generated by Django 2.2.20 on 2022-01-27 02:11

from django.conf import settings
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo_front', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('photo_side', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_photo_measurements', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Manual',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jean_size', models.CharField(max_length=200)),
                ('fav_brands', models.CharField(max_length=200)),
                ('shopping_issue_one', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('shopping_issue_two', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_manual_measurements', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
