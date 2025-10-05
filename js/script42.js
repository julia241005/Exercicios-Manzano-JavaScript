//L04B — Somatório dos números pares de 1 até 500
var numero = 1;
var somaPares = 0;

do {
  if (numero % 2 === 0) {
    somaPares += numero;
  }
  numero++;
} while (numero <= 500);

console.log("Somatório dos pares de 1 até 500 =", somaPares);