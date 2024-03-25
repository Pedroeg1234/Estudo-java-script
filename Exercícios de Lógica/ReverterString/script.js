const botao= document.querySelector(".reverterBtn");


function inverterString(){

    const text= document.querySelector(".inputString").value;
    const resultado= document.querySelector(".resultado");
    let textInvertido="";

    for (let i=text.length-1; i>=0; i--){

        textInvertido+= text[i];

    }

    resultado.textContent=textInvertido;

}

botao.addEventListener('click', inverterString);