import React from 'react';
import { Link } from 'react-router-dom';
import  { withAuth } from '../okta-react';
// Load the Sign-In Widget module
import OktaSignIn from '@okta/okta-signin-widget';

// Use OktaSignIn
let signIn = new OktaSignIn({baseUrl: `${process.env.REACT_APP_OKLA_DOMAIN}`});
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }
  
  render(){

    if (this.state.authenticated === null) return null;
    return (
      <div>
        <p>Form</p>
        <label>Username</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button className="btn-lg btn-primary" onClick={this.props.auth.login}>Login</button>
      </div>
    );
  }
}

export default withAuth(Login);
