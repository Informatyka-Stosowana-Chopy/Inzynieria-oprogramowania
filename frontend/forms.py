from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile


class UserSignUpForm(forms.ModelForm):

    class Meta:
        model = User
        # fields = ('username', 'firstname', 'lastname', 'password1', 'password2', 'birthdate', 'sex', 'mail',
        #           'homeplanet', 'pesel')
        fields = ('username', 'first_name', 'last_name', 'password', 'email')


class ProfileSignUpForm(forms.ModelForm):

    class Meta:
        model = Profile
        fields = ('birth_date', 'sex', 'home_planet', 'user_pesel', )
