// L03J - Soma e média dos números pares de 50 a 70
var numero = 50;
var soma = 0;
var contadorPares = 0;

while (numero <= 70) {
  if (numero % 2 === 0) {
    soma += numero;
    contadorPares++;
  }
  numero++;
}

var media = soma / contadorPares;
console.log("Soma dos pares: " + soma);
console.log("Média dos pares: " + media);