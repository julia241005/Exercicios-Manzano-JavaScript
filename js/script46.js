//L04F — Somatório, média e total de valores positivos
var soma = 0;
var contador = 0;
var valor;

do {
  valor = parseFloat(prompt("Digite um número positivo (ou negativo para encerrar):"));
  if (valor >= 0) {
    soma += valor;
    contador++;
  }
} while (valor >= 0);

if (contador > 0) {
  var media = soma / contador;
  console.log("Total de valores:", contador);
  console.log("Somatório:", soma);
  console.log("Média:", media);
} else {
  console.log("Nenhum valor positivo foi informado.");
}