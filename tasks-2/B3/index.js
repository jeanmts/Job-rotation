const data = require("../A2/data");

let diasSemFaturamento = [];
let diasComFaturamento = [];
let faturamentoDia = [];
let totalDias = [];
let totalDiasSemFaturamento = [];
let maiorFaturamento = 0;
let mediaMensal = 0;
let valorMensal = 0;
let numeroDiaSuperiorMedia = 0;
let diasAcimaMedia = [];

faturamentoDia = data.map((item) => {
  return item.valor;
});
faturamentoDia.sort((a, b) => {
  return b - a;
});

diasSemFaturamento = data.filter((item) => {
  return item.valor === 0;
});
totalDiasSemFaturamento = diasSemFaturamento.map((item) => {
  return item.dia;
});
diasComFaturamento = data.filter((item) => {
  return item.valor !== 0;
});
totalDiasComFaturamento = diasComFaturamento.map((item) => {
  return item.valor;
});
valorMensal = faturamentoDia.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
});
mediaMensal = valorMensal / totalDiasComFaturamento.length;
diasAcimaMedia = diasComFaturamento.filter((item) => {
  return item.valor > mediaMensal;
});
maiorFaturamento = faturamentoDia[0];

console.log(`Dias com  menores Faturamentos ${totalDiasSemFaturamento}`);
console.log(`Maior faturamento ocorrido ${maiorFaturamento}`);
console.log(
  `Numero de dias com faturamento acima da média ${diasAcimaMedia.length}`
);
