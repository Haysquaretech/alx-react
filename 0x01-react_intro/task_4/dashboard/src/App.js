import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App () {
  const year = getFullYear();
  const footerCopyTxt = getFooterCopy(true);
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          School dashboard
        </h1>
      </div>
      <div className='App-body'>
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
      </div>
      <div className='App-footer'>
        <p>Copyright {year} - {footerCopyTxt}</p>
      </div>
    </div>
  );
}

export default App;
