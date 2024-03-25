
function relogio(){
const hoursElement= document.querySelector(".hours");
const minutesElement= document.querySelector(".minutes");
const secundElement= document.querySelector(".seconds");


const now= new Date();

//padStart(2, "0") preenche a string com zeros à esquerda até que ela tenha pelo menos dois caracteres de comprimento.
const hours=  now.getHours().toString().padStart(2, "0");
const minutes=  now.getMinutes().toString().padStart(2, "0");
const seconds=  now.getSeconds().toString().padStart(2, "0");

hoursElement.textContent= hours;
minutesElement.textContent= minutes;
secundElement.textContent= seconds;

}

setInterval(relogio, 1000);

