import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot.jsx';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login.jsx'
import Home from '../components/layout/Home.jsx';

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
        </Switch>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
