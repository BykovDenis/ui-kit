import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ListItem from '../../list-item/src';
import List from '../src';
import { action } from '@storybook/addon-actions';
import theme from '../../helpers/theme';

it('List renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(theme);

  const props: any = {
    type: 'list-buttons',
    elements: ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'],
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={theme}>
      <List {...props}>
        {props.elements.map((element: string, index: number) => (
          <ListItem onClick={action('clicked')} type="text" key={index}>
            {element}
          </ListItem>
        ))}
      </List>
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
