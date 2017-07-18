import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Grid, Nav , NavItem,NavDropdown, MenuItem , Navbar, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import Home from './home';
require('dotenv').config()




// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Application = ({ match }) => (
  <div>
    <h2>Application</h2>
    <ul>
            <li>
        <Link to={`${match.url}/all`}>
          All
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/create`}>
          New Application
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/update`}>
          Update Existing Applicaton
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/delete`}>
          Delete Application
        </Link>
      </li>
    </ul>
        <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const App = () => (


  <Router>
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">CreditApp</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home </Link><span className="sr-only">(current)</span></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/application">Application</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/application" component={Application} />
    </div>
  </Router>
)


export default App;
