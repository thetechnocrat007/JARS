# Generated by Django 4.0.4 on 2022-05-03 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidate',
            name='status',
            field=models.CharField(choices=[('Applied', 'Applied'), ('Accepted', 'Accepted'), ('Rejected', 'Rejected')], default='AP', max_length=10),
        ),
    ]
