function RedirecionarPag(url) {
  window.location.href = url;
}

// Função para formatar letras
function FormatarLETRAS(input) {
  var valor = input.value
  valor = valor.replace(/[^a-zA-ZÀ-ÿ\s]+/, '');
  input.value = valor
}

// Função para formatar números
function FormatarNUMEROS(input) {
  var valor = input.value
  valor = valor.replace(/[^0-9]/g, '');
  input.value = valor
}

// Função para formatar CPF
function FormatarCPF(cpf) {
  var valor = cpf.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  cpf.value = valor;
}

// Função para formatar CNPJ
function FormatarCNPJ(cnpj) {
  var valor = cnpj.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
  valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
  valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
  cnpj.value = valor;
}

// Função para formatar CEP
function FormatarTELEFONE(input) {
  var valor = input.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2$3-$4');
  input.value = valor;
}

// Função para verificar a existência de um CNPJ
// Créditos: https://www.geradorcnpj.com/javascript-validar-cnpj.htm
function ValidarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

  if (cnpj.length !== 14) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (ex: 11111111111111)
  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  // Validação do primeiro dígito verificador
  let soma = 0;
  let peso = 2;

  for (let i = 11; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = (peso + 1) % 10 || 2;
  }

  let digitoVerificador = (soma % 11 < 2) ? 0 : 11 - (soma % 11);
  if (parseInt(cnpj.charAt(12)) !== digitoVerificador) {
    return false;
  }

  // Validação do segundo dígito verificador
  soma = 0;
  peso = 2;

  for (let i = 12; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = (peso + 1) % 10 || 2;
  }

  digitoVerificador = (soma % 11 < 2) ? 0 : 11 - (soma % 11);
  if (parseInt(cnpj.charAt(13)) !== digitoVerificador) {
    return false;
  }

  return true;
}

// Função para validar CPF (Não implica que é existente)
// Créditos: https://www.geradorcpf.com/javascript-validar-cpf.htm
function ValidarCPF(cpf) {
  cpf = cpf.value.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  var sum = 0;
  var reminder;

  for (var i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  reminder = (sum * 10) % 11;

  if (reminder === 10 || reminder === 11) {
    reminder = 0;
  }

  if (reminder !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (var i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  reminder = (sum * 10) % 11;

  if (reminder === 10 || reminder === 11) {
    reminder = 0;
  }

  if (reminder !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}

// Função para formatar CEP e completar os campos de endereço
function FormatarCEP(cep) {
  var valor = cep.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
  cep.value = valor;

  // Consultar a API de CEP para preencher automaticamente os campos de endereço
  if (cep.value.length === 9) {
    var url = `https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) { // Adiciona os valores se o CEP existir
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('rua').value = data.logradouro;
          document.getElementById('uf').value = data.uf; 

        } else { // Limpa os valores se o CEP não existir
          document.getElementById('cidade').value = '';
          document.getElementById('bairro').value = '';
          document.getElementById('rua').value = '';
          document.getElementById('uf').value = '';
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao consultar o CEP:', error);
      });

  } else { // Limpa os valores se o CEP não tiver 9 dígitos
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('uf').value = '';
  }
}

// Função para mostrar os campos de acordo com o tipo de pessoa
function MostrarCampos(tipo) {
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

// Função para validar o formulário
function ValidarFormulario() {
  var valid = true;

  var tipoPessoa = document.getElementById("tipo-pessoa").value;
  if (tipoPessoa == "pessoa-fisica") {
    var nome = document.getElementById('nome');
    var cpf = document.getElementById('cpf');
    var rg = document.getElementById('rg');

    // Validação do NOME
    if (!/^[A-Za-zÀ-ú\s]+$/.test(nome.value)) {
      nome.classList.add('error');
      valid = false;
    } else {
      nome.classList.remove('error');
    }
    
    // Validação do CPF
    if (!ValidarCPF(cpf)) {
      cpf.classList.add('error');
      valid = false;
    } else {
      cpf.classList.remove('error');
    }

    // Validação do RG
    if (!/^\d{7,10}$/.test(rg.value)) {
      rg.classList.add('error');
      valid = false;
    } else {
      rg.classList.remove('error');
    }

  } else if (tipoPessoa == "pessoa-juridica") {
    var razaosocial = document.getElementById('razaosocial');
    var cnpj = document.getElementById('cnpj');
    var ie = document.getElementById('ie');

    // Validação da RAZÃO SOCIAL
    if (!/^[A-Za-zÀ-ú\s]+$/.test(razaosocial.value)) {
      razaosocial.classList.add('error');
      valid = false;
    } else {
      razaosocial.classList.remove('error');
    }

    // Validação do CNPJ
    if (!ValidarCNPJ(cnpj.value)) {
      cnpj.classList.add('error');
      valid = false;
    } else {
      cnpj.classList.remove('error');
    }

    // Validação da INSCRIÇÃO ESTADUAL
    if (!/^\d{2,14}$/.test(ie.value)) {
      ie.classList.add('error');
      valid = false;
    } else {
      ie.classList.remove('error');
    }
  }

  // Validação do telefone 1
  var telefone1 = document.getElementById('telefone1');
  if (!/\(\d{2}\) \d{5}-\d{4}/.test(telefone1.value)) {
    telefone1.classList.add('error');
    valid = false;
  } else {
    telefone1.classList.remove('error');
  }

  // Validação do telefone 2
  var telefone2 = document.getElementById('telefone2');
  if (telefone2.value && !/\(\d{2}\) \d{5}-\d{4}/.test(telefone2.value)) {
    telefone2.classList.add('error');
    valid = false;
  } else {
    telefone2.classList.remove('error');
  }

  // Validação do email
  var email = document.getElementById('email');
  if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(email.value)) {
    email.classList.add('error');
    valid = false;
  } else {
    email.classList.remove('error');
  }

  // Validação do CEP
  var cep = document.getElementById('cep');
  if (!/^\d{5}-\d{3}$/.test(cep.value)) {
    cep.classList.add('error');
    valid = false;
  } else {
    cep.classList.remove('error');
  }

  // Validação do UF
  var uf = document.getElementById('uf');
  if (uf.value.trim() === '') {
    uf.classList.add('error');
    valid = false;
  } else {
    uf.classList.remove('error');
  }

  // Validação da cidade
  var cidade = document.getElementById('cidade');
  if (!/^[A-Za-zÀ-ú\s]+$/.test(cidade.value)) {
    cidade.classList.add('error');
    valid = false;
  } else {
    cidade.classList.remove('error');
  }

  // Validação do bairro
  var bairro = document.getElementById('bairro');
  if (bairro.value.trim() === '') {
    bairro.classList.add('error');
    valid = false;
  } else {
    bairro.classList.remove('error');
  }
  
  // Validação da rua
  var rua = document.getElementById('rua');
  if (rua.value.trim() === '') {
    rua.classList.add('error');
    valid = false;
  } else {
    rua.classList.remove('error');
  }

  // Validação do número da casa
  var numero = document.getElementById('numero');
  if (!/^\d{1,5}$/.test(numero.value)) {
    numero.classList.add('error');
    valid = false;
  } else {
    numero.classList.remove('error');
  }

  // Se todos os campos estiverem válidos, retorna true
  if (valid) {
    alert('Produto cadastrado com sucesso!');
    return true;
  } else {
    return false;
  }
}