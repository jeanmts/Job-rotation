const data = require("./data");

let resultado = 0;
let numeroAnterior = 0;
let numeroAtual = 1;
let sequencia = 10;
let arrayResultado = [];

function valorFibonacci(numero) {
  for (let i = 0; i < sequencia; i++) {
    resultado = numeroAtual + numeroAnterior;
    numeroAnterior = numeroAtual;
    numeroAtual = resultado;
    arrayResultado.push(resultado);
  }
  const numeroEncontrado = arrayResultado.find((item) => {
    return item == numero;
  });
  if (numeroEncontrado) {
    console.log("Pertence");
  }
  if (!numeroEncontrado) {
    console.log("Não pertence... Aumente o valor da sequencia !!!");
  }
}
valorFibonacci(90);
