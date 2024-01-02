import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('Testing BodySection Component', () => {
  it('render correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection
        title='test title'
      >
        <p>test children node</p>
      </BodySection>);
    const title = wrapper.find('h2');
    const child = wrapper.find('p');
    expect(title.text()).toEqual('test title');
    expect(child.text()).toEqual('test children node');
    expect(wrapper.containsAllMatchingElements([title, child])).toEqual(true);
  });
});
