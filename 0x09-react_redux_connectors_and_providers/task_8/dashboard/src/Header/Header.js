import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';
import logo from '../assets/holberton-logo.jpg';

function Header ({ user, logOut }) {
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
          <h2>
            Welcome<strong> {user.email} </strong>
            <em><a href='#' onClick={() => logOut}>(logout)</a></em>
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

export function mapStateToProps (state) {
  const ui = state.uiReducer.toJS();
  return {
    user: ui.user
  };
}

export function mapDispatchToProps (dispatch) {
  return {
    logOut: () => dispatch(logout())
  };
}

// Assign Proptypes
Header.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func
};

// Set Default PropTypes
Header.defaultProps = {
  user: {},
  logOut: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
