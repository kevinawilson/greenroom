import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const render = () => {
  ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root'));
};

registerServiceWorker();
render();
