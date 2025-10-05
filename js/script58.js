//L05H – Potência de uma base qualquer (sem usar )
var base = 2; // você pode trocar
var expoente = 5; // e aqui também
var resultado = 1;

for (var i = 1; i <= expoente; i++) {
  resultado *= base;
}

console.log(base + " elevado a " + expoente + " é: " + resultado);