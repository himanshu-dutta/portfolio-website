# Generated by Django 3.0.8 on 2020-07-30 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20200729_1252'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='intro',
            field=models.CharField(max_length=150),
        ),
    ]