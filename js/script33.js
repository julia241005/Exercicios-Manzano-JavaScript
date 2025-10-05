// L03E - Potências de 3 sem usar operador ^
var expoente = 0;
var resultado = 1;

console.log("Potências de 3 (0 a 15):");
while (expoente <= 15) {
  console.log("3 ^ " + expoente + " = " + resultado);
  expoente++;
  resultado *= 3;
}