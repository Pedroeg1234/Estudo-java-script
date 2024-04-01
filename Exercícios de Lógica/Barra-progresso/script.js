const progressBar= document.querySelector(".progress");
const previousButton= document.querySelector("#previous-btn");
const nextButton= document.querySelector("#next-btn");

let progress=0;


function AtualizarBarra(){

    progressBar.style.width= progress + "%";

}
function avancar(){


    progress+=10;

    if (progress>100){

        progress=100;
    }

    AtualizarBarra();
}

function voltar(){

    progress-=10;

    if (progress<0){

        progress=0;
    }

    AtualizarBarra();
}

nextButton.addEventListener("click", avancar);
previousButton.addEventListener("click", voltar);
