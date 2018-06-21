import React, {Component} from 'react';
import store from '../store.js';
import {
  RolesViewContainer,
  NavBarContainer,
  CompaniesViewContainer
} from '../utils/containers.js';
import '../App.css';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class App extends Component {

  selectView = () => {
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
    };
  };

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
