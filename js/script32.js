// L03D - Mostrar ímpares de 0 a 20
var numero = 0;

console.log("Números ímpares de 0 a 20:");
while (numero <= 20) {
  if (numero % 2 !== 0) {
    console.log(numero);
  }
  numero++;
}