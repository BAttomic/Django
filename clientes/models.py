from django.db import models

class Cliente(models.Model):
    ESTADO_CONTA = 'ATIVO'
    NOME_RAZAO = models.CharField(max_length=100)
    APELIDO_FANTASIA = models.CharField(max_length=100)
    CPF_CNPJ = models.CharField(max_length=15)
    RG_IE = models.CharField(max_length=10)
    TELEFONE1 = models.CharField(max_length=15)
    TELEFONE2 = models.CharField(max_length=15)
    EMAIL = models.CharField(max_length=30)
    UF = models.CharField(max_length=30)
    CIDADE = models.CharField(max_length=50)
    BAIRRO = models.CharField(max_length=50)
    RUA = models.CharField(max_length=50)
    NUMERO = models.CharField(max_length=5)
    COMPLEMENTO = models.CharField(max_length=20)
    CEP = models.CharField(max_length=9)
    OUTRAS_INFORMACOES = models.CharField(max_length=200)
    DATA_REGISTRO = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.NOME_RAZAO