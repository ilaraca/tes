import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth-service.jsx';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.service = new AuthService();
  }


  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;

    this.service.signup(username, password, email)
      .then((response) => {
        this.setState({
          username: '',
          password: '',
          email: ''
        });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <label>E-mail:</label>
          <input name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Signup" />
        </form>

        <p>
Already have account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    );
  }
}

export default Signup;
