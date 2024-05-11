const numeros= document.querySelectorAll(".number");
const gerarNumeros= document.querySelector("#generate");

function generateNumbers(){

    const max=60;
    const min= 1;
    const result= [];

    while(result.length <6){

        const numero= Math.floor(Math.random() * (max - min +1)) + min;

        if (!result.includes(numero)){

            result.push(numero);
        }
    }

    for (let i=0 ;i< result.length; i++){

        numeros[i].textContent= result[i];

    }


}

gerarNumeros.addEventListener("click", generateNumbers);