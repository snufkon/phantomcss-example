window.onload = function() {
  changeColor("red");
};

function changeColor(color) {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = color;
  ctx.fillRect(10, 10, 50, 50);

}
