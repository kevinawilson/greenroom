import React, {Component} from 'react';
import {store} from './store.js';
import {UserRole, AddButton} from './Components.js';
import C from './constants.js';
import './App.css';

class App extends Component {

  actionProxy = function (action) {
    store.dispatch(action);
    console.log(store.getState());
  };

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Green Room</h1>
      </header>
      <h2>{store.getState().user.name}</h2>
      <UserRole roles={store.getState().productions}/>
      <AddButton roles={store.getState().productions} onClick={this.actionProxy} />
    </div>);
  };
};

export default App;
