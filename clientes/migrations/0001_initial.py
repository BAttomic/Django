# Generated by Django 4.2.2 on 2023-06-27 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TIPO', models.CharField(max_length=4)),
                ('NOME_RAZAO', models.CharField(max_length=100)),
                ('APELIDO_FANTASIA', models.CharField(max_length=50)),
                ('CPF_CNPJ', models.CharField(max_length=18)),
                ('RG_IE', models.CharField(max_length=13)),
                ('TELEFONE1', models.CharField(max_length=15)),
                ('TELEFONE2', models.CharField(max_length=15)),
                ('EMAIL', models.CharField(max_length=40)),
                ('UF', models.CharField(max_length=2)),
                ('CIDADE', models.CharField(max_length=30)),
                ('BAIRRO', models.CharField(max_length=30)),
                ('RUA', models.CharField(max_length=30)),
                ('NUMERO', models.CharField(max_length=5)),
                ('COMPLEMENTO', models.CharField(max_length=20)),
                ('CEP', models.CharField(max_length=9)),
                ('OUTRAS_INFORMACOES', models.CharField(max_length=200)),
                ('DATA_REGISTRO', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
