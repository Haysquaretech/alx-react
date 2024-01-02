import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { AppContext } from '../App/AppContext';

function Header () {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <img
        src={logo}
        className={css(styles.AppLogo)}
        alt='logo'
      />
      <h1>
        School dashboard
      </h1>
      {user.isLoggedIn &&
        <section id='logoutSection'>
          <h2>Welcome<strong> {user.email} </strong><em><a href='#' onClick={logOut}>(logout)</a></em>
          </h2>
        </section>}
    </>
  );
}

// styles
const styles = StyleSheet.create({
  AppLogo: {
    height: '40vmin',
    pointerEvents: 'none'
  }
});

export default Header;
