const botaoVerificar= document.querySelector("#botao-verificar");
const resultado= document.querySelector ("#resultado");
const palavraInput= document.querySelector ("#palavra");


function VerificarPalindromo(){

    const palavra= palavraInput.value;
    const palavraInvertida= palavra.split("").reverse().join("");

    if (palavra.toLowerCase() === palavraInvertida.toLowerCase()){

        resultado.textContent= `A palavra ${palavra} é um palíndromo`;
    } else{

        resultado.textContent= `A palavra ${palavra} não é um palíndromo`;
    }
}

botaoVerificar.addEventListener("click", VerificarPalindromo);

palavraInput.addEventListener("keyup", (e) =>{

    if (e.key=== "Enter"){

        e.preventDefault();
        VerificarPalindromo();
    }
});