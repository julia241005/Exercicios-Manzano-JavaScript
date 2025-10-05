//L04E — Somatório do fatorial de 15 valores
var contador = 1;
var somaFatoriais = 0;

function fatorial(n) {
  var resultado = 1;
  for (var i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

do {
  var valor = parseInt(prompt("Digite o " + contador + "º número inteiro:"));
  somaFatoriais += fatorial(valor);
  contador++;
} while (contador <= 15);

console.log("Somatório dos fatoriais =", somaFatoriais);