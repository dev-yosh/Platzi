var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");

var dx = 0;

for (var i = 0; i < 1000; i+=10) {
  dibujarLinea("red", 10+i, 300, 150, 50);
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
