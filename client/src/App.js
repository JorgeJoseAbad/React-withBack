import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListProjectLoader } from './components/project/ListProjectLoader';
import { SingleProjectLoader} from './components/project/SingleProjectLoader.js';
import { ProyectCreate} from './components/project/ProyectCreate.js'

import axios from 'axios';


class App extends Component {

  handleSubmit = form => {
    console.log("ejecutado handle",form);
    axios.post(`http://localhost:3000/api/projects/`, form)
        .then( (res) => {
               console.log(res);
            })
        }

  render() {
    return (
      <div className="App">
        <ListProjectLoader />
        <ProyectCreate handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
