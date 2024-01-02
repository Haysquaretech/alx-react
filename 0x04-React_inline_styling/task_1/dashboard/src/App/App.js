import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleCtrH = this.handleCtrH.bind(this);
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleCtrH, false);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleCtrH, false);
  }

  handleCtrH (ev) {
    ev.preventDefault();
    const props = this.props;
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
      props.logOut();
    }
  }

  render () {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <>
        <div className={css(styles.rootNotifications)}>
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className='App'>
          <div className={css(styles.AppHeader)}>
            <Header />
          </div>
          <div className={css(styles.AppBody)}>
            {this.props.isLoggedIn
              ? <BodySectionWithMarginBottom title='Course list'><CourseList listCourses={listCourses} /></BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title='Log in to continue'><Login /></BodySectionWithMarginBottom>}
            <BodySection title='News from the School'>
              <p>Hello School</p>
            </BodySection>
          </div>
          <div className={css(styles.AppFooter)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

// Assign Prop Types
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

// Default Prop Values
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

// Styles
const styles = StyleSheet.create({
  rootNotifications: {
    position: 'absolute',
    right: '2rem'
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
