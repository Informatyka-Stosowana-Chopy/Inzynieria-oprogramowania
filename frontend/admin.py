from django.contrib import admin
from .models import Profile, Planet, Spaceship, Flight, Ticket

# Register your models here.

admin.site.register(Profile)
admin.site.register(Planet)
admin.site.register(Spaceship)
admin.site.register(Flight)
admin.site.register(Ticket)
