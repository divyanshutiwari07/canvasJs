var f = function () {
  var canvas = document.getElementsById('myCanvas')[0];
  var c = canvas.getContext('2d');
  c.beginPath();
  c.moveTo(0,0);
  c.lineTo(200,100);
  c.stroke();
  
};