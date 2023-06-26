from django.urls import path
from . import views

urlpatterns = [
    path('cadastro_cliente/', views.cadastro_cliente, name="cadastro_cliente"),
    path('lista_clientes/', views.lista_clientes, name='lista_clientes'),
    path('cliente_especifico/', views.cliente_especifico, name='cliente_especifico'),
]