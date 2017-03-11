// export default function() {
require('./Ball.css');

module.exports = class Ball {
  constructor(parent){
    var ball = document.createElement('div');
    ball.style.width = "100px";
    ball.style.height = "100px";
    ball.style.backgroundColor = "red";
    ball.style.borderRadius = "50%";
    ball.className = "ballContainer";
    this.elem = ball;
    this.position = { left: 0, top: 0 }
    this.speed = 300;
    parent.appendChild(ball);
  }
  goLeft() {
    this.changePosition({ top: this.position.top, left: this.position.left - this.speed })
  }
  goUp() {
    this.changePosition({ top: this.position.top - this.speed, left: this.position.left })
  }
  goRight() {
    this.changePosition({ top: this.position.top, left: this.position.left + this.speed })
  }
  goDown() {
    this.changePosition({ top: this.position.top + this.speed, left: this.position.left })
  }
  changePosition(newPosition) {
    this.position = newPosition;
    this.elem.style.transform = "translate(" + (newPosition.left - 50) + "px, " + (newPosition.top - 50) + "px" + ")";
  }
}