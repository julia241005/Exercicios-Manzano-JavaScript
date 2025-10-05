// L02D - Média com exame
var n1 = 6, n2 = 5, n3 = 8, n4 = 6;
var mediaInicial = (n1 + n2 + n3 + n4) / 4;

if (mediaInicial >= 7) {
  console.log("Aprovado! Média: " + mediaInicial.toFixed(1));
} else {
  var notaExame = 6; // pode mudar o valor
  var novaMedia = (mediaInicial + notaExame) / 2;

  if (novaMedia >= 5) {
    console.log("Aprovado em exame! Média final: " + novaMedia.toFixed(1));
  } else {
    console.log("Reprovado! Média final: " + novaMedia.toFixed(1));
  }
}