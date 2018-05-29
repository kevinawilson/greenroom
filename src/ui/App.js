import React, {Component} from 'react';
import store from '../store.js';
import {
  RolesViewContainer,
  NavBarContainer,
  CompaniesViewContainer
} from '../utils/containers.js';
import '../App.css';

class App extends Component {

  selectView = function () {
    switch (store.getState().ui.currentView) {
      case "user":
        return <RolesViewContainer />;
      case "companies":
        return <CompaniesViewContainer />
      case "productions":
        return <p>Productions</p>
      case "shows":
        return <p>Shows</p>
      default:
        return null;
    }
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Green Room</h1>
      </header>
      <NavBarContainer />
      {this.selectView()}
    </div>);
  };
};

export default App;
