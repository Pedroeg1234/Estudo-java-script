/*

// Seleciona um elemento pelo ID
var meuElemento = document.getElementById('meuId');

// Seleciona uma coleção de elementos pela classe
var elementos = document.getElementsByClassName('minhaClasse');

// Seleciona uma coleção de elementos pelo nome da tag
var tags = document.getElementsByTagName('div');


// Seleciona o primeiro elemento que corresponde ao seletor CSS
var meuElemento = document.querySelector('#meuId'); // ID
var meuElemento = document.querySelector('.minhaClasse'); // Classe
var meuElemento = document.querySelector('div'); // Tag


// Seleciona todos os elementos que correspondem ao seletor CSS
var elementos = document.querySelectorAll('.minhaClasse'); // Classe
var tags = document.querySelectorAll('div'); // Tag



*/


/*-----------------------------AULA--------------------------
const animais= document.getElementById('animais');
console.log (animais);
//console.log (animais.innerText);

const gridSection= document.getElementsByClassName('grid-section');
//console.log (gridSection[0]);
//console.log (gridSection[1]);

const Primeiralinha= document.querySelector('li');
console.log(Primeiralinha);

const PrimeiraUl= document.querySelector('ul');
console.log(PrimeiraUl);

const LinkInterno= document.querySelector('[href^="#"]');
console.log (LinkInterno);

const Animaisimg = document.querySelectorAll('.animais img');
console.log(Animaisimg);
//console.log(Animaisimg[0]);

/*NodeList:
Obtido usando o método querySelectorAll.
Criado quando você precisa de uma lista estática de elementos no momento em que a consulta é feita.
Adequado para situações em que você não espera que a lista seja automaticamente atualizada quando o DOM mudar.
Não é afetado por mudanças no DOM após a criação

HTML COLLECTION
Obtido por métodos específicos do DOM, como getElementsByClassName ou getElementsByTagName.
Criado como uma coleção ao vivo, refletindo automaticamente mudanças no DOM.
Útil quando você deseja uma lista dinâmica que se atualize automaticamente quando o DOM muda.

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//PrimeiraUl.classList.add('grid-section');
//console.log (gridSectionHTML[0]);
//console.log (gridSectionNode[0]);

gridSectionNode.forEach(function(item,index){
    console.log(item);
});

const arrayGrid= Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
    console.log(item);
});

/*
gridSectionHTML é um HTMLCollection, que é automaticamente atualizado quando o DOM muda.
Array.from(gridSectionHTML) cria uma cópia estática da coleção, convertendo-a em um array.
arrayGrid é um array estático que não será atualizado automaticamente com mudanças futuras no DOM.
gridSectionNode é um NodeList, que é estático e não é automaticamente atualizado com mudanças no DOM.
O método forEach é aplicado diretamente ao NodeList, iterando sobre seus elementos.
Quando você usa Array.from(gridSectionHTML), você cria uma cópia estática dos elementos no momento da chamada, útil se você quiser trabalhar com uma versão imutável da coleção.
gridSectionNode.forEach, por outro lado, itera diretamente sobre os elementos no NodeList, mas não refletirá automaticamente mudanças futuras no DOM.

--------------------------------------------------------------------FIM DA AULA-----------------------------------------------------
*/

//EXERCICIOS 
//RETORNE NO CONSOLE TODAS AS IMAGENS DO SITE
//RETORNE NO CONSOLE APENAS AS IMAGENS QUE COMECAM COM A PALAVRA IMAGEM
//SELECIONE TODOS OS LINKS INTERNOS QUE COMEÇAM COM #
//SELECIONE O PRIMEIRO H2 DENTRO DE .ANIMAIS-DESCRICAO
//SELECIONE O ULTIMO P DO SITE 

var imagens= document.querySelectorAll('img');
console.log(imagens);
var imagensPalavra= document.querySelectorAll('img[src^="img/imagem"]');
//^= significam "começa com", então eles selecionarão elementos 
console.log(imagensPalavra);
var linksInternos= document.querySelectorAll('[href^="#"]');
console.log (linksInternos);
//console.log (linksInternos[1].innerHTML);
var primeiroH2= document.querySelector('.animais-descricao h2');
console.log(primeiroH2);
var paragrafos= document.querySelectorAll('p');
var ultimo= paragrafos.length-1;
console.log (ultimo);

