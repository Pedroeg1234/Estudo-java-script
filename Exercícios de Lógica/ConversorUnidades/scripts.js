const inputElement= document.querySelector("#input");
const inputFrom= document.querySelector("#from");
const inputTo= document.querySelector("#to");
const button= document.querySelector("#convert-btn");
const outputElement= document.querySelector("#output");
const elementMensage= document.querySelector("#message");

function convert(){

    const fromValue= inputFrom.value;
    const toValue= inputTo.value;

    if (fromValue == toValue){

        outputElement.value= inputElement.value;
        elementMensage.textContent= "";
        return;
    }

    let metros;

    switch(fromValue){

        case "m":
            metros= inputElement.value;
            break;
        case "km":

            metros= inputElement.value*1000;
            break;
        case "cm":

            metros= inputElement.value/100;
            break;
        case "mm":

            metros= inputElement.value/1000;
            break;

    }

    let result;
    switch(toValue){

        case "m":
            result= metros;
            break;
        case "km":

            result= metros/1000;
            break;
        case "cm":

            result= metros*100;
            break;
        case "mm":

            result= metros*1000;
            break;

    }

    outputElement.value= result;


      // Exibir a mensagem de conversão
  const fromLabel = inputFrom.options[inputFrom.selectedIndex].text;
  const toLabel = inputTo.options[inputTo.selectedIndex].text;
  const message = `${
    inputElement.value
  } ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
  elementMensage.textContent = message;
}

button.addEventListener("click", convert);

