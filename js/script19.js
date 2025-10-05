// L02C - Média escolar simples
var nota1 = 6, nota2 = 5, nota3 = 7, nota4 = 4;
var media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
  console.log("Aprovado! Média: " + media.toFixed(1));
} else {
  console.log("Reprovado! Média: " + media.toFixed(1));
}