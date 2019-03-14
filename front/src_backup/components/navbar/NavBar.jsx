// navbar/Navbar.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps.userInSession });
  }

  logoutUser() {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      });
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              Welcome,
              {' '}
              {this.state.loggedInUser.username}
            </li>
            <li><Link to="/settings" style={{ textDecoration: 'none' }}>User Settigns</Link></li>
            <li>
              <Link to="/">
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
    return (
      <nav>
        <ul>
          <li><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></li>
          <li><Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
