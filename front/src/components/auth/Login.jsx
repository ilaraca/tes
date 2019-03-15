// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, FormSpy } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Redirect } from 'react-router-dom';
import withRoot from '../../withRoot.jsx';
import Typography from '../Typography.jsx';
import AppFooter from '../../views/AppFooter.jsx';
import AppAppBar from '../../views/AppAppBar.jsx';
import AppForm from '../../views/AppForm.jsx';
// import { email, required } from './form/validation';
import RFTextField from '../../form/RFTextField.jsx';
import FormButton from '../../form/FormButton.jsx';
import FormFeedback from '../../form/FormFeedback.jsx';
import compose from '../../utils/compose.jsx';
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', redirect: '' };
    this.service = new AuthService();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const username = event.username;
    const password = event.password;
    this.service.login(username, password)
      .then((response) => {
        this.setState({ username, password, redirect: <Redirect to="/" /> });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { classes } = this.props;
    const { sent } = this.state;

    return (
      <React.Fragment>
        {this.state.redirect}
        <AppAppBar />
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Entre aqui
            </Typography>
            <Typography variant="body2" align="center">
              {'Não é membro ainda? '}
              <Link href="/signup" align="center" underline="always">
                Cadastre-se aqui
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
                  autoComplete="email"
                  autoFocus
                  component={RFTextField}
                  disabled={submitting || sent}
                  fullWidth
                  label="username"
                  margin="normal"
                  name="username"
                  required
                  size="large"
                />
                <Field
                  fullWidth
                  size="large"
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
                  size="large"
                  color="primary"
                  fullWidth
                >
                  {submitting || sent ? 'In progress…' : 'Entre'}
                </FormButton>
              </form>
            )}
          </Form>
          <Typography align="center">
            <Link underline="always" href="/forgotpassword">
              Esqueceu a senha?
            </Link>
          </Typography>
        </AppForm>
        <AppFooter />
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withRoot,
  withStyles(styles),
)(Login);
