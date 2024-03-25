//CLIENT HEIGHT= HEIGHT+PADDING
//OFFSETHEIGHT= HEIGHT + PADDING + BORDER
//SCROLLHEIGHT= HEIGHT TOTAL MESMO DENTRO DE UMA SCROLL- ROLAGEM
//clientWidth: A largura do conteúdo da caixa, incluindo o padding, mas excluindo a barra de rolagem vertical (se houver).
//offsetWidth: A largura total da caixa, incluindo o padding, a borda e a barra de rolagem vertical (se houver).
//scrollWidth: A largura total do conteúdo da caixa, mesmo quando há uma barra de rolagem horizontal.
//Esta propriedade é útil quando o conteúdo é maior que a largura visível.

const listaAnimais = document.querySelector('.animais-lista');

// Altura do conteúdo da caixa, incluindo padding
console.log('clientHeight:', listaAnimais.clientHeight);

// Altura total da caixa, incluindo padding, borda e barra de rolagem vertical (se houver)
console.log('offsetHeight:', listaAnimais.offsetHeight);

// Altura total do conteúdo da caixa, mesmo quando há uma barra de rolagem vertical
console.log('scrollHeight:', listaAnimais.scrollHeight);

const primeiroH2 = document.querySelector('h2');

// Distância do lado esquerdo do elemento pai mais próximo
console.log('offsetLeft:', primeiroH2.offsetLeft);

// Largura total do elemento, incluindo padding, borda e barra de rolagem vertical (se houver)
console.log('offsetWidth:', primeiroH2.offsetWidth);




const rect = primeiroH2.getBoundingClientRect();    // Obtém as dimensões e a posição do retângulo que envolve o elemento <h2> em relação à visualização da página

// Coordenadas do retângulo (left, top, right, bottom)

// Distância horizontal do lado esquerdo do elemento em relação à borda esquerda da visualização da página
console.log('getBoundingClientRect - left:', rect.left);

// Distância vertical do topo do elemento em relação à borda superior da visualização da página
console.log('getBoundingClientRect - top:', rect.top);

// Distância horizontal do lado direito do elemento em relação à borda esquerda da visualização da página
console.log('getBoundingClientRect - right:', rect.right);

// Distância vertical da parte inferior do elemento em relação à borda superior da visualização da página
console.log('getBoundingClientRect - bottom:', rect.bottom);



// Largura interna da janela de visualização (área útil, excluindo barras de ferramentas e barras de rolagem)
console.log('window.innerWidth:', window.innerWidth);

// Altura interna da janela de visualização (área útil, excluindo barras de ferramentas e barras de rolagem)
console.log('window.innerHeight:', window.innerHeight);

// Altura externa total da janela do navegador (incluindo barras de ferramentas e barras de rolagem)
console.log('window.outerHeight:', window.outerHeight);

// Largura externa total da janela do navegador (incluindo barras de ferramentas e barras de rolagem)
console.log('window.outerWidth:', window.outerWidth);

// Posição vertical atual da barra de rolagem na janela de visualização
console.log('window.pageYOffset:', window.pageYOffset);

const h2rect= primeiroH2.getBoundingClientRect();
if (h2rect.top<0){
    console.log('Passou do elemento');
}


//MATCHMEDIA

const small= window.matchMedia('(max-width: 600px)');

if (small.matches){

    console.log('mobile');
} else{
    console.log('Desktop');
}


//EXERCICIOS

//VERIFIQUE A DISTANCIA DA PRIMEIRA IMAGEM EM RELAÇÃO AO TOPO DA PAGINA]

const primeiraImagem= document.querySelector('img');
const distancia= primeiraImagem.getBoundingClientRect();
console.log(distancia.top);


//RETORNE A SOMA DA LARGURA DE TODAS AS IMAGENS

const todasImagens= document.querySelectorAll('img');

let soma=0;
todasImagens.forEach(element => {
    
    soma+=element.offsetWidth;

});

console.log(soma);
//VERIFIQUE SE OS LINKS DA PÁGINA POSSUEM NO MINIMO 48PX

const todosLinks= document.querySelectorAll('a[href]');

todosLinks.forEach(element => {

    let verdadeiro=true;

    if (element.offsetWidth<=48 || element.offsetHeight<=48){
        verdadeiro=false;
    }

    console.log(verdadeiro)
});
//SE O BROWSER FOR MENOR QUE 720PX ADICIONE A CLASSE MENU-MOBILE AO MENU


const tamanhoBrowser= window.matchMedia('(max-width: 750px)');

if (tamanhoBrowser.matches){

    const menu= document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}

