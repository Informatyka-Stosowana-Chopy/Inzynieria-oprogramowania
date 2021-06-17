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
    FE = 'KOBIETA'
    ME = 'MĘŻCZYZNA'
    OT = 'OTHER'

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    USER_TYPE = [(NORMAL, 'NORMALNY'),
                 (PRZEWOZNIK, 'PRZEWOŹNIK'),
                 (ADMIN, 'ADMINISTRATOR')]
    SEX = [(FE, 'KOBIETA'),
           (ME, 'MĘŻCZYZNA'),
           (OT, 'OTHER')]
    user_type = models.CharField(max_length=13, choices=USER_TYPE, default=NORMAL)
    sex = models.CharField(max_length=9, choices=SEX, default=ME)
    birth_date = models.DateField(default='2000-01-01')
    user_pesel = models.CharField(max_length=11, blank=True)
    home_planet = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'

class Planet(models.Model):

    name = models.CharField(max_length=100)
    orbitalPeriod = models.IntegerField()
    material = models.CharField(max_length=100)
    population = models.IntegerField()
    density = models.IntegerField()
    radius = models.IntegerField()
    temperature = models.IntegerField()

    def __str__(self):
        return f'{self.name} Planet of {self.orbitalPeriod} orbital period'

class Spaceship(models.Model):

    HIGH = 'V.I.P'
    NORMAL = 'STANDARDOWA'
    LOW = 'NISKA'

    SHIP_CLASS = [(HIGH, 'V.I.P'), (NORMAL, 'STANDARDOWA'), (LOW, 'NISKA')]

    name = models.CharField(max_length=100)
    power = models.IntegerField()
    hyperspace = models.BooleanField()
    production_year = models.IntegerField()
    capacity = models.IntegerField()
    ship_class = models.CharField(max_length=100, choices=SHIP_CLASS, default=NORMAL)
    boot_space = models.BooleanField()

    def __str__(self):
        return f'{self.name} Spaceship of {self.power} power'

class Flight(models.Model):

    home_planet = models.ForeignKey(Planet, on_delete=models.CASCADE, related_name='%(app_label)s_requests_created')
    destination_planet = models.ForeignKey(Planet, on_delete=models.CASCADE, related_name='%(class)s_requests_created')
    spaceship = models.ForeignKey(Spaceship, on_delete=models.CASCADE, related_name='%(class)s_%(app_label)s_requests_created')
    price = models.FloatField()
    departure_date = models.DateTimeField()
    date_of_arrival = models.DateTimeField()

    def __str__(self):
        return f'Flight from {self.home_planet.name} to {self.destination_planet.name} at {self.departure_date}'

class Ticket(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    flight = models.OneToOneField(Flight, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'Ticket for {self.user.username} from {self.flight.home_planet.name} to {self.flight.destination_planet.name}'