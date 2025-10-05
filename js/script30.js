// L03B - Soma dos cem primeiros números
var contador = 1;
var soma = 0;

while (contador <= 100) {
  soma += contador;
  contador++;
}

console.log("Soma dos 100 primeiros números: " + soma);