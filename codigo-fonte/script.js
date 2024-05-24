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
let listaDeIngredientes = [
  {
    nome: "Isobutilparabeno",
    grupo: "Parabenos",
    formulaQuimica: " C11H14O3",
    efeitosAdversos:
      "Podem atuar como desreguladores endócrinos no corpo humano, causando alterações no sistema nervoso, na função imunológica, problemas metabólicos e alterando a fertilidade dos órgãos reprodutores.",
    ingIndesejados: true,
  },
  {
    nome: "Acrilato de Acrilonitrila Estireno",
    grupo: "Acrilatos",
    formulaQuimica: "C18H23NO2",
    efeitosAdversos:
      "Podem causar alergia de contato, como dermatite e estomatite",
    ingIndesejados: true,
  },
  {
    nome: "Ftalato de dietila",
    grupo: "Ftalatos",
    formulaQuimica: "C12H14O4",
    efeitosAdversos:
      " Podem atuar como disruptores endócrinos e no funcionamento dediversos órgãos, que tem impacto negativo a longo prazo no crescimento e desenvolvimento infantil. ",
  },
  {
    nome: "Cloreto de benzalcônio",
    grupo: "Quartenário de Amônia",
    formulaQuimica: ": CH₃(CH₂)₁₀CH₂ₙOSO₃",
    efeitosAdversos: " Irritação na pele e dermatite de contato.",
  },
  {
    nome: "Oxibenzona",
    grupo: "Cetonas",
    formulaQuimica: "C14H12O3",
    efeitosAdversos:
      "Um emergente contaminante humano e ambiental, utilizado em protetores solares e produtos cosméticos.",
  },
];

//TAREFA 1.3a:
//Implementar método/função responsável pela busca de ingrediente(s) na lista salva nos dados locais.
//Busca será feita pelo(s) nome(s) e deve existir a lógica que possibilita a busca de um ou mais ingredientes.

const buscarIngredientes = (lista, busca) => {
  let resultadosEncontrados = [];
  listaDeIngredientes.forEach((ingrediente) => {
    busca.forEach((pesquisaUsuario) => {
      if (
        ingrediente.nome.toLowerCase().includes(pesquisaUsuario.toLowerCase())
      ) {
        resultadosEncontrados.push(ingrediente);
      }
    });
  });
  return resultadosEncontrados;
};

const eventosButtonLupa = document.getElementById("button-pesquisa");

eventosButtonLupa.addEventListener("click", (event) => {
  event.preventDefault(); //Previne o encerramento automático da página

  let stringInput = document.getElementById("input-pesquisa").value.trim();
  let termosPesquisa = stringInput
    .split(",")
    .map((nomeIngrediente) => nomeIngrediente.trim());
  // console.log("Dados do input: ", stringInput);
  let retornoIngredientes = buscarIngredientes(
    listaDeIngredientes,
    termosPesquisa
  );
  console.log("resultados:", retornoIngredientes);
});

//TAREFA 1.3b:
//Implementar funcionalidade de sugestão de pesquisa incremental.

//TAREFA 1.4:
//A partir do primeiro elemento encontrado, criar os elementos necessários juntamente do reposicionamento dos elementos
//ja existentes a fim de transformar o visual da página index.html no da página de resultado.html (sem que exista a mudan
//ça de páginas).

//TAREFA 1.5:
//Com a lista de ingredientes retornada pela busca e com o primeiro card já criado, implementar paginação no card.
//Recomendação: salvar página atual em uma variável própria de "contador"; contador esse que aumenta (se não for a última página
//ou diminui (se não for a primeira página) quando navegado pelas setinhas, e serve de índice em relação a lista de ingredientes
//retornada na busca. Então os valores do card (nome, descrição, etc) são alterados de acordo com qual "página" (ingrediente
//em que o card está mostrando num determinado momento).

//TAREFA 2:
//Implementar a função de modo noturno.
