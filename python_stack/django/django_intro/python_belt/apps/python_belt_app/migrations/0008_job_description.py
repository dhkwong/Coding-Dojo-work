# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-08-26 19:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('python_belt_app', '0007_job_done_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='description',
            field=models.TextField(default=''),
        ),
    ]