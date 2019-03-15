import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot.jsx';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login.jsx'
import Settings from './Settings.jsx'
import Home from '../components/layout/Home.jsx';
import ProductList from '../components/products/ProductList.jsx';
import ProductDetails from '../components/products/ProductDetail.jsx';
import EditProduct from '../components/products/EditProduct.jsx';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

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
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/products" render={() => <ProductList />} />
          <Route path="/products/detail/:id" component={ProductDetails} /> 
          <Route path="/products/edit/:id" component={EditProduct} /> 
        </Switch>/
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
