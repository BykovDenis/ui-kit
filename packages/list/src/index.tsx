import React from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import IList from '../types/ilist';
import IListElement from '../types/ilist-element';
import ListItem from './list-item';

const List: React.FunctionComponent<IList> = (props: IList) => {
  const componentThemed: any = (theme: ITheme) => {
    return (
      <ul>
        {props?.elements?.map((element: IListElement, index: number) => (
          <ListItem key={index} element={element} />
        ))}
      </ul>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default List;
