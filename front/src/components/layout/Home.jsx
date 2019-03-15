import React from 'react';
import ProductHero from '../../views/ProductHero.jsx';
import ProductHowItWorks from '../../views/ProductHowItWorks.jsx';
import AppFooter from '../../views/AppFooter.jsx';
import AppAppBar from '../../views/AppAppBar.jsx';
import AuthService from '../services/auth-service.jsx';
import '../../css/style.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
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
        <React.Fragment>
          <AppAppBar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <ProductHero />
          <ProductHowItWorks />
          <AppFooter />
        </React.Fragment>
      </div>
    );
  }
}

export default Home;
