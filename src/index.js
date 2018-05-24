import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import './index.css';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

registerServiceWorker();
store.subscribe(render);
render();
