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
export let listaDeIngredientes = [
  {
    nome: "Isobutilparabeno",
    grupo: "Parabenos",
    formulaQuimica: " C11H14O3",
    descricao:
      "Isobutilparabeno ou éster butílico do ácido para-hidroxibenzoico é utilizado como preservativo antifúngico em cosméticos. Também é um componente de vários medicamentos como fluido de suspensão.",
    efeitosAdversos:
      "Podem atuar como desreguladores endócrinos no corpo humano, causando alterações no sistema nervoso, na função imunológica, problemas metabólicos e alterando a fertilidade dos órgãos reprodutores.",
    fonte:
      "Fonte: AHN, Hae-Sun et al. Toxicity and endocrine disrupting effect of parabens. Korean Journal of Environmental Biology, v. 27, n. 4, p. 323-333, 2009.",
    ehIndesejado: true,
  },
  {
    nome: "Acrilato de Acrilonitrila Estireno",
    grupo: "Acrilatos",
    formulaQuimica: "C18H23NO2",
    descricao:
      "O Acrilato de Acrilonitrila Estireno ou ASA é um copolímero composto por três monômeros principais: Acrilonitrila (C3H3N): Proporciona resistência química e térmica ao material. Estireno (C8H8): Contribui para a rigidez e trabalhabilidade do material. Acrilato: Ajuda a melhorar a resistência às intempéries e a radiação UV.",
    efeitosAdversos:
      "Podem causar alergia de contato, como dermatite e estomatite",
    fonte:
      "SPENCER, Ashley; GAZZANI, Paul; THOMPSON, Donna A. Acrylate and methacrylate contact allergy and allergic contact disease: a 13‐year review. Contact  Dermatitis, v. 75, n. 3, p. 157-164, 2016.",
    ehIndesejado: true,
  },
  {
    nome: "Ftalato de dietila",
    grupo: "Ftalatos",
    formulaQuimica: "C12H14O4",
    descricao:
      "Ftalato de dietila é um éster do ácido ftálico. Ele ocorre como um líquido transparente à temperatura ambiente e não é encontrado na natureza. Não apresenta odor significativo, porém seu gosto é desagradável e amargo. É insolúvel em água e mais denso que a mesma.",
    efeitosAdversos:
      " Podem atuar como disruptores endócrinos e no funcionamento dediversos órgãos, que tem impacto negativo a longo prazo no crescimento e desenvolvimento infantil. ",
    fonte:
      "WANG, Yufei; QIAN, Haifeng. Phthalates and their impacts on human health. In: Healthcare. Multidisciplinary Digital Publishing Institute, 2021. p. 603.",
    ehIndesejado: true,
  },
  {
    nome: "Cloreto de benzalcônio",
    grupo: "Quartenário de Amônia",
    formulaQuimica: ": C27H42ClN",
    descricao:
      " Um conservante utilizado em cosméticos, desinfetantes de pele e soluções oftalmológicas e outros produtos.",
    efeitosAdversos: " Irritação na pele e dermatite de contato.",
    fonte:
      "BASKETTER, David A. et al. Strong irritants masquerading as skin allergens: the case of benzalkonium chloride. Contact dermatitis, v. 50, n. 4, p. 213-217, 2004",
    ehIndesejado: true,
  },
  {
    nome: "Oxibenzona",
    grupo: "Cetonas",
    formulaQuimica: "C14H12O3",
    descricao:
      "A oxibenzona (é um derivado da benzofenona), também conhecida como benzofenona-3 ou BP-3, é um composto orgânico utilizado em fotocosméticos, sendo encontrada em protectores solares, protectores labiais e hidratantes. A oxibenzona absorve raios UVB e UVA II, resultando em uma excitação fotoquímica e absorção de energia.",
    efeitosAdversos:
      "Desenvolvimento de alergias e sensibilidade à exposição solar em  humanos. Branqueamento de corais no meio ambiente.",
    fonte:
      "DINARDO, Joseph C.; DOWNS, Craig A. Dermatological and environmental toxicological impact of the sunscreen ingredient oxybenzone/benzophenone‐3. Journal f cosmetic dermatology, v. 17, n. 1, p. 15-19, 2018",
    ehIndesejado: true,
  },
  {
    nome: "Agua",
    ehIndesejado: false,
  },
  {
    nome: "Glicerina",
    ehIndesejado: false,
  },
  {
    nome: "Sacarose",
    ehIndesejado: false,
  },
];

//TAREFA 1.3a:
//Implementar método/função responsável pela busca de ingrediente(s) na lista salva nos dados locais.
//Busca será feita pelo(s) nome(s) e deve existir a lógica que possibilita a busca de um ou mais ingredientes.


function getIngredientes(ingredientesBuscados) {
  return listaDeIngredientes.filter((ingrediente) =>
      ingredientesBuscados.has(ingrediente.nome.toLowerCase())
  );
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
  // console.log("Dados do input: ",ingredientesBuscados );
  let ingredientesEncontrados = getIngredientes(ingredientesBuscados);
  console.log("resultados:", ingredientesEncontrados );
  let listaTemIngredienteIndesejado = ingredientesEncontrados.some(ingrediente => ingrediente.ehIndesejado === true);

    if (ingredientesEncontrados.length > 0 && listaTemIngredienteIndesejado) {
      criarCardResultados(ingredientesEncontrados);
    } else {
      alert("Nenhum ingrediente indesejado encontrado.");
    }

}); 


  






//TAREFA 1.3b:
//Implementar funcionalidade de sugestão de pesquisa incremental.

//TAREFA 1.4:
//A partir do primeiro elemento encontrado, criar os elementos necessários juntamente do reposicionamento dos elementos
//ja existentes a fim de transformar o visual da página index.html no da página de resultado.html (sem que exista a mudan
//ça de páginas).
function criarCardResultados(ingredientes) {
  let elMain = document.querySelector("main");
  elMain.style.display = 'none';
  let resultadoStylesheet = document.getElementById('resultado-stylesheet');
  resultadoStylesheet.rel = 'stylesheet';
  let buscaStylesheet = document.getElementById('busca-stylesheet');
  buscaStylesheet.disabled = true;
  elMain.style.display = 'block';
  atualizarConteudoCard(ingredientes);
  resultadoStylesheet.disabled = false;
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
  let elCardIngrediente = document.createElement("section");
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
  let elClassificacaoConteiner = document.createElement("div");
  elClassificacaoConteiner.classList.add("classificacao-ingrediente-conteiner");
  let elClassificacaoTitulo = document.createElement('h3');
  elClassificacaoTitulo.id = 'classificacao-ingrediente-titulo';
  elClassificacaoTitulo.textContent = 'Ingredientes Indesejados';
  elClassificacaoConteiner.appendChild(elClassificacaoTitulo);
  let elIngredienteConteiner = document.createElement("div");
  elIngredienteConteiner.classList.add("elemento-ingrediente-conteiner");
  ingredientes.forEach((ingrediente) => {
    let elIngrediente = document.createElement("div");
    elIngrediente.classList.add("elemento-ingrediente");
    elIngrediente.classList.toggle("elemento-ingrediente-indesejado", ingrediente.ehIndesejado);
    elIngredienteConteiner.appendChild(elIngrediente);
  });
  elClassificacaoConteiner.appendChild(elIngredienteConteiner);
  return elClassificacaoConteiner;
}
function criarElListaIngredientes(ingredientes) {
  let elListaIngredientesConteiner = document.createElement("div");
  elListaIngredientesConteiner.classList.add("lista-ingrediente-conteiner");
  let tituloListaIngredientes = document.createElement("h3");
  tituloListaIngredientes.id = "lista-ingrediente-titulo";
  tituloListaIngredientes.textContent = "Lista de Ingredientes";
  elListaIngredientesConteiner.appendChild(tituloListaIngredientes);
  let elListaIngredientes = document.createElement("ul");
  elListaIngredientes.classList.add("lista-ingrediente");
  ingredientes.forEach((ingrediente) => {
    let elItemLista = document.createElement("li");
    elItemLista.textContent = ingrediente.nome;
    elItemLista.classList.toggle("ingrediente-indesejado", ingrediente.ehIndesejado);
    elListaIngredientes.appendChild(elItemLista);
  });
  elListaIngredientesConteiner.appendChild(elListaIngredientes);
  return elListaIngredientesConteiner;
}
function createDescricaoIngrediente(ingredientes) {
  let elDescricaoConteiner = document.createElement("div");
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
  img.src = `assets/seta-${direcao}.svg`;
  button.appendChild(img);
  button.onclick = clickHandler;
  return button;
}
function criarPaginacao(ingredientes) {
  const paginacaoConteiner = document.createElement("div");
  paginacaoConteiner.classList.add("paginacao-conteiner");
  const leftArrowButton = criaElSeta("esquerda", () => mudarPagina(ingredientes, -1));
  const numeracaoSpan = document.createElement("span");
  numeracaoSpan.id = "numeracao";
  numeracaoSpan.textContent = `1/${countIndesejado(ingredientes)}`;
  const rightArrowButton = criaElSeta("direita", () => mudarPagina(ingredientes, 1));
  paginacaoConteiner.appendChild(leftArrowButton);
  paginacaoConteiner.appendChild(numeracaoSpan);
  paginacaoConteiner.appendChild(rightArrowButton);
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
