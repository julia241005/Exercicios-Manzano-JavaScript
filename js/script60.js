//L05J – Conversão de graus Celsius para Fahrenheit (de 10 em 10 até 100)
for (var celsius = 10; celsius <= 100; celsius += 10) {
  var fahrenheit = (9 * celsius + 160) / 5;
  console.log(celsius + "°C = " + fahrenheit + "°F");
}