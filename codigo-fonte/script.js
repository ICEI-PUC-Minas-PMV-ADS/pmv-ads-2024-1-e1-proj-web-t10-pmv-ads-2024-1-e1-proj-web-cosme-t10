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
let listaDeIngredientesInicial = [
  {
    id: 1,
    Nome: "Parabenos",
    formulaQuimica: "C10H12O3",
    Descricao:
      "Parabenos são ingredientes usados como preservativos em produtos farmacológicos e cosméticos",
    efeitosAdversos:
      "Podem atuar como desreguladores endócrinos no corpo humano, causando alterações no sistema nervoso, na função imunológica, problemas metabólicos e alterando a fertilidade dos órgãos reprodutores.",
    Fontes:
      "AHN, Hae-Sun et al. Toxicity and endocrine disrupting effect of parabens. Korean Journal of Environmental Biology, v. 27, n. 4, p. 323-333, 2009..",
  },
  {
    id: 2,
    Nome: "Acrilatos",
    formulaQuimica: "CH2=CHCO-2",
    Descricao:
      "São ingredientes utilizados em produtos cosméticos, que adiciona a qualidade de “à prova- de água",
    efeitosAdversos:
      "em causar alergia de contato, como dermatite e estomatite.",
    Fontes:
      ": SPENCER, Ashley; GAZZANI, Paul; THOMPSON, Donna A. Acrylate and methacrylate contact allergy and allergic contact disease: a 13‐year review. Contact Dermatitis, v. 75, n. 3, p. 157-164, 2016.",
  },
  {
    id: 3,
    Nome: "Ftalatos",
    formulaQuimica: "C8H4O4-2",
    Descricao:
      "São compostos químicos usados na maioria dos produtos que tem contato com plásticos, durante a produção, condicionamento e entrega.",
    efeitosAdversos:
      "Podem atuar como disruptores endócrinos e no funcionamento de diversos órgãos, que tem impacto ",
    Fontes:
      "WANG, Yufei; QIAN, Haifeng. Phthalates and their impacts on human health. In: Healthcare. Multidisciplinary Digital Publishing Institute, 2021. p. 603.",
  },
  {
    id: 4,
    Nome: "Cloreto de benzalcônio",
    formulaQuimica: "CH₃(CH₂)₁₀CH₂ₙOSO",
    Descricao: "Um conservante utilizado ",
    efeitosAdversos: "Irritação na pele e dermatite de contato.",
    Fontes:
      "BASKETTER, David A. et al. Strong irritants masquerading as skin allergens: the case of benzalkonium chloride. Contact dermatitis, v. 50, n. 4, p. 213-217, 2004.",
  },
  {
    id: 5,
    Nome: "Oxybenzona",
    formulaQuimica: "C14H12O3",
    Descricao:
      "Um emergente contaminante humano e ambiental, utilizado em protetores solares e produtos cosméticos.",
    efeitosAdversos: "Desenvolvimento de alergias e sensibilidade ",
    Fontes:
      ": DINARDO, Joseph C.; DOWNS, Craig A. Dermatological and environmental toxicological impact of the sunscreen ingredient oxybenzone",
  },
];

//TAREFA 1.2:
//Salvar a lista pro armazenamento local.
//Referir se ao exemplo de CRUD mostrado na etapa do projeto pelo professor Kutova nos vídeo-aulas de JS na página inicial da etapa do projeto
// ou professor Rommel disponivel nesse link:
//https://replit.com/@rommelpuc/Cadastro-de-Contatos-localStorage#app.js
let ingredientesArmazenados = JSON.parse(
  localStorage.getItem("listadeingredientesinicial")
);
if (!ingredientesArmazenados) {
  ingredientesArmazenados = listaDeIngredientesInicial;
  localStorage.setItem(
    "ingredientes_db",
    JSON.stringify(ingredientesArmazenados)
  );
}


//TAREFA 1.3a:
//Implementar método/função responsável pela busca de ingrediente(s) na lista salva nos dados locais.
//Busca será feita pelo(s) nome(s) e deve existir a lógica que possibilita a busca de um ou mais ingredientes.

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
