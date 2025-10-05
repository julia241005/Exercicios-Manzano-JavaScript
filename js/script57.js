//L05G – Potências de 3 de expoente 0 até 15 
var base = 3;
var resultado = 1;

for (var expoente = 0; expoente <= 15; expoente++) {
  if (expoente === 0) {
    resultado = 1;
  } else {
    resultado *= base;
  }
  console.log(base + " elevado a " + expoente + " = " + resultado);
}