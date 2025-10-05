// L02F - Ordem crescente
var A = 9, B = 2, C = 5;
var numeros = [A, B, C];

numeros.sort(function(a, b) { return a - b; });
console.log("Ordem crescente: " + numeros.join(", "));