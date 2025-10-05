// L03L - Ler valores até digitar negativo e mostrar maior e menor
var numeros = [8, 3, 10, 2, 15, -1]; // simulação
var indice = 0;
var maior = null;
var menor = null;

while (numeros[indice] >= 0) {
  var valor = numeros[indice];

  if (maior === null || valor > maior) {
    maior = valor;
  }
  if (menor === null || valor < menor) {
    menor = valor;
  }

  indice++;
}

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);