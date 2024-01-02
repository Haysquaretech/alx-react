import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

function Header () {
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
