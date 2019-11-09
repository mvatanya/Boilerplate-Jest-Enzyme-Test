// This is a boiler plate for setting up Enzyme
// MUST put this file in src folder

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });