// L03H - Conversão Celsius para Fahrenheit
var celsius = 10;

console.log("Celsius | Fahrenheit");
while (celsius <= 100) {
  var fahrenheit = (9 * celsius + 160) / 5;
  console.log(celsius + "°C = " + fahrenheit + "°F");
  celsius += 10;
}