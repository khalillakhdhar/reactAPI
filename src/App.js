import React from 'react'
import './App.css'
import Nav from './components/layout/Nav';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/list-student.component'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>

                <Switch>
                <Route path="/" element={<Main/>}>
                  </Route>
                  
                </Switch>
      </Router>
    </div>
  )
}

export default App