var canvas = document.getElementById('cirlces');
var context = canvas.getContext('2d');

var cW = canvas.width;
var cH = canvas.height;
var x, y, r, g, b, a, j = 1;
var radius = Math.floor(Math.random() * 100)+10;
var circleNumber = Math.floor(Math.random() * 100)+1;

function circle(x,y, radius, color) {  
  context.strokeStyle = color;
  context.beginPath();
  context.arc(x,y,radius,0,2*Math.PI);
  context.stroke();
}

for (j = 1; j <= circleNumber; j++) {
  x = Math.floor(Math.random() * (cW-2*radius)) + radius;
  y = Math.floor(Math.random() * (cH-2*radius)) + radius;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  a = (Math.floor(Math.random() * 10) + 1)/10;
  circle(x,y,radius,'rgba('+r+','+g+','+b+','+a+')');
}