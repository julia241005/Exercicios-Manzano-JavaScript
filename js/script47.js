//L04G — Fatorial dos números ímpares de 1 a 10
function fatorial(n) {
  var resultado = 1;
  for (var i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

var numero = 1;

do {
  if (numero % 2 !== 0) {
    console.log("Fatorial de", numero, "=", fatorial(numero));
  }
  numero++;
} while (numero <= 10);