import email
from django.db import models

# Create your models here.


STATUS_CHOICES = (
    ('Applied', 'Applied'),
    ('Accepted', 'Accepted'),
    ('Rejected', 'Rejected')
)


class Candidate(models.Model):
    full_name=models.CharField(max_length=255)
    email=models.EmailField(max_length=254)
    mobile_no=models.CharField(max_length=15)
    city=models.CharField(max_length=255)
    qualification=models.CharField(max_length=255)
    
    experience=models.CharField(max_length=10, default="0")

    status = models.CharField(choices=STATUS_CHOICES, max_length=10,default='Applied')

    resume = models.FileField(upload_to='resume/', blank=True)
    
