import React from 'react';
import App from './App';
import { swallow } from 'enzyme';

describe('App Component Test', () => {
  it('Test that App renders without crashing', () => {
    const app = swallow(<App />);
    expect(app).toBeDefined();
  });

  it('Test that App renders a div with the class App-header', () => {
    const app = swallow(<App />);
    expect(app.find('.App-header')).toBeDefined();
  });

  it('Test that App renders a div with the class App-body', () => {
    const app = swallow(<App />);
    expect(app.find('.App-body')).toBeDefined();
  });

  it('Test that App renders a div with the class App-footer', () => {
    const app = swallow(<App />);
    expect(app.find('.App-footer')).toBeDefined();
  });
});
