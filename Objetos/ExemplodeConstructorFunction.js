//CONSTRUCTOR FUNCTION E PROTOTYPE--

// Definindo a constructor function
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.ligado = false; // estado do motor
}

// Adicionando métodos ao protótipo de Carro
Carro.prototype.ligar = function() {
  if (!this.ligado) {
    console.log("Carro ligado.");
    this.ligado = true;
  } else {
    console.log("O carro já está ligado.");
  }
};

Carro.prototype.desligar = function() {
  if (this.ligado) {
    console.log("Carro desligado.");
    this.ligado = false;
  } else {
    console.log("O carro já está desligado.");
  }
};

Carro.prototype.buzinar = function() {
  console.log("Beep beep!");
};

// Criando uma instância de Carro
var meuCarro = new Carro('Toyota', 'Corolla', 2020);

// Usando os métodos do objeto
meuCarro.ligar(); // Saída: Carro ligado.
meuCarro.buzinar();  // Saída: Beep beep!
meuCarro.desligar();  // Saída: Carro desligado.
meuCarro.desligar();  // Saída: O carro já está desligado.



//EXERCICIO

// Transforme o objeto abaixo em uma Constructor Function
/*const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
*/
  
//RESPOSTA: --->>>
  function Pessoa(nome, idade){

    this.nome=nome;
    this.idade= idade;
    this.andar= function(){

        console.log(nome + "andou");
    }

  }

  


  var pessoa1= new Pessoa("Joao", 20);
  var pessoa2= new Pessoa("Maria", 25);
  var pessoa3= new Pessoa("Bruno", 15);

  pessoa1.andar();
  pessoa2.andar();
  pessoa3.andar();
  
