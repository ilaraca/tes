import React, { Component, Fragment } from 'react';
import { 
 Button, 
 TextField,
 Dialog, 
 DialogActions, 
 DialogContent, 
 DialogTitle,
 Link,
 withStyles 
}
 from '@material-ui/core';
 
export default class extends Component {
     constructor(props) {
       super(props);
       this.state = {
         open: false,
       };
     }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    return (
      <Fragment>
        <Link
       component="button"
       variant="headline"
       color='#ffffff'
       onClick={this.handleClickOpen}
       classes={{button:'btn-margin-right'}}
     >
       Criar Conta
     </Link>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          padding='10'
        >
          <DialogTitle id="form-dialog-title">Signup</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="senha"
              label="Senha"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cadastrar
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}