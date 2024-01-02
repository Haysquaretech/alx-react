import React from 'react';
import { shallow } from 'enzyme';

import CourseListRow from './CourseListRow';

describe('<CourseListRow /> component test', () => {
  it('renders one cell (<th>) with colspan = 2 when `textSecondCell` is null', () => {
    const isHeader = true;
    const wrapper = shallow(
      <CourseListRow
        isHeader={isHeader}
        textFirstCell='test 1st cell'
      />);

    expect(wrapper
      .find('th')
    ).toHaveLength(1);
  });

  it('renders two cell (<th>) when `textSecondCell` is not null', () => {
    const isHeader = true;
    const wrapper = shallow(
      <CourseListRow
        isHeader={isHeader}
        textSecondCell='test 2nd cell'
        textFirstCell='test 1st cell'
      />);

    expect(wrapper
      .find('th')
    ).toHaveLength(2);
  });

  it('renders two cell (<td>) when `textSecondCell` is not null', () => {
    const isHeader = false;
    const wrapper = shallow(
      <CourseListRow
        isHeader={isHeader}
        textSecondCell='test 2nd cell'
        textFirstCell='test 1st cell'
      />);

    expect(wrapper
      .find('tr')
      .children()
      .find('td')
    ).toHaveLength(2);
  });
});
