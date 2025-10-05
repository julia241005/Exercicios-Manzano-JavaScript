//L04I — Maior e menor valor até que um negativo seja informado
var maior = null;
var menor = null;
var valor;

do {
  valor = parseFloat(prompt("Digite um número positivo (ou negativo para sair):"));

  if (valor >= 0) {
    if (maior === null || valor > maior) maior = valor;
    if (menor === null || valor < menor) menor = valor;
  }
} while (valor >= 0);

if (maior !== null) {
  console.log("Maior valor informado:", maior);
  console.log("Menor valor informado:", menor);
} else {
  console.log("Nenhum valor positivo foi informado.");
}