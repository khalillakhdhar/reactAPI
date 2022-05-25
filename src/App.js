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
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={'/'} className="nav-link">
                Home
              </Link>
            </Navbar.Brand>

            
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={(props) => <Main {...props} />}
                />
                <Route
                  exact
                  path="/create-student"
                  component={(props) => <CreateStudent {...props} />}
                />
                <Route
                  exact
                  path="/edit-student/:id"
                  component={(props) => <EditStudent {...props} />}
                />
                <Route
                  exact
                  path="/student-list"
                  component={(props) => <StudentList {...props} />}
                />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  </div>
  )
}

export default App