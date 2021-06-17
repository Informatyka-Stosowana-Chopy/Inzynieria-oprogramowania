from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import UserSignUpForm, ProfileSignUpForm
from django.contrib.auth.forms import UserCreationForm, User
from datetime import datetime

# Create your views here.

def index(request, *args, **kwargs):
    if request.method == 'POST':
        text = request.POST.get('input')
        username = request.POST.get('input-login')
        username_test = request.POST.get('username')
        password = request.POST.get('input-password')
        user = authenticate(request, username=username, password=password)
        print(type(user))
        if user is not None:
            login(request, user)
        if request.user.is_authenticated:
            name = 'user: ' + request.user.username
            print(name)
            return render(request, 'frontend/index.html', {'name': name, 'text': text, 'user': user, 'username_test': username_test})
    else:
        text = 'placeholder'
        username_test = 'plejsholder'  #xd

    if request.user.is_authenticated:
        name = 'user: ' + request.user.username
        print(name)
        return render(request, 'frontend/index.html', {'name': name, 'text': text, 'username_test': username_test})
    else:
        name = 'blank_user'
    return render(request, 'frontend/index.html', {'name': name, 'text': text, 'username_test': username_test})


def signUp(request, *args, **kwargs):
    # return render(request, 'frontend/index.html')
    if request.method == 'POST':
        # user_form = UserSignUpForm(request.POST)
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        password1 = request.POST.get('password')
        password2 = request.POST.get('password2')
        email = request.POST.get('email')
        print(username, '\n', first_name, '\n', last_name, '\n', password1, '\n', email)

        if password1 == password2:
            User.objects.create_user(username=username, email=email, password=password1, first_name=first_name,
                                     last_name=last_name)

            user = User.objects.get(username=username)
            # print(user.email)
            # profile_form = ProfileSignUpForm(request.POST, instance=user)
            user.profile.birth_date = datetime.strptime(request.POST.get('birth_date'), '%m/%d/%Y')
            user.profile.sex = request.POST.get('sex')
            user.profile.home_planet = request.POST.get('home_planet')
            user.profile.user_pesel = request.POST.get('user_pesel')
            print(user.profile.birth_date, '\n', user.profile.sex, '\n', user.profile.home_planet, '\n', user.profile.user_pesel)
            print('Typ daty: ', type(user.profile.birth_date))
            user.profile.save()
            return redirect('/')
        else:
            print('User form is not valid')
            messages.error(request, 'Please correct the error below.')
    return redirect('/signin')


def userLogout(request, *args, **kwargs):
    logout(request)
    messages.error(request, 'You logged out successfully')
    return redirect('/')
