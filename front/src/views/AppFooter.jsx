import React from 'react';
import PropTypes from 'prop-types';
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
    backgroundColor: theme.palette.tercentenary.grey,
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: 'flex'
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.palette.warning.main,
    // marginRight: theme.spacing(1),
    // '&:hover': {
    //   backgroundColor: theme.palette.warning.dark,
    // },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5
  },
  language: {
    marginTop: theme.spacing.unit * 1,
    width: 150
  },
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid item xs={12}>Criado por Ilara Almeida e Cristiana Yasuda © 2019 </Grid>
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
