import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const myButton = React.createElement('button', null, 'Click Me');
	console.log(JSON.stringify(myButton));
	/*
		Prints the following:
		{
		"type":"button",
		"key":null,
		"ref":null,
		"props": {
		"children":"Click Me!"
		},
		"_owner":null,
		"_store":{}
		}
	*/
	ReactDOM.render(myButton, document.getElementById('app'));
serviceWorker.register();
