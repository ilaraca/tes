import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { Link, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '../components/AppBar.jsx';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar.jsx';

const spacing = 3;

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
      width: 'auto'
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

function AppAppBar(props) {
  const { classes } = props;

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
            <Link
              color="inherit"
              variant="h6"
              className={clsx(classes.rightLink, classes.btnHover)}
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

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
