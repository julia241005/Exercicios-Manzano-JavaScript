// L03C - Somatório dos pares entre 1 e 500
var numero = 1;
var somaPares = 0;

while (numero <= 500) {
  if (numero % 2 === 0) {
    somaPares += numero;
  }
  numero++;
}

console.log("Soma dos números pares de 1 a 500: " + somaPares);