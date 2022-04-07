import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ListItem from '../../list-item/src';
import List from '../src';
import { action } from '@storybook/addon-actions';

it('List renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

  const props: any = {
    type: 'list-buttons',
    elements: ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'],
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themeCustom}>
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
