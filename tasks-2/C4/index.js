const distribuidoras = [
  { id: 1, estado: "SP", valor: 6783643, percentual: 0 },
  { id: 2, estado: "RJ", valor: 3667866, percentual: 0 },
  { id: 3, estado: "MG", valor: 2922988, percentual: 0 },
  { id: 4, estado: "ES", valor: 2716548, percentual: 0 },
  { id: 5, estado: "outros", valor: 1984953, percentual: 0 },
];

let arrayValores = [];
let somaValores = 0;
let valoresPercentual = [];
let percentual = 1 * 100;
let arrayEstados = [];
arrayValores = distribuidoras.map((estado) => {
  return estado.valor;
});

somaValores = arrayValores.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
});
valoresPercentual = arrayValores.map((valor) => {
  return (valor / somaValores) * percentual;
});
console.log(
  `
   Estado: SP ${Math.round(valoresPercentual[0].toFixed(2))}% 
   Estado: RJ ${Math.round(valoresPercentual[1].toFixed(2))}%
   Estado: MG ${Math.round(valoresPercentual[2].toFixed(2))}%
   Estado: ES ${Math.round(valoresPercentual[3].toFixed(2))}%
   Estado: OUTROS ${Math.round(valoresPercentual[4].toFixed(2))}% 
  `
);
