import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContainerApp from './AppContainer';
import * as serviceWorker from './serviceWorker';
import sal from 'sal.js';
import jump from 'jump.js';

ReactDOM.render(<ContainerApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
sal();
if (window.matchMedia("(max-width: 1024px)").matches) {
	const scrollAnimations = sal();
	scrollAnimations.disable();
}
