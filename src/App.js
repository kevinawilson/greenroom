import React, {Component} from 'react';
import store from './store.js';
import {UserRole, AddButton} from './Components.js';
import './App.css';

class App extends Component {

  actionProxy(action) {
    console.log(action);
    store.dispatch(action);
  };

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Green Room</h1>
      </header>
      <h2>{store.getState().user.name}</h2>
      <UserRole roles={store.getState().productions}/>
      <AddButton onClick={this.actionProxy}  />
    </div>);
  };
};

export default App;
