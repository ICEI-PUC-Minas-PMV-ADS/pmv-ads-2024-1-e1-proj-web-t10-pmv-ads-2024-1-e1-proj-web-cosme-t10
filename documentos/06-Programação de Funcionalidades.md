# Programação de Funcionalidades

Pré- requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto,</a> <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/03-Metodologia.md"> Metodologia,</a> <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface e</a> <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/05-Template%20padr%C3%A3o%20da%20Aplica%C3%A7%C3%A3o.md"> Template padrão da Aplicação.</a>



### Tela Inicial (RF -01)

Ao acessar a página inicial, o usuário já terá uma barra de pesquisa, a qual ele poderá pesquisar por um ou diversos ingredientes cosméticos. A página foi desenvolvida utilizando HTML, CSS e para dinamização JS. A tela inicial está presente na <i>figura x</i>.

![Captura de tela_3-5-2024_214342_www figma com](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/437162e6-0361-45d9-8a2f-16dee4a8fad8)

<i>Figura X - Exemplo da página inicial (essa figura irá mudar para o que realmente iremos fazer)</i>

### Responsáveis

Alírio Henrique e Mauricio Honorato. 

### Requisito atendido

RF-01: A aplicação deve oferecer uma funcionalidade de pesquisa por um ou mais ingredientes cosméticos.

### Artefatos de funcionalidade

● index.html;

● style.css;

● script.js.


### Estrutura de dados
●<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/index.html">index.html</a>

#### Instruções de acesso

1. Ao abrir o browser de preferência, o usuário deve informar a URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/index.html .

2. Logo que a página inicial aparecer na tela do usuário, o mesmo deve digitar ou colar o ingrediente e/ou a lista de ingredientes sobre o qual ele deseja obter as informações.

3. Após digitar ou colar o ingrediente ou a lista de ingredientes, o usuário deverá clicar no botão de pesquisa.
   

![linha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/f3f702df-5948-442c-bcca-9269134300b2)


### Tela Resultados (RF -02)

A tela de resultados é obtida após as instruções presentes na tela inicial terem sido realizados com êxito. A página foi efetivada com a estrutura de HTML, CSS e JS. A tela de resultados, está presente na <i>figura Y</i>.

![Captura de tela_3-5-2024_21446_www figma com](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/fb280bda-c777-4c04-b8b3-cab070434a9f)

<i>Figura Y. Exemplo Tela de Resultados (atualizar depois).</i>


### Responsáveis

Carlos Augusto, Júlia Campos e Raianne Martins.

#### Requisito atendido

RF-02: A aplicação deve construir e retornar ao usuário um card/tabela com as informações sobre o(s) ingrediente(s) escolhido(s) pelo usuário na pesquisa.


#### Artefatos da funcionalidade

● resultado.html;

● resultado_estilo.css;

● script.js.


#### Estrutura de Dados

●<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/resultado.html">resultado.html</a>


#### Instruções de acesso

1. O usuário concluir com sucesso, os passos da Tela Inicial.

2. Caso haja mais de um ingrediente, o usuário deve clicar nas setas presentes no card maior para obter mais informações sobre os ingredientes presentes na lista a qual ele apresentou.

![linha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/f3f702df-5948-442c-bcca-9269134300b2)


### Paginação de resultados (RF -03)

Os resultados obtidos pela pesquisa voltarão sobrepostos e paginados, podendo ser controlados através das duas setas entre a informação sobre qual ingrediente (página) está sendo mostrado no momento. Exemplo na <i>figura z</i> abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/87047035/4f972679-4c73-43c5-b5e5-10cfb1f8f1a7)


#### Responsável

Raianne Martins

#### Requisito atendido

RF-03: Quando a busca pelo usuário conter mais de um ingrediente, a aplicação deve retornar os cards construídos para o usuário de maneira paginada, com os cards sobrepostos um sobre os outros e ordenados de ingredientes considerados mais perigosos a menos perigosos.


#### Artefatos da funcionalidade

- resultado.html
- resultado_estilo.css
- script.js


#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]


#### Instruções de acesso

Basta o usuário pesquisar pelos ingredientes desejados através da barra de pesquisas dos requisitos funcionais prévios que o site retornará dinâmicamente os resultados.

### Modo noturno (RF -04)

A página oferece a opção de trocar entre dois tipos de interface: a padrão e a do modo noturno, usando um botão.

Interface padrão na <i>figura x</i>:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/87047035/3f92b542-5c04-4704-949e-62a640c0cd1c)

Interface no modo escuro na <i>figura y</i>:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/87047035/5ac06a38-081d-4452-9fdf-35e03dadf14b)



#### Responsável

Maurício Honorato

#### Requisito atendido

RF-04: A aplicação deve oferecer aos usuários, a opção de ativar ou desativar o modo noturno, que ajusta a interface para tons mais escuros para melhorar a experiência de uso em ambientes com pouca luz.


#### Artefatos da funcionalidade

- index.html
- style.css
- resultado.html
- resultado_estilo.css
- script.js


#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]


#### Instruções de acesso

O usuário pode alternar entre os diferentes modo de interface clicando no botão no canto superior direito do site. <i>Figuras x e y</i> representativas do botão em seus dois diferentes modos de visualização:


### Informações de Segurança dos Ingredientes (RF-06)

A aplicação retorna um conjunto de cards com informações gerais de segurança sobre os ingredientes pesquisados. Os cards incluem:
1.	Uma seção que mostra a quantidade de ingredientes indesejados através de pequenos retângulos coloridos.
2.	Uma lista dos ingredientes indesejados presentes no produto, para facilitar a visualização detalhada.
3.	Detalhes específicos de cada ingrediente, como nome, fórmula química, descrição, efeitos adversos conhecidos e a fonte das informações.
Confira o exemplo na figura Y abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164914560/5446c116-634f-4ced-add8-434b08b413c7)


### Responsáveis
Júlia Campos, Carlos Augusto e Raianne Martins.

### Requisito atendido
RF-06: A aplicação deve construir e retornar ao usuário um card/tabela com as informações de segurança gerais sobre o conjunto de ingredientes (produto) quando a pesquisa possuir mais de um ingrediente.

### Artefatos da funcionalidade
- resultado.html;
- resultado_estilo.css;
- script.js.

#### Instruções de acesso
Para acessar essa tela, simplesmente faça uma pesquisa usando o nome de um ou mais ingredientes.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/87047035/cdda9f38-2985-493c-8fa5-ffa79d461e5a)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/87047035/a00e5b42-c308-444e-bc7e-a43397a7b878)




> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

