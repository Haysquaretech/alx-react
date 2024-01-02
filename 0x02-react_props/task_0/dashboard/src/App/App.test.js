import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component Test', () => {
  it('Test that App renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  // it('Test that App renders a div with the class App-header', () => {
  //   const app = shallow(<App />);
  //   expect(app.find('.App-header')).toBeDefined();
  // });

  // it('Test that App renders a div with the class App-body', () => {
  //   const app = shallow(<App />);
  //   expect(app.find('.App-body')).toBeDefined();
  // });

  // it('Test that App renders a div with the class App-footer', () => {
  //   const app = shallow(<App />);
  //   expect(app.find('.App-footer')).toBeDefined();
  // });
});
