// export default function() {
require('./Ball.css');

module.exports = class Ball {
  constructor(parent, initPosition){
    if(initPosition == null) {
      initPosition = { left: 0, top: 0 };
    }
    var ball = document.createElement('div');
    ball.style.width = "100px";
    ball.style.height = "100px";
    ball.style.backgroundColor = "red";
    ball.style.borderRadius = "50%";
    ball.className = "ballContainer";
    this.elem = ball;
    this.setPosition(initPosition);
    this.speed = 300;
    parent.appendChild(ball);
  }
  addClickListener(func) {
    this.elem.addEventListener("click", func);
  }
  turnOff() {
    this.elem.style.backgroundColor = "black"
  }
  goLeft() {
    var obj = { top: this.position.top, left: this.position.left - this.speed };
    this.setPosition(obj);
  }
  goUp() {
    this.setPosition({ top: this.position.top - this.speed, left: this.position.left })
  }
  goRight() {
    this.setPosition({ top: this.position.top, left: this.position.left + this.speed })
  }
  goDown() {
    this.setPosition({ top: this.position.top + this.speed, left: this.position.left })
  }
  setPosition(newPosition) {
    this.position = newPosition;
    this.elem.style.transform = "translate" + "(" + (newPosition.left - 50) + "px, " + (newPosition.top - 50) + "px" + ")";
  }
}