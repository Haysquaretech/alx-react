import { StyleSheet, css } from 'aphrodite';

function Login () {
  return (
    <>
      <p>Login to access the full dashboard</p>
      {/* Login Form */}
      <form>
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
            className={css(styles.formInput)}
          />
        </label>
        {/* Submit Button */}
        <button
          type='submit'
          className={css(styles.btnLogin)}
        >
          OK
        </button>
      </form>
    </>
  );
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
