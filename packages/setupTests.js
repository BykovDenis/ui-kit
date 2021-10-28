// eslint-disable-next-line
import Enzyme, { mount,render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

React.useLayoutEffect = React.useEffect;
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
//global.toJson = toJson

// Fail tests on any warning
/* tslint:disable */
console.error = (message) => {
  throw new Error(message);
};
/* tslint:enable */
