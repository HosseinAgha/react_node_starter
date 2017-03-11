// import a1 from './aleik.js';
import Ball from './Ball.js'

var b1 = new Ball(document.body);

document.addEventListener("keydown", function(event){
  switch(event.keyCode) {
    case 37: b1.goLeft(); break; 
    case 38: b1.goUp(); break; 
    case 39: b1.goRight(); break; 
    case 40: b1.goDown(); break; 
  }
});

// import React from 'react'; // ES6 - ES5
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import App from './App';

// class Hello extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   render() {
//     return <div onClick={this.onClick}>salam2121</div>;
//   }
//   onClick() {
//     console.log("salam2")
//   }
// }

// const rootEl = document.getElementById('root');
// ReactDOM.render(
//   <Hello />,
//   rootEl
// );


// const render = (Component) =>
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     rootEl
//   );

// render(App);
// if (module.hot) module.hot.accept('./App', () => render(App));
