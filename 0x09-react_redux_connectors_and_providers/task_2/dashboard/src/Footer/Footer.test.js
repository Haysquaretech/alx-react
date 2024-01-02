import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Login /> component tests', () => {
  const wrapper = shallow(<Footer />);

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('render the text “Copyright”', () => {
    expect(wrapper.text()).toContain('Copyright');
  });
});

describe('Testing Footer Component context and state', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that there is no link rendered when user is logged out within context', () => {
    const user = {
			email: '',
			password: '',
			isLoggedIn: false
		};

		const wrapper = shallow(<Footer user={user} />)

		expect(wrapper.find('a').length).toBe(0);
		expect(wrapper.find('a').exists()).toBe(false);
		expect(wrapper.text()).not.toContain('Contact us');
	})

	it('Tests that there is a link rendered when user is logged in within context', () => {
    const user = {
			email: '',
			password: '',
			isLoggedIn: true
    };

    const wrapper = shallow(<Footer user={user} />)

    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.text()).toContain('Contact us');
  });
};)
