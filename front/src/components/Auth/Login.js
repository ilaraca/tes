import React, { Component, Fragment } from 'react';
import { 
 Button, 
 TextField,
 Dialog, 
 DialogActions, 
 DialogContent, 
 DialogContentText, 
 DialogTitle,
 Link 
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
     >
       Login
     </Link>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Por favor digite usuário (email cadastrado) e senha.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Usuário"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
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
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}