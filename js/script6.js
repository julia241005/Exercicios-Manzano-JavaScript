// L01F - Trocar valores entre variáveis
let A = 10;
let B = 20;

console.log("Antes da troca: A=" + A + ", B=" + B);

let aux = A;
A = B;
B = aux;

console.log("Depois da troca: A=" + A + ", B=" + B);