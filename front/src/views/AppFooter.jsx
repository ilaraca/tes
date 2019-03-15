import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Typography from '../components/Typography.jsx';
// import TextField from '../components/TextField';
import LayoutBody from '../components/LayoutBody.jsx';
import compose from '../utils/compose.jsx';

const styles = theme => ({
  root: {
    display: 'flex',
    color: grey
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
    textAlign: 'center'
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: 'flex'
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5
  },
  language: {
    marginTop: theme.spacing.unit * 1,
    width: 150
  }
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid item xs={6}>Criado por Ilara Almeida e Cristiana Yasuda © 2019 </Grid>
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  React.memo,
  withStyles(styles),
)(AppFooter);
