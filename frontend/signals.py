import json
import os

from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Profile, Planet, Ticket, Flight, Spaceship


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()

# ================================================ PLANETY ================================================

@receiver(post_save, sender=Planet)
def create_planet(sender, instance, created, **kwargs):
    data = {}
    if created:
        try:
            if os.stat('database.json').st_size == 0:
                with open('database.json', 'w') as f:
                    data['planets'] = []
                    data['spaceships'] = []
                    data['flights'] = []
                    data['tickets'] = []
                    json.dump(data, f)
        except:
            with open('database.json', 'w') as f:
                data['planets'] = []
                data['spaceships'] = []
                data['flights'] = []
                data['tickets'] = []
                json.dump(data, f)
        with open('database.json', 'r') as f:
            data = json.load(f)
        with open('database.json', 'w') as f:
            print(instance.name, '\t', type(instance.name))
            print(instance.orbitalPeriod, '\t', type(instance.orbitalPeriod))
            print(instance.material, '\t', type(instance.material))
            print(instance.population, '\t', type(instance.population))
            print(instance.density, '\t', type(instance.density))
            print(instance.radius, '\t', type(instance.radius))
            print(instance.temperature, '\t', type(instance.temperature))
            data['planets'].append({'name': instance.name,
                                    'orbitalPeriod': instance.orbitalPeriod,
                                    'material': instance.material,
                                    'population': instance.population,
                                    'density': instance.density,
                                    'radius': instance.radius,
                                    'temperature': instance.temperature})

            json.dump(data, f)

# ================================================ STATKI ================================================

@receiver(post_save, sender=Spaceship)
def create_spaceship(sender, instance, created, **kwargs):
    data = {}
    if created:
        try:
            if os.stat('database.json').st_size == 0:
                with open('database.json', 'w') as f:
                    data['planets'] = []
                    data['spaceships'] = []
                    data['flights'] = []
                    data['tickets'] = []
                    json.dump(data, f)
        except:
            with open('database.json', 'w') as f:
                data['planets'] = []
                data['spaceships'] = []
                data['flights'] = []
                data['tickets'] = []
                json.dump(data, f)
        with open('database.json', 'r') as f:
            data = json.load(f)
        with open('database.json', 'w') as f:
            print(instance.name, '\t', type(instance.name))
            print(instance.power, '\t', type(instance.power))
            print(instance.hyperspace, '\t', type(instance.hyperspace))
            print(instance.production_year, '\t', type(instance.production_year))
            print(instance.capacity, '\t', type(instance.capacity))
            print(instance.ship_class, '\t', type(instance.ship_class))
            print(instance.boot_space, '\t', type(instance.boot_space))
            data['spaceships'].append({'name': instance.name,
                                    'power': instance.power,
                                    'hyperspace': instance.hyperspace,
                                    'production_year': instance.production_year,
                                    'capacity': instance.capacity,
                                    'ship_class': instance.ship_class,
                                    'boot_space': instance.boot_space})

            json.dump(data, f)

# ================================================ LOTY ================================================

@receiver(post_save, sender=Flight)
def create_flight(sender, instance, created, **kwargs):
    data = {}
    if created:
        try:
            if os.stat('database.json').st_size == 0:
                with open('database.json', 'w') as f:
                    data['planets'] = []
                    data['spaceships'] = []
                    data['flights'] = []
                    data['tickets'] = []
                    json.dump(data, f)
        except:
            with open('database.json', 'w') as f:
                data['planets'] = []
                data['spaceships'] = []
                data['flights'] = []
                data['tickets'] = []
                json.dump(data, f)
        with open('database.json', 'r') as f:
            data = json.load(f)
        with open('database.json', 'w') as f:
            print(instance.home_planet.name, '\t', type(instance.home_planet.name))
            print(instance.destination_planet.name, '\t', type(instance.destination_planet.name))
            print(instance.spaceship.name, '\t', type(instance.spaceship.name))
            print(instance.price, '\t', type(instance.price))
            print(instance.departure_date, '\t', type(instance.departure_date))
            print(instance.date_of_arrival, '\t', type(instance.date_of_arrival))
            data['flights'].append({'home_planet': instance.home_planet.name,
                                    'destination_planet': instance.destination_planet.name,
                                    'spaceship': instance.spaceship.name,
                                    'price': instance.price,
                                    'departure_date': str(instance.departure_date),
                                    'date_of_arrival': str(instance.date_of_arrival)})

            json.dump(data, f)

# ================================================ BILETY ================================================

@receiver(post_save, sender=Ticket)
def create_ticket(sender, instance, created, **kwargs):
    data = {}
    if created:
        try:
            if os.stat('database.json').st_size == 0:
                with open('database.json', 'w') as f:
                    data['planets'] = []
                    data['spaceships'] = []
                    data['flights'] = []
                    data['tickets'] = []
                    json.dump(data, f)
        except:
            with open('database.json', 'w') as f:
                data['planets'] = []
                data['spaceships'] = []
                data['flights'] = []
                data['tickets'] = []
                json.dump(data, f)
        with open('database.json', 'r') as f:
            data = json.load(f)
        with open('database.json', 'w') as f:
            print(instance.user.username, '\t', type(instance.user.username))
            print(instance.flight.__str__(), '\t', type(instance.flight.__str__()))
            print(instance.flight.departure_date, '\t', type(instance.flight.departure_date))
            print(instance.flight.date_of_arrival, '\t', type(instance.flight.date_of_arrival))
            data['tickets'].append({'user': instance.user.username,
                                    'flight': instance.flight.__str__(),
                                    'departure_date': str(instance.flight.departure_date),
                                    'date_of_arrival': str(instance.flight.date_of_arrival)})

            json.dump(data, f)
