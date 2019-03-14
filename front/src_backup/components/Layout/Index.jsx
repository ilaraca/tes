import React, { Fragment } from 'react';
import { 
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons'; 
import { withStyles } from '@material-ui/core/styles';
import Form from '../Form.jsx'

const style = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
  }  
});

export default withStyles(style)(
  ({
    classes,
    muscles,
    exercises,
    category,
    editMode,
    onSelect,
    exercise,
    exercise: {
      id,
      title = 'Welcome!',
      description = 'Please select an exercise from the list om the left.'},
      onDelete,
      onSelectEdit,
      onEdit
  }) =>
  <Grid container>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
           ? <Fragment key={group}>
           <Typography 
           color='secondary'
           variant='headline'
           style={{textTransform: 'capitalize'}}
           >
             {group}
           </Typography>
           <List component="ul">
             {exercises.map(({ id,title }) =>
               <ListItem 
               key={id}
               button
               onClick={() => onSelect(id)}
               >
               <ListItemText primary={title}/>
               <ListItemSecondaryAction>
               <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                    <Edit />
                  </IconButton>
                  <IconButton color='primary' onClick={() => onDelete(id)}>
                    <Delete />
                  </IconButton>
               </ListItemSecondaryAction>
              </ListItem>
             )}
           </List>
         </Fragment>
           : null
        )}
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
      <Typography 
         variant='display1'
         gutterBottom
         color='secondary'
         >
            { title }
        </Typography>
      {editMode
    ? <Form
        key={id}
        exercise={exercise}
        muscles={muscles}
        onSubmit={onEdit}
    />
    :<Fragment>
        <Typography 
        variant='subheading' 
        >
            { description }
        </Typography>
    </Fragment>
        }
        </Paper>
    </Grid>
  </Grid>
)