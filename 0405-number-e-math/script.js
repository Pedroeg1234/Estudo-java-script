// Retorna um número aleatório entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio)

// Retorna o maior número da lista abaixo
const numeros = '4, 5, 20, 27, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);

console.log(numeroMaximo);

// Cria uma função para limpar os preços e retornar os números com centavos arredondados
// e depois retorna a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  // Converte para maiúsculo, remove 'R$', remove espaços em branco extras, substitui ',' por '.' e converte para número
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  // Arredonda para 2 casas decimais
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
// Itera sobre cada preço na lista, limpa o preço e adiciona à soma
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
})

// Formata a soma para o formato de moeda brasileira e imprime no console
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

// Limpa o preço do segundo item da lista de preços e retorna o valor limpo
limparPreco(listaPrecos[1]);
