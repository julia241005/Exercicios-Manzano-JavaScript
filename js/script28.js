// L02L - Saudação personalizada
var nome = "Júlia Duarte";
var sexo = "F"; // M para masculino, F para feminino

if (sexo === "M" || sexo === "m") {
  console.log("Ilmo Sr. " + nome);
} else if (sexo === "F" || sexo === "f") {
  console.log("Ilma Sra. " + nome);
} else {
  console.log("Sexo inválido informado.");
}