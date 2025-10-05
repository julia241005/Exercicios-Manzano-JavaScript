// L03I - Somatório e média de 10 valores
var contador = 1;
var soma = 0;

while (contador <= 10) {
  var valor = contador * 2; // exemplo (poderia ser prompt)
  soma += valor;
  contador++;
}

var media = soma / 10;
console.log("Somatório: " + soma);
console.log("Média: " + media);