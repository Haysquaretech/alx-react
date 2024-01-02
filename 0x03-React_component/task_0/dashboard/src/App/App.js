import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: '<strong>Urgent requirement</strong> - complete by EOD' }
  ];

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  render() {
    return (
      <>
        <div className='root-notifications'>
          <Notifications listNotifications={this.listNotifications} />
        </div>
        <div className='App'>
          <div className='App-header'>
            <Header />
          </div>
          <div className='App-body'>
            {this.props.isLoggedIn
              ? <CourseList listCourses={this.listCourses} />
              : <Login />}
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

// Assign Prop Types
App.propTypes = {
  isLoggedIn: PropTypes.bool
};

// Default Prop Values
App.defaultProps = {
  isLoggedIn: false
};

export default App;
