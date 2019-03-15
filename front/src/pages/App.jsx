import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot.jsx';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/auth/Login.jsx'
import Home from '../components/layout/Home.jsx';
import ProductList from '../components/products/ProductList.jsx';
import ProductDetails from '../components/products/ProductDetail.jsx';
import EditProduct from '../components/products/EditProduct.jsx';
import AddProduct from '../components/products/AddProduct.jsx';
import Signup from '../components/auth/Signup.jsx';

import AuthService from '../components/services/auth-service.jsx';
import ProtectedRoute from '../components/auth/protected-route.jsx';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loogedInUser: null,
      open: false,
    };
  }


  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    this.fetchUser()
    if (this.state.loogedInUser){
      return (
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <ProtectedRoute user={this.state.loggedInUser}  exact path="/products" component={ProductList} />
            <ProtectedRoute user={this.state.loggedInUser} path="/products/add" component={AddProduct} /> 
            <ProtectedRoute user={this.state.loggedInUser} path="/products/detail/:id" component={ProductDetails} /> 
            <ProtectedRoute user={this.state.loggedInUser} path="/products/edit/:id" component={EditProduct} /> 
          </Switch>/
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            
            {/* tirar daqui quando o fetchUser estiver funcionando */}
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/add" component={AddProduct} /> 
            <Route path="/products/detail/:id" component={ProductDetails} /> 
            <Route path="/products/edit/:id" component={EditProduct} /> 




            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/signup" render={() => <Signup />} />
          </Switch>
        </React.Fragment>
      )
    }
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
