// L03F - Potência de base e expoente sem operador ^
var base = 2;
var expoente = 5;
var resultado = 1;
var contador = 1;

while (contador <= expoente) {
  resultado *= base;
  contador++;
}

console.log(base + " elevado a " + expoente + " = " + resultado);