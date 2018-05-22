import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { sampleData } from './sampleData.js';
// import uuid from 'uuid/v1';
import { UserRole, AddButton } from './Components.js';

class App extends Component {

  render() {
    function addNewShow(newShow) {
      sampleData.user.productions.push(newShow);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Green Room</h1>
        </header>
        <h2>{sampleData.user.name}</h2>
        <UserRole roles={sampleData.user.productions} />
        <AddButton roles={sampleData.user.productions} callback={addNewShow} />
      </div>
    );
  }
}

export default App;
