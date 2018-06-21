import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App.js';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import {Provider} from 'react-redux';
import './index.css';

const render = () => {
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>,
    document.getElementById('root'));
};

store.subscribe(render);
registerServiceWorker();
render();
