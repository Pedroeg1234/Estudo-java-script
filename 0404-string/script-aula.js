/*
length: Esta propriedade retorna o número de caracteres em uma string. Por exemplo, string.length retornará o comprimento da string string.

charAt(n): Este método retorna o caractere na posição especificada (n) em uma string. Se o índice estiver fora do intervalo da string, retorna uma string vazia.

concat(str2, str3, ...): Este método concatena uma ou mais strings à string original e retorna a nova string resultante.

includes(search, position): Este método verifica se uma string contém a substring especificada e retorna true ou false com base no resultado da verificação.

endsWith(search) e startsWith(search): endsWith verifica se uma string termina com a substring especificada, enquanto startsWith verifica se uma string começa com a substring especificada. Ambos os métodos retornam true ou false.

slice(start, end): Este método retorna uma parte da string, começando do índice start até o índice end (não incluído). Se end for omitido, a extração continuará até o final da string.

substring(start, end): Similar ao slice, este método retorna uma parte da string entre os índices start e end, excluindo end. No entanto, substring não aceita índices negativos.

indexOf(search) e lastIndexOf(search): indexOf retorna o índice da primeira ocorrência da substring especificada na string, enquanto lastIndexOf retorna o índice da última ocorrência.

padStart(n, str) e padEnd(n, str): Estes métodos aumentam o comprimento da string até o valor especificado em n, preenchendo-a com espaços à esquerda (padStart) ou à direita (padEnd). O caractere de preenchimento opcional str pode ser especificado.

repeat(n): Este método cria e retorna uma nova string que consiste na string original repetida n vezes.

replace(regexp|substr, newstr|function): Este método substitui parte da string com outra string ou o resultado de uma função de correspondência de padrões.

split(pattern): Este método divide uma string em um array de substrings com base em um padrão especificado. O padrão pode ser uma string ou uma expressão regular.

toLowerCase() e toUpperCase(): toLowerCase retorna a string em letras minúsculas, enquanto toUpperCase retorna a string em letras maiúsculas.

trim(), trimStart(), trimEnd(): trim remove os espaços em branco do início e do final da string. trimStart remove os espaços em branco do início e trimEnd remove os espaços em branco do final da string.
*/


const palavra = 'Hello';
console.log(palavra.length); // Saída: 5


const palavra = 'JavaScript';
console.log(palavra.charAt(2)); // Saída: v

const saudacao = 'Olá, ';
const nome = 'Mundo!';
const mensagem = saudacao.concat(nome);
console.log(mensagem); // Saída: Olá, Mundo!


const frase = 'JavaScript é incrível!';
console.log(frase.includes('incrível')); // Saída: true


const palavra = 'JavaScript';
console.log(palavra.endsWith('Script')); // Saída: true
console.log(palavra.startsWith('Java')); // Saída: true

const frase = 'Aprender JavaScript é divertido';
console.log(frase.slice(9, 22)); // Saída: JavaScript

const frase = 'Aprender JavaScript é divertido';
console.log(frase.substring(0, 8)); // Saída: Aprender

const frase = 'Aprender JavaScript é divertido e JavaScript é útil';
console.log(frase.indexOf('JavaScript')); // Saída: 9
console.log(frase.lastIndexOf('JavaScript')); // Saída: 32

const numero = '42';
console.log(numero.padStart(5, '0')); // Saída: 00042
console.log(numero.padEnd(6, '*')); // Saída: 42****


const palavra = 'abc';
console.log(palavra.repeat(3)); // Saída: abcabcabc


const frase = 'Aprender JavaScript é divertido';
console.log(frase.replace('divertido', 'incrível')); // Saída: Aprender JavaScript é incrível

const lista = 'maçã, banana, laranja';
const arrayFrutas = lista.split(', ');
console.log(arrayFrutas); // Saída: ['maçã', 'banana', 'laranja']

const palavra = 'JavaScript';
console.log(palavra.toLowerCase()); // Saída: javascript
console.log(palavra.toUpperCase()); // Saída: JAVASCRIPT

const texto = '   Olá, Mundo!   ';
console.log(texto.trim()); // Saída: Olá, Mundo!

