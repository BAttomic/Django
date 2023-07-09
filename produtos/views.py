from django.shortcuts import render
from django.http import HttpResponse
from .models import Produto

def lista_produtos(request):

    if request.method == "GET":
        return render(request, './lista_produtos.html')
    
def produto_especifico(request):

    if request.method == "GET":
        return render(request, './produto_especifico.html')
    
def cadastro_produto(request):

    if request.method == "GET":
        return render(request, './cadastro_produto.html')