//TAREFA 1:
//Modelagem de dados (definir valores/propriedades dos ingredientes químicos).
//Exemplo:
// let ingredienteQuimico = {
//     nome: "Cyclomethicone",
//     formulaQuimica: "C10H30O5SI5",
//     descricao: "É um líquido incolor e inodoro que é ligeiramente volátil.",
//     efeitosAdversos: "Irritação na pele e nos olhos."
//     fontes: "Johnson Jr, Wilbur, et al. Safety assessment of cyclomet..."
// }

//TAREFA 1.1:
//Criar lista de elementos baseado na modelagem de dados que definirmos

import { listaDeIngredientes } from './listaDeIngredientes_db.js';

//TAREFA 1.3a:
//Implementar método/função responsável pela busca de ingrediente(s) na lista salva nos dados locais.
//Busca será feita pelo(s) nome(s) e deve existir a lógica que possibilita a busca de um ou mais ingredientes.

function getIngredientes(ingredientesBuscados) {
    //retorna na ordem encontrada na lista de ingredientes
    // return listaDeIngredientes.filter((ingrediente) =>
    //     ingredientesBuscados.has(ingrediente.nome.toLowerCase())
    // );

    //retorna na ordem buscada pelo usuário
    let ingredientesEncontrados = [];
    for (let nomeIngrediente of ingredientesBuscados) {
        let ingrediente = listaDeIngredientes.find(ing => ing.nome.toLowerCase() === nomeIngrediente);
        if (ingrediente) {
            ingredientesEncontrados.push(ingrediente);
        }
    }

    return ingredientesEncontrados;
}

const elBtnPesquisa = document.getElementById("button-pesquisa");

elBtnPesquisa.addEventListener("click", (event) => {
    event.preventDefault();

    let ingredientesBuscados = new Set(
        document.getElementById("input-pesquisa").value
            .trim()
            .split(",")
            .map((nomeIngrediente) => nomeIngrediente.trim().toLowerCase())
            .filter((nomeIngrediente) => nomeIngrediente !== "")
    );
    // console.log("Dados do input: ", ingredientesBuscados);

    let ingredientesEncontrados = getIngredientes(ingredientesBuscados);
    // console.log("resultados:", ingredientesEncontrados);

    let listaTemIngredienteIndesejado = ingredientesEncontrados.some(ingrediente => ingrediente.ehIndesejado === true);

    if (ingredientesEncontrados.length === 0 || !listaTemIngredienteIndesejado) {
        mostrarRespostaModal();
        return;
    }

    criarCardResultados(ingredientesEncontrados);
    document.getElementById("input-pesquisa").value = "";
    getConselho();
});

function mostrarRespostaModal() {
    const modal = document.querySelector(".janela-modal");
    modal.style.display = "flex";
}

document.getElementById('fechar').addEventListener('click', fecharModal);
function fecharModal() {
    document.querySelector('.janela-modal').style.display = 'none';
}

//Inserido para satisfazer o requisito H4e :)
function getConselho() {
    fetch('https://api.adviceslip.com/advice')
        .then(r => r.text())
        .then(t => {
            const respostaTexto = JSON.parse(t);
            console.log(respostaTexto.slip.advice);
        });
}

//TAREFA 1.3b:
//Implementar funcionalidade de sugestão de pesquisa incremental.
//Feita em: autocomplete_dropdown.js

//TAREFA 1.4:
//A partir do primeiro elemento encontrado, criar os elementos necessários juntamente do reposicionamento dos elementos
//ja existentes a fim de transformar o visual da página index.html no da página de resultado.html (sem que exista a mudan
//ça de páginas).

function criarCardResultados(ingredientes) {
    const elMain = document.querySelector("main");
    elMain.style.display = 'none';

    document.body.classList.add('resultado');

    elMain.style.display = 'block';

    atualizarConteudoCard(ingredientes);
}

function atualizarConteudoCard(ingredientes) {
    const elCardIngrediente = criarElCardIngredientes(ingredientes);

    const elMain = document.querySelector("main");
    elMain.appendChild(elCardIngrediente);
}

function criarElCardIngredientes(ingredientes) {
    const existingCard = document.querySelector(".card-ingrediente");
    if (existingCard) {
        existingCard.remove();
    }

    const elCardIngrediente = document.createElement("section");
    elCardIngrediente.classList.add("card-ingrediente");

    const elClassificacaoConteiner = criarElClassificacaoIngredientes(ingredientes);
    elCardIngrediente.appendChild(elClassificacaoConteiner);

    const elListaIngredientesConteiner = criarElListaIngredientes(ingredientes);
    elCardIngrediente.appendChild(elListaIngredientesConteiner);

    const elDescricaoConteiner = createDescricaoIngrediente(ingredientes);
    elCardIngrediente.appendChild(elDescricaoConteiner);

    return elCardIngrediente;
}

function criarElClassificacaoIngredientes(ingredientes) {
    const elClassificacaoConteiner = document.createElement("div");
    elClassificacaoConteiner.classList.add("classificacao-ingrediente-conteiner");

    const elClassificacaoTitulo = document.createElement('h3');
    elClassificacaoTitulo.id = 'classificacao-ingrediente-titulo';
    elClassificacaoTitulo.textContent = 'Ingredientes Indesejados';

    elClassificacaoConteiner.appendChild(elClassificacaoTitulo);

    const elIngredienteConteiner = document.createElement("div");
    elIngredienteConteiner.classList.add("elemento-ingrediente-conteiner");
    ingredientes.forEach((ingrediente) => {
        const elIngrediente = document.createElement("div");
        elIngrediente.classList.add("elemento-ingrediente");
        elIngrediente.classList.toggle("elemento-ingrediente-indesejado", ingrediente.ehIndesejado);
        elIngredienteConteiner.appendChild(elIngrediente);
    });
    elClassificacaoConteiner.appendChild(elIngredienteConteiner);

    return elClassificacaoConteiner;
}

function criarElListaIngredientes(ingredientes) {
    const elListaIngredientesConteiner = document.createElement("div");
    elListaIngredientesConteiner.classList.add("lista-ingrediente-conteiner");

    const tituloListaIngredientes = document.createElement("h3");
    tituloListaIngredientes.id = "lista-ingrediente-titulo";
    tituloListaIngredientes.textContent = "Lista de Ingredientes";
    elListaIngredientesConteiner.appendChild(tituloListaIngredientes);

    const elListaIngredientes = document.createElement("ul");
    elListaIngredientes.classList.add("lista-ingrediente");
    ingredientes.forEach((ingrediente) => {
        const elItemLista = document.createElement("li");
        elItemLista.textContent = ingrediente.nome;
        elItemLista.classList.toggle("ingrediente-indesejado", ingrediente.ehIndesejado);
        elListaIngredientes.appendChild(elItemLista);
    });
    elListaIngredientesConteiner.appendChild(elListaIngredientes);

    return elListaIngredientesConteiner;
}

function createDescricaoIngrediente(ingredientes) {
    const elDescricaoConteiner = document.createElement("div");
    elDescricaoConteiner.classList.add("informacoes-ingrediente-conteiner");

    const paginacaoConteiner = criarPaginacao(ingredientes);
    elDescricaoConteiner.appendChild(paginacaoConteiner);

    const primeiroIngrediente = ingredientes[0];
    elDescricaoConteiner.appendChild(criarInfoElemento('Nome', primeiroIngrediente.nome, 'nome-ingrediente'));
    elDescricaoConteiner.appendChild(criarInfoElemento('Fórmula Quimica', primeiroIngrediente.formulaQuimica, 'formula-quimica-ingrediente'));
    elDescricaoConteiner.appendChild(criarInfoElemento('Descrição', primeiroIngrediente.descricao, 'descricao-ingrediente'));
    elDescricaoConteiner.appendChild(criarInfoElemento('Efeitos Adversos', primeiroIngrediente.efeitosAdversos, 'efeitos-ingrediente'));
    elDescricaoConteiner.appendChild(criarInfoElemento('Fonte', primeiroIngrediente.fonte, 'referencias-ingrediente'));

    return elDescricaoConteiner;
}

function criaElSeta(direcao, clickHandler) {
    const button = document.createElement("button");
    button.classList.add("button-arrow");

    const img = document.createElement("img");
    img.id = `seta-${direcao}`;
    img.src = `assets/seta-${direcao}.svg`;

    button.appendChild(img);
    button.onclick = clickHandler;

    return button;
}

function criarPaginacao(ingredientes) {
    const paginacaoConteiner = document.createElement("div");
    paginacaoConteiner.classList.add("paginacao-conteiner");

    const setaEsquerda = criaElSeta("esquerda", () => mudarPagina(ingredientes, -1));

    const numeracaoSpan = document.createElement("span");
    numeracaoSpan.id = "numeracao";
    numeracaoSpan.textContent = `1/${countIndesejado(ingredientes)}`;

    const setaDireita = criaElSeta("direita", () => mudarPagina(ingredientes, 1));

    paginacaoConteiner.appendChild(setaEsquerda);
    paginacaoConteiner.appendChild(numeracaoSpan);
    paginacaoConteiner.appendChild(setaDireita);

    return paginacaoConteiner;
}

function criarInfoElemento(tag, valor, id) {
    let elemento = document.createElement("p");
    elemento.id = id;
    elemento.classList.add("info-ingrediente-texto");
    elemento.innerHTML = `<strong>${tag}:</strong> ${valor}`;

    return elemento;
}

function countIndesejado(ingredientes) {
    return filterIngredienteIndesejados(ingredientes).length;
}

function filterIngredienteIndesejados(ingredientes) {
    return ingredientes.filter((ingrediente) => ingrediente.ehIndesejado);
}


//TAREFA 1.5:
//Com a lista de ingredientes retornada pela busca e com o primeiro card já criado, implementar paginação no card.
//Recomendação: salvar página atual em uma variável própria de "contador"; contador esse que aumenta (se não for a última página
//ou diminui (se não for a primeira página) quando navegado pelas setinhas, e serve de índice em relação a lista de ingredientes
//retornada na busca. Então os valores do card (nome, descrição, etc) são alterados de acordo com qual "página" (ingrediente
//em que o card está mostrando num determinado momento).


function mudarPagina(ingredientes, direcao) {
    const numeracaoSpan = document.getElementById("numeracao");
    const [indiceAtual, total] = numeracaoSpan.textContent.split("/").map(Number);

    const novoIndice = indiceAtual + direcao;
    if (novoIndice < 1 || novoIndice > total) return;

    const elDescricaoConteiner = document.querySelector(".informacoes-ingrediente-conteiner");

    const indesejados = filterIngredienteIndesejados(ingredientes);
    const novoIngrediente = indesejados[novoIndice - 1];

    if (novoIngrediente) {
        elDescricaoConteiner.querySelector("#nome-ingrediente").textContent = `Nome: ${novoIngrediente.nome}`;
        elDescricaoConteiner.querySelector("#formula-quimica-ingrediente").textContent = `Fórmula Quimica: ${novoIngrediente.formulaQuimica}`;
        elDescricaoConteiner.querySelector("#descricao-ingrediente").textContent = `Descrição: ${novoIngrediente.descricao}`;
        elDescricaoConteiner.querySelector("#efeitos-ingrediente").textContent = `Efeitos Adversos: ${novoIngrediente.efeitosAdversos}`;
        elDescricaoConteiner.querySelector("#referencias-ingrediente").textContent = `Fonte: ${novoIngrediente.fonte}`;

        numeracaoSpan.textContent = `${novoIndice}/${total}`;
    }
}

//TAREFA 2:
//Implementar a função de modo noturno.
//Feito em: nightmode_toggle.js