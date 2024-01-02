/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { Map } from 'immutable';

describe('App Component Test', () => {
  let wrapper;
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it('Test that App renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders different 4 child components', () => {
    expect(wrapper.containsAllMatchingElements([
      // <Notifications listNotifications={[]} />,
      <Header />,
      <Login />,
      <Footer />
    ])).toEqual(true);
  });

  it('Verify that <Notifications /> is in App', () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('check that CourseList is not displayed', () => {
    let wrapper;
    beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
      wrapper = shallow(<App />);
    });

    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

});

describe('Describe a new case, when isLoggedIn is true or false', () => {
  const isLoggedIn = true;
  let wrapper;
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it('verify that <Login /> component is not included', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('verify that <CourseList /> component is included', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});

describe('App State />', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App/>);
  });

  it('Tests that the logIn function updates user state correctly', () => {
    wrapper = shallow(<App />);

    const myUser = {
      email: 'testy@gmail.com',
      password: 'testy',
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(myUser);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
  });

  it('Tests that the logOut function updates user state correctly', () => {
    wrapper = shallow(<App />);

    const user = {
      email: 'testy@gmail.com',
      password: 'testy',
      isLoggedIn: true
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
  });
});

describe('Test mapStateToProps function', () => {
  it('Verify that the function returns the right object when passing the', () => {
    const jsObject = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: true
    };

    const state = {
      courses: Map(jsObject),
      notifications: Map(),
      ui: Map()
    };

    const expected = {
      isLoggedIn: true,
      displayDrawer: true
    };

    const mappedState = mapStateToProps(state);

    expect(mappedState).toEqual(expected);
  });
});
