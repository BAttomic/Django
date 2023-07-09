from django.urls import path
from . import views

urlpatterns = [
    path('cadastro_produto/', views.cadastro_produto, name="cadastro_produto"),
    path('lista_produtos/', views.lista_produtos, name='lista_produtos'),
    path('produto_especifico/', views.produto_especifico, name='produto_especifico'),
]