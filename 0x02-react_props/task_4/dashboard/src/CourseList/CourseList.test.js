import React from 'react';
import { shallow } from 'enzyme';

import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList /> component test', () => {
  const wrapper = shallow(<CourseList />);
  it('renders CourseList component without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the 5 different rows', () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});
