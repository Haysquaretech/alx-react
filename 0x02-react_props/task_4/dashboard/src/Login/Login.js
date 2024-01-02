import './Login.css';

function Login () {
  return (
    <>
      <p>Login to access the full dashboard</p>
      {/* Login Form */}
      <form>
        {/* Email Feild */}
        <label htmlFor='email'>Email</label> &nbsp;
        <input type='email' id='email' name='email' />
        &nbsp;
        {/* Password Feild */}
        <label htmlFor='password'>Password</label> &nbsp;
        <input type='password' id='password' name='password' />
        {/* Submit Button */}
        &nbsp;
        <button type='submit' className='btn-login'>OK</button>
      </form>
    </>
  );
}

export default Login;
