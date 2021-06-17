# Generated by Django 3.1.7 on 2021-06-17 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0003_profile_sex'),
    ]

    operations = [
        migrations.CreateModel(
            name='Planet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('orbitalPeriod', models.IntegerField()),
                ('material', models.CharField(max_length=100)),
                ('population', models.IntegerField()),
                ('density', models.IntegerField()),
                ('radius', models.IntegerField()),
                ('temperature', models.IntegerField()),
            ],
        ),
    ]