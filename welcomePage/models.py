from django.db import models

# Create your models here.
class Data(models.Model):

    product=models.CharField(max_length=10)
    price=models.CharField(max_length=20)
    
    def __str__(self):
        return self.product
    class Meta:
        db_table='product_description'