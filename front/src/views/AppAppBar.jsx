<<<<<<< HEAD
import React, { Component } from 'react';
import PropTypes from 'prop-types';
=======
import React from 'react';
>>>>>>> 815ac5fec76119421d4de9115a9b937a395b0539
import clsx from 'clsx';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Link, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '../components/AppBar.jsx';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar.jsx';
import AuthService from '../components/services/auth-service.jsx';

const spacing = 15;

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: spacing
  },
  linkSecondary: {
    color: theme.palette.common.white
  },
  btnHover: {
    '&:hover': {
      color: 'grey',
      textDecoration: 'none'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 600,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 350
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    }
  }
});

class AppAppBar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null }
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }

  render(){
    const { classes } = this.props;    
    if(this.state.loggedInUser) {
      return (
        <div>
          <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
              <div className={classes.left} />
              <Link
                className={clsx(classes.title, classes.btnHover)}
                variant="h6"
                color="inherit"
                href="/"
              >
                {'T & S - Things e Services'}
                </Link>
                <div className={classes.search}>
                  <div className={clsx(classes.searchIcon, classes.btnHover)}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              <div className={classes.right}>
               <h1>Olá, {this.state.loggedInUser.username}</h1>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  className={classes.rightLink}
                  href="/products"
                >
                  {'Lista de Produtos'}
                </Link>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  className={classes.rightLink}
                  href="/login"
                >
                  {'Entre'}
                </Link>
                <Link
                  variant="h6"
                  className={clsx(classes.rightLink, classes.linkSecondary, classes.btnHover)}
                  href="/signup"
                >
                  {'Cadastre-se'}
                </Link>
              </div>
            </Toolbar>
          </AppBar>
          <div className={classes.placeholder} />
        </div>
      );
    } else {
      return (
        <div>
          <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
              <div className={classes.left} />
              <Link
                className={clsx(classes.title, classes.btnHover)}
                variant="h6"
                color="inherit"
                href="/"
              >
                {'T & S - Things e Services'}
                </Link>
                <div className={classes.search}>
                  <div className={clsx(classes.searchIcon, classes.btnHover)}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              <div className={classes.right}>
              {/* <h1>Olá, Ilara</h1> */}
              <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  className={classes.rightLink}
                  href="/products"
                >
                  {'Lista de Produtos'}
                </Link>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  className={classes.rightLink}
                  href="/login"
                >
                  {'Entre'}
                </Link>
                <Link
                  variant="h6"
                  className={clsx(classes.rightLink, classes.linkSecondary, classes.btnHover)}
                  href="/signup"
                >
                  {'Cadastre-se'}
                </Link>
              </div>
            </Toolbar>
          </AppBar>
          <div className={classes.placeholder} />
        </div>
      );
    }
  }
}

export default withStyles(styles)(AppAppBar);
