# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-08-26 19:16
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('python_belt_app', '0006_remove_job_done_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='done_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='doing', to='python_belt_app.User'),
        ),
    ]
