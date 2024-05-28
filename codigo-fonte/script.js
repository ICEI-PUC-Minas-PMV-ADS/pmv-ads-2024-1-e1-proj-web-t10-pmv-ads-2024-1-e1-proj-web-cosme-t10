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
    Descricao:
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

const buscarIngredientes = (lista, busca) => {
  let resultadosEncontrados = [];
  lista.forEach((ingrediente) => {
    busca.forEach((pesquisaUsuario) => {
      if (
        ingrediente.nome.toLowerCase() === pesquisaUsuario.toLowerCase()) {
        resultadosEncontrados.push(ingrediente);
      }
    });
  });
  return resultadosEncontrados;
};


const eventosButtonLupa = document.getElementById("button-pesquisa");

eventosButtonLupa.addEventListener("click", (event) => {
  event.preventDefault(); //Previne o encerramento automático da página

  let stringInput = document.getElementById("input-pesquisa").value
  .trim()
  .split(",")
  .map((nomeIngrediente) => nomeIngrediente.trim())
  .filter((nomeIngrediente) => nomeIngrediente !== "");
  // console.log("Dados do input: ", stringInput);
  let retornoIngredientes = buscarIngredientes(listaDeIngredientes,stringInput);
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
