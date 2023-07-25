function RedirecionarPag(url) {
  window.location.href = url;
}

// Função para realizar a pesquisa de fornecedores
function PesquisarFornecedor() {
  var input = document.getElementById("search-input");
  var filter = input.value.toUpperCase();
  var treeviewItems = document.getElementsByClassName("treeview-item");

  // Percorre os itens da TreeView e oculta aqueles que não correspondem à pesquisa
  for (var i = 0; i < treeviewItems.length; i++) {
    var item = treeviewItems[i];
    var text = item.textContent || item.innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}

// Função para filtrar os fornecedores por tipo
function FiltrarFornecedores() {
  var filterSelect = document.getElementById("filter-select");
  var filterValue = filterSelect.value;
  var treeviewItems = document.getElementsByClassName("treeview-item");

  // Percorre os itens da TreeView e exibe somente os fornecedores do tipo selecionado
  for (var i = 0; i < treeviewItems.length; i++) {
    var item = treeviewItems[i];
    var tipo = item.getAttribute("data-tipo");
    if (tipo === filterValue || filterValue === "todos") {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}

// Função para destacar a linha da tabela ao clicar
function highlightRow(event) {
  var selectedRow = event.target.parentNode;
  selectedRow.classList.toggle("selected");
}

// Função para abrir a página do fornecedor ao clicar duas vezes
function AbrirPaginaFornecedor(event) {
  if (event.target.nodeName === "TD") {
    var selectedRow = event.target.parentNode;
    var clientId = selectedRow.cells[0].innerText;

    // Preenche o ID do fornecedor no formulário
    var form = document.getElementById("fornecedor-form");
    var input = document.getElementById("fornecedor-id");
    input.value = clientId;

    // Envia o formulário via POST
    form.submit();
  }
}