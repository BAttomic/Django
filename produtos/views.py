from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from fornecedores.models import Fornecedor
from .models import Categoria, Grupo, SubGrupo

def lista_produtos(request):

    if request.method == "GET":
        return render(request, './lista_produtos.html')
    
def produto_especifico(request):

    if request.method == "GET":
        return render(request, './produto_especifico.html')
    
def cadastro_produto(request):

    if request.method == "GET":
        data_fornecedores= Fornecedor.objects.all()
        data_categorias= Categoria.objects.all()
        data_grupos= Grupo.objects.all()
        data_subgrupos= SubGrupo.objects.all()
        return render(request, './cadastro_produto.html', {'data_fornecedores': data_fornecedores, 'data_categorias': data_categorias, 'data_grupos': data_grupos, 'data_subgrupos': data_subgrupos})

def cadastro_categorias(request):

    categorias = Categoria.objects.all()

    if request.method == "GET":
        return render(request, './cadastro_categorias.html', {'categorias': categorias})
    
    if request.method == "POST":
        categoria_nome = request.POST.get('categoria')
        grupo_nome = request.POST.get('grupo')
        subgrupo_nome = request.POST.get('subgrupo')

        categoria = Categoria.objects.create(nome=categoria_nome)
        grupo = Grupo.objects.create(nome=grupo_nome, categoria=categoria)
        SubGrupo.objects.create(nome=subgrupo_nome, grupo=grupo)

        return render(request, 'cadastro_categorias.html', {'categorias': categorias})


