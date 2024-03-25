
const img= document.querySelector('img');

img.addEventListener('click', function(){

    console.log('clicou');
});

//CALLBACK

//function clique(){

   // console.log('clicou');
//}

//img.addEventListener('click', clique);

//-------------------------------------

function clique(event){  //o parâmetro event é uma maneira de acessar e utilizar 
                         //informações detalhadas sobre o evento de clique que ocorreu,
    console.log(event);
}

img.addEventListener('click', clique);


//PROPRIEDADES DO EVENT

const animaisLista= document.querySelector('.animais-lista');

function executarCallback(event){

    const currentTarget= event.currentTarget;   //Representa o elemento atual que está lidando com o evento,
                                                // mesmo que o evento tenha ocorrido em um elemento filho.
                                           
    const target= event.target; //Representa o elemento no qual o evento ocorreu (o alvo real do evento). Pode ser diferente
                                //de currentTarget se o evento estiver se propagando através de elementos aninhados.

    const type= event.type;     //Indica o tipo de evento que ocorreu, como "click" para eventos de clique.

    const path= event.path;     //Representa o caminho percorrido pelo evento 

    console.log(currentTarget, target, type, path, );
}

animaisLista.addEventListener('click', executarCallback);


// PREVENT DEFAULT

//o código impede a navegação padrão ao clicar em um link externo e, em vez disso, registra informações sobre o evento no console. 

//const linkExterno= document.querySelector('a[href^="http"]');

//function handleLinkExterno(event){

  //  event.preventDefault();
    //console.log(event);
//}

//linkExterno.addEventListener('click', handleLinkExterno);

//THIS----------------------------------------
//this geralmente representa o elemento no qual o evento ocorreu,
const linkExterno= document.querySelector('a[href^="http"]');
function handleLinkExterno(event){

    event.preventDefault();
    //console.log(this);
    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);
//----------------------------------------------


//DIFERENTES EVENTOS----------------------------------

const h1= document.querySelector('h1');

function handleEvent(event){

    console.log(event.type, event);
}

//h1.addEventListener('click', handleEvent);//clique
//h1.addEventListener('mouseenter', handleEvent);//mouseenter é acionado quando o ponteiro do mouse entra na área de um elemento específico.
//h1.addEventListener('mousemove', handleEvent);//é acionado repetidamente enquanto o ponteiro do mouse está se movendo sobre um elemento.

//window.addEventListener('scroll', handleEvent);//O evento scroll é acionado quando o usuário rola a página para cima ou para baixo.
//window.addEventListener('resize', handleEvent);//O evento resize é acionado quando a janela do navegador é redimensionada.
//window.addEventListener('keydown', handleEvent);//APERTAR TECLA DO TECLADO
//-----------------------------------------------------

//KEYBOARD

function handleKeyboard(event){
    
    if (event.key=='a'){
        document.body.classList.toggle('azul');
    } else if (event.key=='b'){
        document.body.classList.toggle('vermelho');
    }

    else if (event.key=='c'){
        document.body.classList.toggle('laranja');
    }
}

window.addEventListener('keydown', handleKeyboard);


const imgs= document.querySelectorAll('img');

function HandleImg(event){
    console.log("exemplo:",event.target);
}

imgs.forEach((img) => {

    img.addEventListener('click', HandleImg);
});


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


    const allLinks= document.querySelectorAll('a[href^="#"]');

    function AdicionarAtivo(event){

       event.preventDefault();
    
       const linkClicado= event.currentTarget;

       if (!linkClicado.classList.contains('ativo')){

       linkClicado.classList.add('ativo');

       }

        allLinks.forEach(element => {
            
            if (element!= linkClicado && element.classList.contains('ativo')){

                element.classList.remove('ativo');
            }
        });
    }

    allLinks.forEach((link) => {

        link.addEventListener('click', AdicionarAtivo);
    });



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


//const todosElementos= document.querySelectorAll('body *');

//function ElementoClicado(event){

  //  console.log("aqui:",event.currentTarget);
//}

//todosElementos.forEach(element => {
    
  //  element.addEventListener('click', ElementoClicado);
//});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

//const todosElementos2= document.querySelectorAll('body *');

//function ElementoClicado2(event){

  //  event.currentTarget.remove();
//}

//todosElementos2.forEach(element => {
    
  //  element.addEventListener('click', ElementoClicado2);
//});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function AumentarFonte(event){

    if (event.key=='t'){

        document.documentElement.classList.add('letra');
    }

}

window.addEventListener('keydown', AumentarFonte);