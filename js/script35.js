// L03G - Série de Fibonacci até o 15º termo
var termo1 = 1;
var termo2 = 1;
var contador = 1;

console.log("Série de Fibonacci (15 termos):");

while (contador <= 15) {
  console.log(termo1);
  var proximo = termo1 + termo2;
  termo1 = termo2;
  termo2 = proximo;
  contador++;
}