//L05D – Somatório dos valores pares de 1 até 500
var somaPares = 0;

for (var i = 1; i <= 500; i++) {
  if (i % 2 === 0) {
    somaPares += i;
  }
}

console.log("A soma dos números pares entre 1 e 500 é: " + somaPares);