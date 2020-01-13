import React from 'react';
import {mount} from 'enzyme';
import MuiButton from './index';

describe('Button Component', function() {
  it('handles onClick events', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      <MuiButton onClick={onClick}>Hello world! Click me</MuiButton>
    );
    
    wrapper.find('button').simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
    
  });
});
