const calcular= document.querySelector(".calcular");

function Imc(){

    const nome= document.querySelector(".nome").value;
    const altura= document.querySelector(".altura").value;
    const peso= document.querySelector(".peso").value;
    const resultado= document.querySelector(".result");

    if (nome=="" || altura=="" || peso==""){

        resultado.textContent="PREENCHA TODOS OS CAMPOS!";
    } else{

        const valorImc= (peso/ (altura * altura)).toFixed(1);
        let classificacao= "";
        if (valorImc <18.5){

            classificacao= "Você está abaixo do Peso";
            
        } else if (valorImc < 25){

            classificacao= "Você está no peso Ideal";
        } else if (valorImc <30){

            classificacao= ("Você está levemente acima do peso");
        } else{

            classificacao= ("Você está Obeso");
        }

        resultado.textContent =nome + ", seu IMC é: " + valorImc + " " + classificacao;
    }
}

calcular.addEventListener('click', Imc);