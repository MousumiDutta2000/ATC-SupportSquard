# Generated by Django 4.1.7 on 2023-04-16 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ATCdash', '0010_useractivity_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='useractivity',
            name='change_message',
            field=models.TextField(blank=True, null=True),
        ),
    ]
