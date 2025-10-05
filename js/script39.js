// L03K - Calcular área total de uma residência
var continuar = "SIM";
var areaTotal = 0;

while (continuar === "SIM") {
  var nomeComodo = "Sala"; // exemplo (poderia ser prompt)
  var largura = 3;
  var comprimento = 5;
  var area = largura * comprimento;

  console.log("Cômodo: " + nomeComodo + " - Área: " + area + " m²");

  areaTotal += area;
  continuar = "NAO"; // simula encerramento
}

console.log("Área total da residência: " + areaTotal + " m²");