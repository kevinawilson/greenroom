import React, {Component} from 'react';
import store from './store.js';
//import {AddRoleForm} from './Components.js';
import {UserRolesListContainer, AddRoleFormContainer} from './Containers.js';
import './App.css';

class App extends Component {

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Green Room</h1>
      </header>
      <h2>{store.getState().user.name}</h2>
      <UserRolesListContainer />
      <AddRoleFormContainer />
    </div>);
  };
};

export default App;
