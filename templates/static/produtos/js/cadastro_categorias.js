function RedirecionarPag(url) {
    window.location.href = url;
  }

let categorias = [];

function adicionarCategoria() {
    const categoriaInput = document.getElementById("categoria");
    const categoria = categoriaInput.value.trim();

    if (categoria !== "") {
        categorias.push({ categoria, grupos: [] });
        categoriaInput.value = "";
        atualizarListaCategorias();
        habilitarGrupoInput();
    }
}

function habilitarGrupoInput() {
    const grupoInput = document.getElementById("grupo");
    const grupoSelect = document.getElementById("grupoSelect");
    grupoInput.disabled = false;
    grupoSelect.disabled = false;
    document.getElementById("addGrupo").disabled = false;

    atualizarGruposSelect();
}

function atualizarGruposSelect() {
    const grupoSelect = document.getElementById("grupoSelect");
    grupoSelect.innerHTML = '<option value="" disabled selected>Selecione uma Categoria</option>';

    categorias.forEach((categoria) => {
        const option = document.createElement("option");
        option.value = categoria.categoria;
        option.textContent = categoria.categoria;
        grupoSelect.appendChild(option);
    });
}

function adicionarGrupo() {
    const grupoInput = document.getElementById("grupo");
    const grupoSelect = document.getElementById("grupoSelect");
    const grupo = grupoInput.value.trim();

    if (grupo !== "") {
        const categoriaSelecionada = grupoSelect.value;
        const categoriaAtual = categorias.find((categoria) => categoria.categoria === categoriaSelecionada);
        categoriaAtual.grupos.push({ grupo, subgrupos: [] });
        grupoInput.value = "";
        atualizarListaCategorias();
        habilitarSubgrupoInput();
    }
}

function habilitarSubgrupoInput() {
    const subgrupoInput = document.getElementById("subgrupo");
    const subgrupoSelect = document.getElementById("subgrupoSelect");
    subgrupoInput.disabled = false;
    subgrupoSelect.disabled = false;
    document.getElementById("addSubgrupo").disabled = false;

    atualizarSubgruposSelect();
}

function atualizarSubgruposSelect() {
    const subgrupoSelect = document.getElementById("subgrupoSelect");
    subgrupoSelect.innerHTML = '<option value="" disabled selected>Selecione um Grupo</option>';

    const grupoSelect = document.getElementById("grupoSelect");
    const categoriaSelecionada = grupoSelect.value;
    const categoriaAtual = categorias.find((categoria) => categoria.categoria === categoriaSelecionada);

    categoriaAtual.grupos.forEach((grupo) => {
        const option = document.createElement("option");
        option.value = grupo.grupo;
        option.textContent = grupo.grupo;
        subgrupoSelect.appendChild(option);
    });
}

function adicionarSubgrupo() {
    const subgrupoInput = document.getElementById("subgrupo");
    const subgrupoSelect = document.getElementById("subgrupoSelect");
    const subgrupo = subgrupoInput.value.trim();

    if (subgrupo !== "") {
        const grupoSelecionado = subgrupoSelect.value;
        const grupoSelect = document.getElementById("grupoSelect");
        const categoriaSelecionada = grupoSelect.value;
        const categoriaAtual = categorias.find((categoria) => categoria.categoria === categoriaSelecionada);
        const grupoAtual = categoriaAtual.grupos.find((grupo) => grupo.grupo === grupoSelecionado);
        grupoAtual.subgrupos.push(subgrupo);
        subgrupoInput.value = "";
        atualizarListaCategorias();
    }
}

function atualizarListaCategorias() {
    const listaCategorias = document.getElementById("listaCategorias");
    listaCategorias.innerHTML = "";

    categorias.forEach((categoria) => {
        const categoriaItem = document.createElement("li");
        categoriaItem.innerHTML = `<strong>Categoria:</strong> ${categoria.categoria}`;
        listaCategorias.appendChild(categoriaItem);function RedirecionarPag(url) {
  window.location.href = url;
}

        if (categoria.grupos.length > 0) {
            const listaGrupos = document.createElement("ul");
            categoria.grupos.forEach((grupo) => {
                const grupoItem = document.createElement("li");
                grupoItem.innerHTML = `<strong>Grupo:</strong> ${grupo.grupo}`;
                listaGrupos.appendChild(grupoItem);

                if (grupo.subgrupos.length > 0) {
                    const listaSubgrupos = document.createElement("ul");
                    grupo.subgrupos.forEach((subgrupo) => {
                        const subgrupoItem = document.createElement("li");
                        subgrupoItem.textContent = subgrupo;
                        listaSubgrupos.appendChild(subgrupoItem);
                    });
                    grupoItem.appendChild(listaSubgrupos);
                }
            });
            categoriaItem.appendChild(listaGrupos);
        }
    });
}