import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';


import Main from './components/Main';
class App extends Component {
  render() {
    return (
      <Router>
        
        <div>
          <switch>
          <Route exact path='/' component={Main} />
          
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;