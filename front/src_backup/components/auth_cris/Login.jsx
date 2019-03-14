import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import AuthService from './auth-service.jsx';
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
         username: '',
         password: '',
         open: false,
       };
       this.service = new AuthService();
     }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
      .then((response) => {
        this.setState({ username: '', password: '' });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  }


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
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
        <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); } }>
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
              value={this.state.name}
               onChange={this.handleChange('name')}
            />
            <TextField
              // autoFocus
              margin="dense"
              id="password"
              label="Senha"
              type="password"
              fullWidth
              value={this.state.passaword}
              onChange={this.handleChange('password')}
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
          </form>
        </Dialog>
      </Fragment>
    );
  }
}