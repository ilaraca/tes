
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Field, Form, FormSpy } from 'react-final-form';
import compose from '../../utils/compose.jsx';
import withRoot from '../../withRoot.jsx';
import Typography from '../Typography.jsx';
import AppFooter from '../../views/AppFooter.jsx';
import AppAppBar from '../../views/AppAppBar.jsx';
import AppForm from '../../views/AppForm.jsx';
// import { email, required } from './modules/form/validation';
import RFTextField from '../../form/RFTextField.jsx';
import FormButton from '../../form/FormButton.jsx';
import FormFeedback from '../../form/FormFeedback.jsx';
import AuthService from '../services/auth-service.jsx';

const styles = theme => ({
  form: {
    marginTop: theme.spacing.unit * 6
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  },
  feedback: {
    marginTop: theme.spacing.unit * 2
  }
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      sent: false
    };
    this.service = new AuthService();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const username = this.event.username;
    const password = this.event.password;
    const email = this.event.email;

    this.service.signup(username, password, email)
      .then((response) => {
        this.setState({
          username: '',
          password: '',
          email: ''
        });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { classes } = this.props;
    const { sent } = this.state;

    return (
      <React.Fragment>
        <AppAppBar />
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Sign Up
            </Typography>
            <Typography variant="body2" align="center">
              <Link href="/login" underline="always">
                Já tem uma conta?
              </Link>
            </Typography>
          </React.Fragment>
          <Form
            onSubmit={this.handleSubmit}
            subscription={{ submitting: true }}
            validate={this.validate}
          >
            {({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Field
                  autoFocus
                  component={RFTextField}
                  autoComplete="fname"
                  fullWidth
                  label="Nome Completo"
                  name="username"
                  required
                />
                <Field
                  autoComplete="email"
                  component={RFTextField}
                  disabled={submitting || sent}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                />
                <Field
                  fullWidth
                  component={RFTextField}
                  disabled={submitting || sent}
                  required
                  name="password"
                  autoComplete="current-password"
                  label="Senha"
                  type="password"
                  margin="normal"
                />
                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) => (submitError ? (
                    <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                  ) : null)
                  }
                </FormSpy>
                <FormButton
                  className={classes.button}
                  disabled={submitting || sent}
                  color="secondary"
                  fullWidth
                >
                  {submitting || sent ? 'In progress…' : 'Sign Up'}
                </FormButton>
              </form>
            )}
          </Form>
        </AppForm>
        <AppFooter />
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withRoot,
  withStyles(styles),
)(SignUp);
