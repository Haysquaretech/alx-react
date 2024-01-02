import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit (event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail (event) {
    this.setState({ email: event.target.value });
    // Verify that both fields are not empty
    if (this.state.email !== '' && this.state.password !== '') {
      this.setState({ enableSubmit: true });
    } else {
      if (this.state.enableSubmit !== false) {
        this.setState({ enableSubmit: false });
      }
    }
  }

  handleChangePassword (event) {
    this.setState({ password: event.target.value });
    // Verify that both fields are not empty
    if (this.state.email !== '' && this.state.password !== '') {
      this.setState({ enableSubmit: true });
    } else {
      if (this.state.enableSubmit !== false) {
        this.setState({ enableSubmit: false });
      }
    }
  }

  render () {
    return (
      <>
        <p>Login to access the full dashboard</p>
        {/* Login Form */}
        <form onSubmit={this.handleLoginSubmit}>
          {/* Email Feild */}
          <label
            className={css(styles.labels)}
            htmlFor='email'
          >
            Email:
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='email'
              value={this.state.email}
              onChange={this.handleChangeEmail}
              className={css(styles.formInput)}
            />
          </label>
          {/* Password Feild */}
          <label
            className={css(styles.labels)}
            htmlFor='password'
          >
            Password:
            <input
              type='password'
              id='password'
              name='password'
              autoComplete='current-password'
              value={this.state.password}
              onChange={this.handleChangePassword}
              className={css(styles.formInput)}
            />
          </label>
          {/* Submit Button */}
          <input
            type='submit'
            className={css(styles.btnLogin)}
            value='OK'
            disabled={!this.state.enableSubmit}
          />
          {/* <button
            type='submit'
          >
            OK
          </button> */}
        </form>
      </>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  labels: {
    '@media only screen and (max-width: 900px)': {
      display: 'block'
    }
  },

  formInput: {
    margin: '0 1rem'
  },

  btnLogin: {
    background: 'inherit',
    outline: 'none',
    border: '2px solid yellow',
    padding: '5'
  }
});

export default Login;
