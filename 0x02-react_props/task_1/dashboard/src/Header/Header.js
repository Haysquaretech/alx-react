import './Header.css';

import logo from '../assets/holberton-logo.jpg';

function Header () {
  return (
    <>
      <img
        src={logo}
        className='App-logo'
        alt='logo'
      />
      <h1>
        School dashboard
      </h1>
    </>
  );
}

export default Header;
