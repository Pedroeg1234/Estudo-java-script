//NODE LIST

const imgs= document.querySelectorAll('img');
//FOREACH
imgs.forEach(function(item,index) {
    
    console.log(index,item)
});
//ARROW FUNCTION

imgs.forEach((item, index) => {
    console.log(index, item);
});


//HTML COLLECTION
const titulos= document.getElementsByClassName('titulo');
const titulosArray= Array.from(titulos);
//FOREACH
titulosArray.forEach(function(item,index){
    console.log(index,item);
});
//ARROW FUNCTION
titulosArray.forEach((item, index) => {
    console.log(index, item);
});


//EXERCICIOS
//MOSTRE NO CONSOLE CADA PARÁGRAFO DO SITE
//MOSTRE O TEXTO DOS PARÁGRAFOS NO CONSOLE

var paragrafo= document.querySelectorAll('p');
paragrafo.forEach((item) =>{

    console.log(item);
});

var paragrafo= document.querySelectorAll('p');
paragrafo.forEach((item) =>{

    console.log(item.innerText);
});

