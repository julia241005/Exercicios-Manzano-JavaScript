//L05K – Fatorial dos números ímpares de 1 a 10
for (var numero = 1; numero <= 10; numero++) {
  if (numero % 2 !== 0) {
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    console.log("O fatorial de " + numero + " é " + fatorial);
  }
}