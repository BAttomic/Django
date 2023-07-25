from django.shortcuts import render
from django.http import HttpResponse
from .models import Fornecedor

def lista_fornecedores(request):
    
    if request.method == "GET":
        data = Fornecedor.objects.all()
        return render(request, './lista_fornecedores.html', {'data': data})
    
    elif request.method == "POST":
        Fornecedor_id = request.POST.get('Fornecedor_id')
        return fornecedor_especifico(request, Fornecedor_id)



def fornecedor_especifico(request, ID):

    if request.method == "POST":

        FornecedorData = Fornecedor.objects.all()
        ID=int(ID)

        return render(request, './fornecedor_especifico.html', {  
            'ID': FornecedorData[ID].id,
            'NOME_RAZAO':FornecedorData[ID].NOME_RAZAO,                    'APELIDO_FANTASIA': FornecedorData[ID].APELIDO_FANTASIA,
            'CPF_CNPJ': FornecedorData[ID].CPF_CNPJ,                       'RG_IE': FornecedorData[ID].RG_IE,
            'TELEFONE1': FornecedorData[ID].TELEFONE1,                     'TELEFONE2': FornecedorData[ID].TELEFONE2,
            'EMAIL': FornecedorData[ID].EMAIL,                             'UF': FornecedorData[ID].UF,
            'CIDADE': FornecedorData[ID].CIDADE,                           'BAIRRO': FornecedorData[ID].BAIRRO,
            'RUA': FornecedorData[ID].RUA,                                 'NUMERO': FornecedorData[ID].NUMERO,
            'COMPLEMENTO': FornecedorData[ID].COMPLEMENTO,                 'CEP': FornecedorData[ID].CEP,
            'OUTRAS_INFORMACOES': FornecedorData[ID].OUTRAS_INFORMACOES,   'DATA_REGISTRO': FornecedorData[ID].DATA_REGISTRO})
    
    else:
        return HttpResponse("Erro! Método de requisição inválido")



def cadastro_fornecedor(request):

    if request.method == "GET":
        return render(request, './cadastro_fornecedor.html')
    
    elif request.method == "POST":

        if request.POST.get('tipo-pessoa') == "pessoa-fisica":
            TIPO = "PF"
            NOME_RAZAO = request.POST.get('nome')
            APELIDO_FANTASIA = request.POST.get('apelido')
            CPF_CNPJ = request.POST.get('cpf')
            RG_IE = request.POST.get('rg')

        elif request.POST.get('tipo-pessoa') == "pessoa-juridica":
            TIPO = "PJ"
            NOME_RAZAO = request.POST.get('razaosocial')
            APELIDO_FANTASIA = request.POST.get('nomefantasia')
            CPF_CNPJ = request.POST.get('cnpj')
            RG_IE = request.POST.get('ie')

        TELEFONE1 = request.POST.get('telefone1')
        TELEFONE2 = request.POST.get('telefone2')
        EMAIL = request.POST.get('email')
        UF = request.POST.get('uf')
        CIDADE = request.POST.get('cidade')
        BAIRRO = request.POST.get('bairro')
        RUA = request.POST.get('rua')
        NUMERO = request.POST.get('numero')
        COMPLEMENTO = request.POST.get('complemento')
        CEP = request.POST.get('cep')
        OUTRAS_INFORMACOES = request.POST.get('outras-informacoes')

        FornecedorCheck = Fornecedor.objects.filter(CPF_CNPJ=CPF_CNPJ)
        if FornecedorCheck.exists():
            return HttpResponse("Erro! Fornecedor já cadastrado")
        
        else:
            FornecedorData=Fornecedor(  TIPO=TIPO,                  NOME_RAZAO=NOME_RAZAO,              APELIDO_FANTASIA=APELIDO_FANTASIA,
                                        CPF_CNPJ=CPF_CNPJ,          RG_IE=RG_IE,                        TELEFONE1=TELEFONE1,
                                        TELEFONE2=TELEFONE2,        EMAIL=EMAIL,                        UF=UF,
                                        CIDADE=CIDADE,              BAIRRO=BAIRRO,                      RUA= RUA,
                                        NUMERO=NUMERO,              COMPLEMENTO=COMPLEMENTO,            CEP=CEP,
                                        OUTRAS_INFORMACOES=OUTRAS_INFORMACOES)
            FornecedorData.save()
            return render(request, 'home.html')