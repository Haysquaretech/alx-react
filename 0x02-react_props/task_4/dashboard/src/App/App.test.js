import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App Component Test', () => {
  const app = shallow(<App />);
  it('Test that App renders without crashing', () => {
    expect(app).toBeDefined();
  });

  it('Test that App renders a div with the class App-header', () => {
    expect(app.containsAllMatchingElements([
      <Notifications />,
      <Header />,
      <Login />,
      <Footer />
    ])).toEqual(true);
  });

  it('check that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

});

describe('Describe a new case, when isLoggedIn is true', () => {
  const isLoggedIn = true;
  const wrapper = shallow(<App isLoggedIn={isLoggedIn} />);
  it('verify that <Login /> component is not included', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('verify that <CourseList /> component is included', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});
