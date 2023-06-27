// Função para voltar à página anterior
function PagAnterior() {
  window.history.back();
}
function formatarLETRAS(input) {
  var valor = input.value
  valor = valor.replace(/[^a-zA-ZÀ-ÿ\s]+/, '');
  input.value = valor
}

function formatarNUMEROS(input) {
  var valor = input.value
  valor = valor.replace(/[^0-9]/g, '');
  input.value = valor
}

function formatarCEP(cep) {
  var valor = cep.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
  cep.value = valor
}

function formatarCPF(cpf) {
  var valor = cpf.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  cpf.value = valor;
}

function formatarCNPJ(cnpj) {
  var valor = cnpj.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
  valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
  valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
  cnpj.value = valor;
}

function formatarTELEFONE(input) {
  var valor = input.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2$3-$4');
  input.value = valor;
}

function validarFormulario() {
  var tipoPessoa = document.getElementById("tipo-pessoa").value;

  var telefone1 = document.getElementById('telefone1');
  var telefone2 = document.getElementById('telefone2');
  var email = document.getElementById('email');

  var uf = document.getElementById('uf');
  var cidade = document.getElementById('cidade');
  var bairro = document.getElementById('bairro');
  var rua = document.getElementById('rua');
  var numero = document.getElementById('numero');
  var complemento = document.getElementById('complemento');
  var cep = document.getElementById('cep');
  var valid = true;

  if (tipoPessoa == "pessoa-fisica") {
    var nome = document.getElementById('nome');
    var apelido = document.getElementById('apelido');
    var cpf = document.getElementById('cpf');
    var rg = document.getElementById('rg');

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome.value)) {
      nome.classList.add('error');
      valid = false;
      } else {
      nome.classList.remove('error');
      }

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(apelido.value)) {
      apelido.classList.add('error');
      valid = false;
      } else {
      apelido.classList.remove('error');
      }

    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value)) {
      cpf.classList.add('error');
      valid = false;
      } else {
      cpf.classList.remove('error');
      }

    if (!/^\d{7,10}$/.test(rg.value)) {
      rg.classList.add('error');
      valid = false;
      } else {
      rg.classList.remove('error');
      }

  } else if (tipoPessoa == "pessoa-juridica") {
    var razaosocial = document.getElementById('razaosocial');
    var nomefantasia = document.getElementById('nomefantasia');
    var cnpj = document.getElementById('cnpj');
    var ie = document.getElementById('ie');

  if (!/^[a-zA-ZÀ-ÿ0-9\s]+$/.test(razaosocial.value)) {
    razaosocial.classList.add('error');
    valid = false;
    } else {
    razaosocial.classList.remove('error');
    }

  if (!/^[a-zA-ZÀ-ÿ0-9\s]+$/.test(nomefantasia.value)) {
    nomefantasia.classList.add('error');
    valid = false;
    } else {
    nomefantasia.classList.remove('error');
    }

  if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj.value)) {
    cnpj.classList.add('error');
    valid = false;
    } else {
    cnpj.classList.remove('error');
    }

  if (!/^\d{2,14}$/.test(ie.value)) {
    ie.classList.add('error');
    valid = false;
    } else {
    ie.classList.remove('error');
    }
  }
  
  if (!/\(\d{2}\) \d{5}-\d{4}/.test(telefone1.value)) {
    telefone1.classList.add('error');
    valid = false;
    } else {
    telefone1.classList.remove('error');
  }

  if (telefone2.value && !/\(\d{2}\) \d{5}-\d{4}/.test(telefone2.value)) {
    telefone2.classList.add('error');
    valid = false;
    } else {
    telefone2.classList.remove('error');
  }

  if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(email.value)) {
    email.classList.add('error');
    valid = false;
    } else {
    email.classList.remove('error');
  }

  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(cidade.value)) {
    cidade.classList.add('error');
    valid = false;
    } else {
    cidade.classList.remove('error');
  }

  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(bairro.value)) {
    bairro.classList.add('error');
    valid = false;
    } else {
      bairro.classList.remove('error');
  }

  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(rua.value)) {
    rua.classList.add('error');
    valid = false;
    } else {
      rua.classList.remove('error');
  }

  if (!/^\d{1,5}$/.test(numero.value)) {
    numero.classList.add('error');
    valid = false;
    } else {
    numero.classList.remove('error');
  }

  if (!/^\d{5}-\d{3}$/.test(cep.value)) {
    cep.classList.add('error');
    valid = false;
    } else {
    cep.classList.remove('error');
  }

  if (valid) {
    alert('Cliente cadastrado com sucesso!');
    return true;
    } else {
    return false;
  }
}

function mostrarCampos(tipo) {
  var camposPessoaFisica = document.getElementById('campos-pessoa-fisica');
  var camposPessoaJuridica = document.getElementById('campos-pessoa-juridica');

  if (tipo === "pessoa-fisica") {
    camposPessoaFisica.style.display = 'block';
    camposPessoaJuridica.style.display = 'none';
  } else if (tipo === "pessoa-juridica") {
    camposPessoaFisica.style.display = 'none';
    camposPessoaJuridica.style.display = 'block';
  } else {
    camposPessoaFisica.style.display = 'none';
    camposPessoaJuridica.style.display = 'none';
  }
}