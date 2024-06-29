from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(response):
    return HttpResponse("<h1>Xing Xing Xing</h1>")