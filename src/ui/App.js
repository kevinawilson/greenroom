import React, {Component} from 'react';
import NavBar from '../ui/NavBar.js';
import RolesView from '../ui/RolesView.js';
import store from '../store.js';
import '../App.css';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: "user"
    }
  };

  selectView = () => {
    switch (this.state.currentView) {
      case "user":
        return <RolesView />;
      case "companies":
        return <p>Companies</p>
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
      <NavBar onClick={(view) => this.setState({"currentView": view})}/>
      {this.selectView()}
    </div>);
  };
};

export default App;
