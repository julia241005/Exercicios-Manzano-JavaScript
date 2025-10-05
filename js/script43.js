//L04C — Números divisíveis por 4 menores que 200
var contador = 1;

do {
  if (contador % 4 === 0) {
    console.log(contador, "é divisível por 4");
  }
  contador++;
} while (contador < 200);