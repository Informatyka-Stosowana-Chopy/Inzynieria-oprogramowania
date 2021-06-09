from django.shortcuts import render
from django.contrib.auth import authenticate, login

# Create your views here.

def index(request, *args, **kwargs):
    if request.method == 'POST':
        text = request.POST.get('input')
        username = request.POST.get('input-login')
        password = request.POST.get('input-password')
        user = authenticate(request, username=username, password=password)
        print(type(user))
        if user is not None:
            login(request, user)
        if request.user.is_authenticated:
            name = 'imie' + request.user.username
            print(name)
            return render(request, 'frontend/index.html', {'name': name, 'text': text, 'user': user})
    else:
        text = 'placeholder'
    if request.user.is_authenticated:
        name = 'imie' + request.user.username
        print(name)
        return render(request, 'frontend/index.html', {'name': name, 'text': text})
    else:
        name = 'blank_user'
    return render(request, 'frontend/index.html', {'name': name, 'text': text})
