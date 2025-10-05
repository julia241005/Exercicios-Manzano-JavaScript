// L02E - Bhaskara
var A = 1, B = -3, C = -4;

if (A === 0) {
  console.log("Não é equação do 2º grau (A não pode ser 0).");
} else {
  var delta = B * B - 4 * A * C;

  if (delta < 0) {
    console.log("Não há raízes reais (delta negativo).");
  } else {
    var x1 = (-B + Math.sqrt(delta)) / (2 * A);
    var x2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log("Raízes: x1 = " + x1 + " e x2 = " + x2);
  }
}