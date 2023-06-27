// Função para voltar à página anterior
function PagAnterior() {
  window.history.back();
}

// Função para detectar se o valor é CPF ou CNPJ
function detectarCPFouCNPJ(valor) {
  var cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
  var cnpjRegex = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/;

  if (cpfRegex.test(valor)) {
    return "CPF";
  } else if (cnpjRegex.test(valor)) {
    return "CNPJ";
  } else {
    return "N/A";
  }
}

// Função para carregar os dados do cliente
function carregarDadosCliente() {
  var cpfCnpjElement = document.getElementById("cpf");
  var cpfCnpj = cpfCnpjElement.innerText;
  var tipoElement = document.getElementById("tipo");

  var tipo = detectarCPFouCNPJ(cpfCnpj);

  if (tipo === "CPF") {
    document.getElementById("campos-pessoa-fisica").style.display = "block";
    document.getElementById("campos-pessoa-juridica").style.display = "none";
  } else if (tipo === "CNPJ") {
    document.getElementById("campos-pessoa-fisica").style.display = "none";
    document.getElementById("campos-pessoa-juridica").style.display = "block";
  }
}

// Chamada da função para carregar os dados do cliente quando a página carregar
window.onload = function () {
  carregarDadosCliente();
};