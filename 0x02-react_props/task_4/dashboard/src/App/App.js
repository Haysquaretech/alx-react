import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App ({ isLoggedIn }) {
  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className='App'>
        <div className='App-header'>
          <Header />
        </div>
        <div className='App-body'>
          {isLoggedIn
            ? <CourseList />
            : <Login />}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
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
