// L01E - Cálculo da prestação em atraso
let valor = 1000;
let taxa = 5;
let tempoAtraso = 2;

let prestacao = valor + (valor * taxa / 100) * tempoAtraso;
console.log("Valor da prestação atualizada: " + prestacao);