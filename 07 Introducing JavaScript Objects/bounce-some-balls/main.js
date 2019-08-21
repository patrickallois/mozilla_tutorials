// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number
function random(min,max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
// ball object
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}
// ball prototype draw function
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
//update method to 'move' the ball
Ball.prototype.update = function() {
  //if the ball is beyond the max width turn it around
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  //if the ball is beyond the min width turn it around
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
  //if the ball is beyond the max height turn it around
  if ((this.y - this.size) >= height) {
    this.velY = -(this.velY);
  }
  //if the ball is beyond the min height turn it around
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }
  //take the results and update current x and y coordinates
  this.x += this.velX;
  this.y += this.velY;
}
//adding collision detection
Ball.prototype.collisionDetection = function() {
  for (var j = 0; j < balls.length; j++) {
    //if this ball is not the same as the one in question find their relative distance
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      //if the distance between the two balls is less than the sum of their sizes
      //then change their colors to the same new random color
      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
      }
    }
  }
}
//creating and storing multiple balls
var balls = [];
//creates # of balls
while (balls.length < 25) {
  //creates random size for each ball
  var size = random(10,20);
  var ball = new Ball(
    //ball position always drawn at least one ball width
    //away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
    size
  );
  //add the new ball to the balls array
  balls.push(ball);
}
//loop function creates animation
function loop() {
  //sets the frame
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
  //places each ball into the frame
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetection();
  }
  //recursively runs this function continuously creating a smooth animation
  requestAnimationFrame(loop);
}
//call the loop function to begin the animation
loop();
