//L04D — Grãos de trigo no tabuleiro de xadrez
var quadro = 1;
var graos = 1;
var totalGraos = 0;

do {
  totalGraos += graos;
  graos *= 2;
  quadro++;
} while (quadro <= 64);

console.log("Total de grãos no tabuleiro:", totalGraos);