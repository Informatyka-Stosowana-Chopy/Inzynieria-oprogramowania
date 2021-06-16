from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import UserSignUpForm, ProfileSignUpForm
from django.contrib.auth.forms import UserCreationForm, User

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
        username_test = 'plejsholder'

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
        User.objects.create_user(username=username, email=email, password=password1, first_name=first_name,
                                 last_name=last_name)
        if True:
            user = User.objects.get(username=username)
            # print(user.email)
            profile_form = ProfileSignUpForm(request.POST, instance=user)
            if profile_form.is_valid():
                profile_form.save()
                return redirect('/')
            else:
                print('Profile form is not valid')
        else:
            print('User form is not valid')
    return redirect('/signin')
