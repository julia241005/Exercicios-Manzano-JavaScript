// Extra 1C - Cálculo dos votos
let votosA = 300;
let votosB = 250;
let votosC = 150;
let nulos = 20;
let brancos = 30;

let total = votosA + votosB + votosC + nulos + brancos;

console.log("Total de eleitores: " + total);
console.log("Percentual de votos válidos: " + ((votosA + votosB + votosC) / total * 100).toFixed(2) + "%");
console.log("Candidato A: " + (votosA / total * 100).toFixed(2) + "%");
console.log("Candidato B: " + (votosB / total * 100).toFixed(2) + "%");
console.log("Candidato C: " + (votosC / total * 100).toFixed(2) + "%");
console.log("Nulos: " + (nulos / total * 100).toFixed(2) + "%");
console.log("Brancos: " + (brancos / total * 100).toFixed(2) + "%");