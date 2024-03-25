const botao= document.querySelector(".clickButton");
let contador=0;

botao.addEventListener('click', function(){  //Isso adiciona um ouvinte de evento de clique ao botão.
                                              //Quando o botão é clicado, a função anônima passada como segundo argumento 
                                              //será executada.

    contador++;

    contarBotao(contador);

});

//basicamente, quando eu clico no botão ele chama uma função anonima,
// e dentro dessa função anonima eu estou chamando outra função



function contarBotao (contador){

    const clickCount= document.querySelector(".clickCount");

    clickCount.textContent= contador;
}


//Uma função anônima em JavaScript é uma função sem um nome definido,
// útil para ser passada como argumento para outras funções ou atribuída a variáveis.