


function verificarSenha(){

    const usuario = document.querySelector(".username").value;
    const senha= document.querySelector(".password").value;
    const message= document.querySelector(".message");

    if (usuario=="usuario" && senha== "senha"){

        message.textContent= "Login e senha corretos";

    } else{

    message.textContent= "Senha Incorreta";
    }
}

const button= document.querySelector(".login");

button.addEventListener('click', verificarSenha);