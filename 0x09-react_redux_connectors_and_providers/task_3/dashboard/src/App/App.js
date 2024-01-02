import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
// import App from '../App/App';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { user, AppContext } from './AppContext';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout
} from '../actions/uiActionCreators';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ]
    };

    this.handleCtrH = this.handleCtrH.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleCtrH, false);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleCtrH, false);
  }

  markNotificationAsRead (id) {
    const newList = this.state.listNotifications.filter(not => not.id !== id);
    this.setState({ listNotifications: newList });
  }

  handleCtrH (ev) {
    ev.preventDefault();
    // function to check the detection
    ev = ev || window.event; // Event object 'ev'
    // Detecting keyCode
    const key = ev.which || ev.keyCode;

    // Detecting Ctrl
    const ctrl = ev.ctrlKey
      ? ev.ctrlKey
      : (key === 17);

    // If key pressed is ctr and h is true.
    if (ctrl && key === 72) {
      alert('Logging you out');
      this.props.logout();
    }
  }

  render () {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logOut: this.props.logout
        }}
      >
        <>
          <div className={css(styles.rootNotifications)}>
            <Notifications
              listNotifications={this.state.listNotifications}
              displayDrawer={this.props.displayDrawer}
              handleDisplayDrawer={this.props.handleDisplayDrawer}
              handleHideDrawer={this.props.handleHideDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
          </div>
          <div className='App'>
            <div className={css(styles.AppHeader)}>
              <Header />
            </div>
            <div className={css(styles.AppBody)}>
              {this.state.user.isLoggedIn
                ? <BodySectionWithMarginBottom title='Course list'><App listCourses={listCourses} /></BodySectionWithMarginBottom>
                : <BodySectionWithMarginBottom title='Log in to continue'><Login logIn={this.props.logIn} /></BodySectionWithMarginBottom>}
              <BodySection title='News from the School'>
                <p>Hello School</p>
              </BodySection>
            </div>
            <div className={css(styles.AppFooter)}>
              <Footer />
            </div>
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  rootNotifications: {
    '@media only screen and (min-width: 900px)': {
      position: 'absolute',
      right: '2rem'
    }
  },

  AppHeader: {
    display: 'flex',
    color: '#d73953',
    borderBottom: '2px solid #d73953',
    alignItems: 'center',
    fontSize: 'larger',
    fontWeight: 'bolder'
  },

  AppBody: {
    padding: '1rem'
  },

  AppFooter: {
    borderTop: '2px solid #d73953',
    padding: '1rem',
    textAlign: 'center'
  }
});

export function mapStateToProps (state) {
  const newState = state.toJS();
  return {
    isLoggedIn: newState.isUserLoggedIn,
    displayDrawer: newState.isNotificationDrawerVisible
  };
}

export function mapDispatchToProps (dispatch) {
  return {
    handleDisplayDrawer: () => dispatch(displayNotificationDrawer()),
    handleHideDrawer: () => dispatch(hideNotificationDrawer()),
    logIn: (email, password) => dispatch(loginRequest(email, password)),
    logOut: () => dispatch(logout())
  };
}

// Assign Proptypes
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  logIn: PropTypes.func,
  logOut: PropTypes.func
};

// Set Default PropTypes
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  logIn: () => {},
  logOut: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
