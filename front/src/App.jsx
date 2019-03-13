import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import Settings from './components/user/Settings.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import AuthService from './components/auth/auth-service.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    });
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then((response) => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch((_err) => {
          console.log(_err);
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  render() {
    return (
      <div>
        <NavBar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
        <Switch>
          <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser} />} />
          <Route exact path="/login" render={() => <Login getUser={this.getTheUser} />} />
          <Route exact path="/settings" render={() => <Settings />} />
        </Switch>
      </div>
    );
    // }
  }
}

export default App;
