import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from '../../list-item/src';
import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import List from '../src';

it('List renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const props: any = {
    type: 'list-buttons',
    elements: ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'],
  };

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <List {...props}>
        {props.elements.map((element: string, index: number) => (
          <ListItem type="text" key={index}>
            {element}
          </ListItem>
        ))}
      </List>
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
