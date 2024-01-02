import React from 'react';
import { shallow } from 'enzyme';

import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList /> component test', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];
  const wrapper = shallow(<CourseList listCourses={listCourses} />);
  it('renders CourseList component without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders it correctly when listCourses has values', () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('renders when the prop `listCourses=[]`', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper).toBeDefined();
  });

  it('renders 0 rows when `listCourses=[]`', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(2);
  });
});
