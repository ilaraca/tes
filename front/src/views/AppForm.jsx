import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from '../components/LayoutBody.jsx';
import Paper from '../components/Paper.jsx';

// const paddin =
const styles = theme => ({
  root: {
    display: 'flex',
    // backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
    backgroundRepeat: 'no-repeat',
  },
  paper: {
    padding: theme.spacing.unit * 4, // * 3
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 10 //* 8
    },
  },
});

function AppForm(props) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <LayoutBody margin marginBottom width="small">
        <Paper className={classes.paper}>{children}</Paper>
      </LayoutBody>
    </div>
  );
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);
