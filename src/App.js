import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationForm from './component/applicationform';
import ContactForm from './component/contact';
import Application from './component/application';
import Applications from './component/applications';
import Demo from './component/demo';
import Login from './component/login';
import Message from './component/message';
import ThankYou from './component/thanks';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Grid, Nav , NavItem,NavDropdown, MenuItem , Navbar, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import Home from './home';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-393955.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  clientId: '0oacb7gbm63I0WhgS0h7'
}





// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

const About = () => (

  <div>
    <h2>About</h2>
    <p>{process.env.REACT_APP_DOMAIN}</p>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

// const Application = ({ match }) => (
//   <div>
//     <h2>Application</h2>
//     <ul>
//             <li>
//         <Link to={`${match.url}/all`}>
//           All
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/create`}>
//           New Application
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/update`}>
//           Update Existing Applicaton
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/delete`}>
//           Delete Application
//         </Link>
//       </li>
//     </ul>
//         <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const App = () => (


  <Router>
    <div className="container">
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Credit App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem ><Link to="/">Home</Link></NavItem>
            <NavDropdown eventKey={3} title="Application" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><Link to="/application/create">New Application</Link></MenuItem>
              <MenuItem eventKey={3.2}><Link to="/application/list">Existing Applications</Link></MenuItem>
              {/* <MenuItem eventKey={3.2}>Contact</MenuItem>
          <MenuItem eventKey={3.3}>Applications</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
            </NavDropdown>
            <NavItem ><Link to="/about">About</Link></NavItem>
            <NavItem ><Link to="/contact">Contact</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Tel</NavItem>
            <NavItem eventKey={2} href="#">Email</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/application/create" component={ApplicationForm} />
      <Route path="/application/list" component={Applications} />
      <Route path="/contact" component={ContactForm} />
      <Route path="/contactus/thankyou" component={ThankYou} />
      <Security issuer={config.issuer}
                  client_id={config.clientId}
                  redirect_uri={config.redirect_uri} >
          <Route path='/demo' exact={true} component={Demo}/>
          <Route path='/login' exact={true} component={Login}/>
          <Route path='/message' exact={true} component={Message}/>
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>

    </div>
  </Router>
)

export default App;
