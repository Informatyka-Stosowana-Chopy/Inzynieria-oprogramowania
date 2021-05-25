from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('planets', index),
    path('spaceships', index),
    path('order', index),
    path('profile', index),
    path('about', index),
]
