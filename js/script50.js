// L04J — Divisão inteira sem usar operador DIV
var dividendo = parseInt(prompt("Digite o dividendo:"));
var divisor = parseInt(prompt("Digite o divisor:"));
var quociente = 0;
var resto = dividendo;

do {
  resto -= divisor;
  if (resto >= 0) {
    quociente++;
  }
} while (resto >= 0);

console.log("Resultado da divisão inteira:", quociente);