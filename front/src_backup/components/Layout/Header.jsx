import React from 'react';
// import axios from 'axios';
import { AppBar, Tab, Toolbar, Typography } from '@material-ui/core';
import Login from '../auth/Login.jsx';
import Signup from '../auth/Signup.jsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  flex: {
    flex: 1
  }
};

export default withStyles(styles)(({ classes }) => 
    <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="primary" className={classes.flex}>
            
      </Typography>
    <Signup/>
    <Login />
      </Toolbar>
  </AppBar>
)