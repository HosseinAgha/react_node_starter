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
    this.speed = 50;
    parent.appendChild(ball);
  }
  goLeft() {
    this._changePosition({ top: this.position.top, left: this.position.left - this.speed })
  }
  goUp() {
    this._changePosition({ top: this.position.top - this.speed, left: this.position.left })
  }
  goRight() {
    this._changePosition({ top: this.position.top, left: this.position.left + this.speed })
  }
  goDown() {
    this._changePosition({ top: this.position.top + this.speed, left: this.position.left })
  }
  _changePosition(newPosition) {
    this.position = newPosition;
    this.elem.style.transform = "translate(" + newPosition.left + "px, " + newPosition.top + "px" + ")";
  }
}