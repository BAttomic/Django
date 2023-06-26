from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'home.html')
    #return render(request, 'static/home/html/ver_home.html ')