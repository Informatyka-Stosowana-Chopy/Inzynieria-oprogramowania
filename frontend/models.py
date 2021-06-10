from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Data(models.Model):

    product=models.CharField(max_length=10)
    price=models.CharField(max_length=20)
    
    def __str__(self):
        return self.product
    class Meta:
        db_table='product_description'

class Profile(models.Model):
    NORMAL = 'NORMALNY'
    PRZEWOZNIK = 'PRZEWOŹNIK'
    ADMIN = 'ADMINISTRATOR'
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    USER_TYPE = [(NORMAL, 'NORMALNY'),
                 (PRZEWOZNIK, 'PRZEWOŹNIK'),
                 (ADMIN, 'ADMINISTRATOR')]
    user_type = models.CharField(max_length=13, choices=USER_TYPE, default=NORMAL)
    birth_date = models.DateField(default='2000-01-01')
    user_pesel = models.CharField(max_length=11, blank=True)
    home_planet = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'
