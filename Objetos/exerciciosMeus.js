// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }
///////////////////////////////////////////////////////////////
  function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  
    this.andar = function() {
      console.log(this.nome + ' andou');
    };
  }
  
  var joao = new Pessoa('João', 20);
  var maria = new Pessoa('Maria', 25);
  var bruno = new Pessoa('Bruno', 15);
  
  joao.andar();  // Saída: João andou
  maria.andar(); // Saída: Maria andou
  bruno.andar(); // Saída: Bruno andou
  

  // Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor){

    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList; //você pode acessar os elementos selecionados através dessa propriedade this.elements.

    this.addClass = function(classe){
        elementList.forEach(element => {
            element.classList.add(classe);
        });
    };

    this.removeClass = function(classe){
        elementList.forEach(element => {
            element.classList.remove(classe);
        });
    };
}

const lista = new Dom('li'); // 'li' deve ser uma string

lista.addClass('minhaClasse'); // Chamando o método addClass
lista.removeClass('minhaClasse'); // Chamando o método removeClass

console.log(lista.elements); // Imprimindo os elementos selecionados
