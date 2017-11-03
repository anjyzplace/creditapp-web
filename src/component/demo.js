
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../okta-react';

export default withAuth(class Demo extends Component {
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

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <button className="btn-lg btn-primary" onClick={this.props.auth.logout}>Logout</button> :
      <button className="btn-lg btn-primary" onClick={this.props.auth.login}>Login</button>;
  }
});