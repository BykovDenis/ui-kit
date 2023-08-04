import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import ListItem from '../../list-item/src';
import List from '../src';
import { action } from '@storybook/addon-actions';
import { themes } from '../../styles/src/themes';

it('List renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const props: any = {
    type: 'list-buttons',
    elements: ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'],
  };

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <List {...props}>
        {props.elements.map((element: string, index: number) => (
          <ListItem onClick={action('clicked')} type="text" key={index}>
            {element}
          </ListItem>
        ))}
      </List>
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
