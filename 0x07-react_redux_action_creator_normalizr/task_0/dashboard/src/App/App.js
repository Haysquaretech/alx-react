import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { user, AppContext } from './AppContext';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ]
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleCtrH = this.handleCtrH.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleCtrH, false);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleCtrH, false);
  }

  handleDisplayDrawer () {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer () {
    this.setState({
      displayDrawer: false
    });
  }

  logIn (email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  logOut () {
    this.setState({
      user: user
    });
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
      this.logOut();
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
          logOut: this.state.logOut
        }}
      >
        <>
          <div className={css(styles.rootNotifications)}>
            <Notifications
              listNotifications={this.state.listNotifications}
              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
          </div>
          <div className='App'>
            <div className={css(styles.AppHeader)}>
              <Header />
            </div>
            <div className={css(styles.AppBody)}>
              {this.state.user.isLoggedIn
                ? <BodySectionWithMarginBottom title='Course list'><CourseList listCourses={listCourses} /></BodySectionWithMarginBottom>
                : <BodySectionWithMarginBottom title='Log in to continue'><Login logIn={this.logIn} /></BodySectionWithMarginBottom>}
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

export default App;
