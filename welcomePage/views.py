from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def welcome(request):
    s = ""
    with open(r"D:\programowanie\python\Inzynieria_oprogramowania\welcomePage\enter.html", "r") as f:
        s = f.readlines()
    return HttpResponse(s)
