import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '../components/Button.jsx';
import Typography from '../components/Typography.jsx';
import ProductHeroLayout from './ProductHeroLayout.jsx';

const backgroundImage =
  'http://1.bp.blogspot.com/-XzxXrGopq9Y/UqSzqFBT2oI/AAAAAAAADmA/XLZQHpN60tw/s1600/eureques-consumo-colaborativo.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10
    },
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Pense sem dinheiro, pense colaborativo
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Não gaste seu dinheiro, troque seus produtos e/ou serviços
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={linkProps => (
          <Link {...linkProps} href="/signup" variant="button" />
        )}
      >
        Cadastre-se
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Descubra essa experiência
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
