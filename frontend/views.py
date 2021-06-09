from django.shortcuts import render

# Create your views here.

def index(request, *args, **kwargs):
    if request.method == 'POST':
        text = request.POST.get('input')
    else:
        text = 'placeholder'
    if request.user.is_authenticated:
        name = 'imie' + request.user.username
        print(name)
        return render(request, 'frontend/index.html', {'name': name, 'text': text})
    else:
        name = 'blank_user'
    return render(request, 'frontend/index.html', {'name': name, 'text': text})
