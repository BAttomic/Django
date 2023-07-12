from django.urls import path
from . import views

urlpatterns = [
    path('cadastro_fornecedor/', views.cadastro_fornecedor, name="cadastro_fornecedor"),
    path('lista_fornecedores/', views.lista_fornecedores, name="lista_fornecedores"),
    path('fornecedor_especifico/', views.fornecedor_especifico, name="fornecedor_especifico"),
]