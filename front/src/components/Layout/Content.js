import React, { Fragment } from 'react';
//import '../App.css';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';

// const styles = theme => ({

// mainFeaturedPostContent: {
//         padding: `${theme.spacing.unit * 6}px`,
//         [theme.breakpoints.up('md')]: {
//           paddingRight: 0,
//         }
// })

function content(props){
    //const { classes } = props;

    return (
        <Fragment>
            <Grid container>
              <Grid item md={6}>
                <div>
                  <Typography component="h1" variant="h3" color="inherit">
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents…
                  </Typography>
                </div>
              </Grid>
            </Grid>
        </Fragment>
    )
} 

export default (content);