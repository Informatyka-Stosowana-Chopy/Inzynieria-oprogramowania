from django.urls import path, include
from .views import index, signUp

urlpatterns = [
    path('', index),
    path('signup', signUp),
    path('planets', index),
    path('spaceships', index),
    path('order', index),
    path('profile', index),
    path('about', index),
    path('login', index),
    path('signin', index),
]
