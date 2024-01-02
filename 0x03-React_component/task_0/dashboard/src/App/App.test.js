import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('App Component Test', () => {
  const isLoggedIn = true;
  const app = shallow(<App />);
  it('Test that App renders without crashing', () => {
    expect(app).toBeDefined();
  });

  it('renders different 4 child components', () => {
    expect(app.containsAllMatchingElements([
      // <Notifications listNotifications={[]} />,
      <Header />,
      <Login />,
      <Footer />
    ])).toEqual(true);
  });

  it('Verify that <Notifications /> is in App', () => {
    expect(app.find(Notifications)).toHaveLength(1);
  });

  it('check that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

});

describe('Describe a new case, when isLoggedIn is true or false', () => {
  const isLoggedIn = true;
  const wrapper = shallow(<App isLoggedIn={isLoggedIn} />);
  it('verify that <Login /> component is not included', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('verify that <CourseList /> component is included', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});
