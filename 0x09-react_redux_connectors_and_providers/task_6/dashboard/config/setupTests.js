// Enzyme setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const { StyleSheetTestUtils } = require('aphrodite');

StyleSheetTestUtils.suppressStyleInjection();

configure({ adapter: new Adapter() });
