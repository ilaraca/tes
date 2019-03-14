import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography  } from '@material-ui/core';

const styles = {

  card: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
      <Fragment>
      <Grid container>
      <Grid item sm>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item sm>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day bla
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item sm>
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
</Fragment>
  );
}

export default withStyles(styles)(SimpleCard);
