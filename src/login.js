import React, { Component } from 'react';
import './App.css';
import './login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      navigate: false,
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ navigate: true,error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    if (this.state.navigate) 
    {
      return <Redirect to={"/withdraw_fund"} />
    }
    return (
      <div className="login">
        <form action="post" onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <p data-test="error"  onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
               <p className="login_input">{this.state.error}</p>
            </p>
          }
          <label className="login_input">User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label className="login_input">Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" className="btn btn-primary btn-block btn-large" value="Log In" data-test="submit" />
        </form>
      </div>
      
    );
  }
}

export default Login;