const calcularBtn= document.querySelector("#calculateBtn");

calcularBtn.addEventListener("click", calcularGorjeta);

function calcularGorjeta(){


    const valorConta= parseFloat(document.querySelector("#billAmount").value);
    const qualidadeServico= parseFloat(document.querySelector("#serviceQuality").value);

    if (valorConta===""){

        alert ("Por favor, preencha todos os dados");
        return;
    }

    const valorGorjeta= valorConta*qualidadeServico;
    const valorTotal= valorConta+ valorGorjeta;

    const tipAmountInput= document.querySelector("#tipAmount");
    const totalAmountInput= document.querySelector("#totalAmount");

    tipAmountInput.value= `R$ ${valorConta}`;
    totalAmountInput.value= `R$ ${valorTotal}`;


}