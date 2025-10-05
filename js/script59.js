//L05I – Série de Fibonacci até o 15º termo
var anterior = 1;
var atual = 1;

console.log(anterior);
console.log(atual);

for (var i = 3; i <= 15; i++) {
  var proximo = anterior + atual;
  console.log(proximo);
  anterior = atual;
  atual = proximo;
}