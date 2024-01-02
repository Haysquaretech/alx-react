import { StyleSheet, css } from 'aphrodite';

function Login () {
  return (
    <>
      <p>Login to access the full dashboard</p>
      {/* Login Form */}
      <form>
        {/* Email Feild */}
        <label htmlFor='email'>Email</label> &nbsp;
        <input
          type='email'
          id='email'
          name='email'
          autoComplete='email'
          className={css(styles.formInput)}
        />
        {/* Password Feild */}
        <label htmlFor='password'>Password</label> &nbsp;
        <input
          type='password'
          id='password'
          name='password'
          autoComplete='current-password'
          className={css(styles.formInput)}
        />
        {/* Submit Button */}
        <button type='submit' className='btn-login'>OK</button>
      </form>
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  formInput: {
    marginRight: '1rem'
  }
});

export default Login;
