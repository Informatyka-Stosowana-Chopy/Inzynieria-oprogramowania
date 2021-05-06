from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def welcome(request):
    s = ""
    with open(r"welcomePage\enter.html", "r") as f:
        s = f.readlines()
    return HttpResponse(s)

