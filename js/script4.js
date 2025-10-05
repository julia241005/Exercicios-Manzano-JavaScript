// L01D - Cálculo de combustível
let tempo = 2; // horas
let velocidade = 80; // km/h

let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;

console.log("Velocidade média: " + velocidade + " km/h");
console.log("Tempo gasto: " + tempo + " h");
console.log("Distância percorrida: " + distancia + " km");
console.log("Litros usados: " + litrosUsados.toFixed(2));