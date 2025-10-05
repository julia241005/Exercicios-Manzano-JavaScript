// L02G - Divisíveis por 2 e 3
var numeros = [6, 8, 9, 12];
console.log("Números divisíveis por 2 e 3:");

for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0 && numeros[i] % 3 === 0) {
    console.log(numeros[i]);
  }
}