# Generated by Django 3.1.7 on 2021-06-10 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='birth_date',
            field=models.DateField(default='2000-01-01'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='home_planet',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user_pesel',
            field=models.CharField(blank=True, max_length=11),
        ),
    ]
