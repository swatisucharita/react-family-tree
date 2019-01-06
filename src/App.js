import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FamilyTree from './components/familyTree';
import members from './family';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>My Family Tree</h3>
        <FamilyTree members={members}  />
      </div>
    );
  }
}

export default App;
