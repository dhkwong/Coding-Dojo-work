import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const clock = React.createClass({
	
})
const event = new Date().toLocaleTimeString('en-US');


const myDate = React.createElement('button', null, event);
console.log(JSON.stringify(myDate));

ReactDOM.render(myDate, document.getElementById('clock'));
// serviceWorker.register();

