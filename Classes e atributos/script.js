/*
const menu= document.querySelector('.menu');

menu.className; nome das classes
menu.classList;
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile');
menu.classList.remove('ativo');
menu.classList.toogle('ativo');  Adiciona a classe se ela não estiver presente, e a remove se estiver presente. 
menu.classList.contains('ativo');
menu.classList.replace('ativo', 'inativo');

"read-only" (somente leitura) e "writable" (gravável) referem-se à capacidade de modificar
 ou não modificar um valor ou propriedade. 

 WRITABLE
 pessoaWritable.nome = "Maria";
 console.log(pessoaWritable.nome); // Saída: "Maria"

 READ ONLY
 console.log(pessoaReadOnly.nome); // Saída: "João"
 pessoaReadOnly.nome = "Maria"; // Erro: Cannot assign to read-only property 'nome'
*/

const menu= document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('contem-azul');
} else {
    menu.classList.add('nao-contem-azul');
}

console.log(menu.className);

//menu.className= 'ativo';   pode mudar o nome das classes do menu;
//menu.className= menu.className + ' vermelho'; adiciona uma nova classe;
//menu.className += ' vermelho';

const animais= document.querySelector('.animais');
console.log(animais);

console.log(animais.attributes);
console.log(animais.attributes[0]);
console.log(animais.attributes[1]);
console.log(animais.attributes.id);

const img= document.querySelector('img');
console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));
img.setAttribute('alt', 'é uma raposa');

console.log(img.getAttribute('alt'));

const possuiAlt= img.hasAttribute('alt');
console.log(possuiAlt);

//img.removeAttribute('alt');

//----------------EXERCICIOS---------------------
//ADICIONE A CLASSE ATIVO A TODOS OS ITENS DO MENU
const menuEx= document.querySelectorAll('.menu a');

menuEx.forEach(item => {
    item.classList.add('ativo');  
});

menuEx.forEach(item => {
    console.log(item);  
});

//REMOVA A CLASSE ATIVO DE TODOS OS ITENS DO MENU E MANTENHA APENAS NO PRIMEIRO
menuEx.forEach(item =>{
    item.classList.remove('ativo');
});

menuEx[0].classList.add('ativo');

menuEx.forEach(item => {

    console.log(item);
});

//VERIFIQUE SE AS IMAGENS POSSUI O ATRIBUTO ALT
const imagens= document.querySelectorAll('img');

var atributoAlt=true;

imagens.forEach(item=>{

    if (!item.hasAttribute('alt')){
        atributoAlt=false;
    }
});

console.log(atributoAlt);

//MODIFIQUE O HREF DO LINK EXTERNO NO MENU
const linkExterno = document.querySelector('a[href^="https://"]');
linkExterno.setAttribute('href', 'https://www.facebook.com/');
