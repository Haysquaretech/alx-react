import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App Component Test', () => {
  it('Test that App renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it('Test that App renders a div with the class App-header', () => {
    const app = shallow(<App />);
    expect(app.containsAllMatchingElements([
      <Notifications />,
      <Header />,
      <Login />,
      <Footer />
    ])).toEqual(true);
  });

  // it('Test that App renders a div with the class App-body', () => {
  //   const app = shallow(<App />);
  //   expect(app.find('.App-body')).toBeDefined();
  // });

  // it('Test that App renders a div with the class App-footer', () => {
  //   const app = shallow(<App />);
  //   expect(app.find('.App-footer')).toBeDefined();
  // });
});
