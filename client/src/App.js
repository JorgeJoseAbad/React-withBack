import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListProjectLoader } from './components/project/ListProjectLoader';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ListProjectLoader />
      </div>
    );
  }
}

export default App;
