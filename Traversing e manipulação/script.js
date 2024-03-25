//const animaisLista= document.querySelector('.animais-descricao');

//console.log(animaisLista.innerHTML);//retorna o conteúdo incluindo todas as tags HTML
//console.log(animaisLista.innerText);//retorna apenas o texto
//console.log(animaisLista.outerHTML);

//const h1=document.querySelector('h1');
//h1.innerHTML=  '<p>Novo Título</p>';

//console.log(h1.innerHTML); //<p>Novo Título</p>
//console.log(h1.outerHTML); //<h1 class="titulo"><p>Novo Título</p></h1>


//TRANSVERSING

//const lista=document.querySelector('.animais-lista');
//console.log(lista);

//console.log(lista.parentElement); //PAI DA CLASSE .ANIMAIS-LISTA
//console.log(lista.parentElement.parentElement); //PAI DO PAI DE .ANIMAIS LISTA
//console.log(lista.nextElementSibling); //ELEMENTO ABAIXO
//console.log(lista.previousElementSibling); //ELEMENTO ACIMA
//console.log(lista.children); //exibe todos os elementos que são filhos diretos do elemento representado por lista.
//console.log(lista.children[0]); //primeiro elemento filho direto 
//console.log(lista.children[lista.children.length-1]);//ultimo filho

// Seleciona todas as <li> que são filhas (diretas ou indiretas) da classe .animais-lista
//const todasAsLi = lista.querySelectorAll('li');
//console.log(todasAsLi);
//const ultimaLi = todasAsLi[todasAsLi.length - 1];
//console.log(ultimaLi);

//console.log(lista.childNodes); //A saída seria uma NodeList contendo todos os nós filhos, incluindo o nó de texto antes do parágrafo, 
//o próprio elemento <p>, o nó de comentário e o nó de texto após o parágrafo.


//ELEMENTO=TAGS
//NÓ=Pode representar qualquer tipo de nó, incluindo elementos, texto, comentários, entre outros.

//MANIPULANDO ELEMENTOS

//const contato= document.querySelector('.contato');
//const titulo= document.querySelector('.titulo');
//const animais=document.querySelector('.animais');
//const mapa=document.querySelector('.mapa');

//contato.appendChild(titulo);//MOVE TITULO PARA O FINAL DE ANIMAIS
//contato.insertBefore(animais, titulo); // insere a animais antes de titulo dentro da classe contato
//contato.insertBefore(animais, mapa); // animais antes de mapa dentro de contato
//contato.replaceChild(mapa,titulo); //substitui titulo por mapa
//contato.removeChild(titulo);//REMOVE O TITULO



//Podemos criar novos elementos com o método createElement()


//const novoH1 = document.createElement('h1');
//novoH1.innerText = 'Novo Título';
//novoH1.classList.add('titulo');

//mapa.appendChild(novoH1);


//Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

//const titulo = document.querySelector('h1');
//const titulo2 = document.querySelector('h1');
//const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

//const cloneTitulo = titulo.cloneNode(true); -----true sinaliza para incluir os filhos
//const contato = document.querySelector('.contato');
//contato.appendChild(cloneTitulo);




// Duplique o menu e adicione ele em copy

const menu= document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true); 

const copy= document.querySelector('.copy');

copy.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq

const faq= document.querySelector('.faq');

const primeiroDT= document.querySelector('dt');
console.log(primeiroDT);
// Selecione o DD referente ao primeiro DT

const proximodd= primeiroDT.nextElementSibling;
console.log(proximodd);
// Substitua o conteúdo html de .faq pelo de .animais


const animais= document.querySelector('.animais');

const conteudohtml= animais.innerHTML;

faq.innerHTML=conteudohtml;