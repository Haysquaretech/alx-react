/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';

import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';
import { fromJS } from 'immutable';

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

describe('<App logOut={function} />', () => {
  let wrapper;
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it('verify that when the keys control and h are pressed the logOut function is called', () => {
    wrapper = mount(<App logOut={() => {}} />);
    window.alert = jest.fn();
    const instance = wrapper.instance();
    const logout = jest.spyOn(instance, 'logOut');
    const alert = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { bubbles:true, ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith('Logging you out');
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});

describe('App State />', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App/>);
  });

  it('Tests that the logIn function updates user state correctly', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: 'testy@gmail.com',
      password: 'testy',
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
    wrapper.unmount();
  });

  it('Tests that the logOut function updates user state correctly', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const user = {
      email: 'testy@gmail.com',
      password: 'testy',
      isLoggedIn: true
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
    wrapper.unmount();
  });

  it(`verify that markNotificationAsRead works as intended,
  deletes the notification with the passed id from the listNotifications array`, () => {
    const context = {
      user: {
        ...user
      },
      logOut: jest.fn(),
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, html: { __html: jest.fn() }, type: "urgent" }
      ]
    }

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ]);

    expect(wrapper.state().listNotifications.length).toBe(2);
    expect(wrapper.state().listNotifications[3]).toBe(undefined);

    wrapper.unmount();
  });
});

describe('Test mapStateToProps function', () => {
  it('Verify that the function returns the right object when passing the', () => {
    const state = fromJS({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: true
    });

    const expected = {
      isLoggedIn: true,
      displayDrawer: true
    };

    const mappedState = mapStateToProps(state);

    expect(mappedState).toEqual(expected);
  });
});
