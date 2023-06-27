from django.shortcuts import render
from django.http import HttpResponse
from .models import Cliente

def lista_clientes(request):
    
    if request.method == "GET":
        data = Cliente.objects.all()
        return render(request, './lista_clientes.html', {'data': data})
    
    elif request.method == "POST":
        cliente_id = request.POST.get('cliente_id')
        return cliente_especifico(request, cliente_id)



def cliente_especifico(request, ID):

    if request.method == "POST":

        ClienteData = Cliente.objects.all()
        ID=int(ID)
        ID=ID-1

        return render(request, './cliente_especifico.html', {  
            'ID': ID+1,                                                 'ESTADO_CONTA': ClienteData[ID].ESTADO_CONTA,
            'TIPO': ClienteData[ID].TIPO,
            'NOME_RAZAO':ClienteData[ID].NOME_RAZAO,                    'APELIDO_FANTASIA': ClienteData[ID].APELIDO_FANTASIA,
            'CPF_CNPJ': ClienteData[ID].CPF_CNPJ,                       'RG_IE': ClienteData[ID].RG_IE,
            'TELEFONE1': ClienteData[ID].TELEFONE1,                     'TELEFONE2': ClienteData[ID].TELEFONE2,
            'EMAIL': ClienteData[ID].EMAIL,                             'UF': ClienteData[ID].UF,
            'CIDADE': ClienteData[ID].CIDADE,                           'BAIRRO': ClienteData[ID].BAIRRO,
            'RUA': ClienteData[ID].RUA,                                 'NUMERO': ClienteData[ID].NUMERO,
            'COMPLEMENTO': ClienteData[ID].COMPLEMENTO,                 'CEP': ClienteData[ID].CEP,
            'OUTRAS_INFORMACOES': ClienteData[ID].OUTRAS_INFORMACOES,   'DATA_REGISTRO': ClienteData[ID].DATA_REGISTRO})
    
    else:
        return HttpResponse("Erro! Método de requisição inválido")



def cadastro_cliente(request):

    if request.method == "GET":
        return render(request, './cadastro_cliente.html')
    
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

        ClienteCheck = Cliente.objects.filter(CPF_CNPJ=CPF_CNPJ)
        if ClienteCheck.exists():
            return HttpResponse("Erro! Cliente já cadastrado")
        
        else:
            ClienteData=Cliente(TIPO=TIPO, NOME_RAZAO=NOME_RAZAO, APELIDO_FANTASIA=APELIDO_FANTASIA, CPF_CNPJ=CPF_CNPJ, RG_IE=RG_IE, TELEFONE1=TELEFONE1, TELEFONE2=TELEFONE2, EMAIL=EMAIL, UF=UF, CIDADE=CIDADE, BAIRRO=BAIRRO, RUA= RUA, NUMERO=NUMERO, COMPLEMENTO=COMPLEMENTO, CEP=CEP, OUTRAS_INFORMACOES=OUTRAS_INFORMACOES)
            ClienteData.save()
            return render(request, 'home.html')