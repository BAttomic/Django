function RedirecionarPag(url) {
  window.location.href = url;
}

function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function saveProduct() {
  // Aqui você pode implementar a lógica para salvar os dados do produto
  var productData = {};
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    productData[input.name] = input.value;
  }
  console.log(productData);
  // Aqui você pode enviar os dados para um servidor, salvar em um banco de dados, etc.
  // Neste exemplo, apenas mostramos os dados no console.
}