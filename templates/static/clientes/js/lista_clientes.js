// Função para voltar à página anterior
function PagAnterior() {
  window.history.back();
}

// Função para realizar a pesquisa de clientes
function searchCliente() {
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

// Função para filtrar os clientes por tipo
function filterCliente() {
  var filterSelect = document.getElementById("filter-select");
  var filterValue = filterSelect.value;
  var treeviewItems = document.getElementsByClassName("treeview-item");

  // Percorre os itens da TreeView e exibe somente os clientes do tipo selecionado
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

// Função para abrir a página do cliente ao clicar duas vezes
function openClientePage(event) {
  if (event.target.nodeName === "TD") {
    var selectedRow = event.target.parentNode;
    var clientId = selectedRow.cells[0].innerText;

    // Preenche o ID do cliente no formulário
    var form = document.getElementById("cliente-form");
    var input = document.getElementById("cliente-id");
    input.value = clientId;

    // Envia o formulário via POST
    form.submit();
  }
}