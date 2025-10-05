//L04H — Cálculo da área total de uma residência
var totalArea = 0;
var resposta;

do {
  var nomeComodo = prompt("Digite o nome do cômodo:");
  var largura = parseFloat(prompt("Digite a largura do cômodo (m):"));
  var comprimento = parseFloat(prompt("Digite o comprimento do cômodo (m):"));
  var area = largura * comprimento;
  console.log("Área do(a)", nomeComodo, "=", area, "m²");

  totalArea += area;

  resposta = prompt("Deseja calcular outro cômodo? (SIM/NAO)").toUpperCase();
} while (resposta === "SIM");

console.log("Área total da residência:", totalArea, "m²");