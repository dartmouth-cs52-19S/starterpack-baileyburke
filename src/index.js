import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));


// change require to es6 import style
// import './style.scss';
// import $ from 'jquery';

// let seconds = 0;

// setInterval(() => {
//   $('#main').html(`You've been on this page for ${seconds} seconds`);
//   seconds += 1;
// }, 1000);
