var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");

var dx = 0;
var anchuraLineas = 10;
var lineas = 0;

dx = 0;
lineas = 0;
while (lineas < 30) {
  dibujarLinea("red", 0, dx, 10+dx, 300);
  dx += anchuraLineas;
  lineas++;
}

dx = 0;
lineas = 0;
while (lineas < 30) {
  dibujarLinea("orange", 0, dx , 300-dx, 0);
  dx += anchuraLineas;
  lineas++;
}

dx = 0;
lineas = 0;
while (lineas < 30) {
  dibujarLinea("blue", 300, 300-dx, 290-dx, 0);
  dx += anchuraLineas;
  lineas++;
}

dx = 0;
lineas = 0;
while (lineas < 30) {
  dibujarLinea("green", 300, 300-dx, dx, 300);
  dx += anchuraLineas;
  lineas++;
}




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
