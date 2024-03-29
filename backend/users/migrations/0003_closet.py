# Generated by Django 2.2.20 on 2022-02-15 06:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_dob'),
    ]

    operations = [
        migrations.CreateModel(
            name='Closet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_id', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('rating', models.CharField(max_length=200)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_closet', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
