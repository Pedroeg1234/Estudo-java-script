// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
//-------------------------------------------------------
let totalTaxas = 0;
let totalRecebimentos = 0;

transacoes.forEach(transacao => {
  const valorLimpo = +transacao.valor.replace('R$ ', ''); // Remove 'R$ ' e converte para número
  if (transacao.descricao.includes('Taxa')) {
    totalTaxas += valorLimpo;
  } else if (transacao.descricao.includes('Recebimento')) {
    totalRecebimentos += valorLimpo;
  }
});

console.log('Total de taxas:', totalTaxas); // Saída: Total de taxas: 297
console.log('Total de recebimentos:', totalRecebimentos); // Saída: Total de recebimentos: 148
//---------------------------------------------------------------------
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes); // Saída: ['Carro', 'Avião', 'Trem', 'Ônibus', 'Bicicleta']

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlSubstituido = html.replaceAll('<span>', '<a>').replaceAll('</span>', '</a>');
console.log(htmlSubstituido);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const ultimoCaracter = frase.charAt(frase.length - 1);
console.log(ultimoCaracter); // Saída: !

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
const totalTaxas2 = transacoes2.filter(transacao => transacao.toLowerCase().includes('taxa')).length;
console.log('Total de taxas:', totalTaxas2); // Saída: Total de taxas: 4
