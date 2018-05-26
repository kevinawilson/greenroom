import React, {Component} from 'react';
import store from '../store.js';
import {UserRolesListContainer, AddRoleFormContainer, ShowAddRoleFormButtonContainer} from '../utils/containers.js';
import '../App.css';

class App extends Component {

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Green Room</h1>
      </header>
      <div className="user-container">
        <h2>{store.getState().user.name}</h2>
        <UserRolesListContainer />
        {store.getState().ui.showAddRoleForm ? <AddRoleFormContainer /> : <ShowAddRoleFormButtonContainer />}
      </div>
    </div>);
  };
};

export default App;
