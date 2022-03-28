import React, { useEffect, useRef } from 'react';

import { COLOR_THEME, KEY_ESCAPE } from '../../constants';
import searchDomChildElement from '../../helpers/search-dom-child-element';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ListType from '../enum/list-type';
import IList from '../types/ilist';
import ListStyled from './list.styled';
import ListDivStyled from './list-div.styled';

const List: React.FunctionComponent<IList> = (props: IList) => {
  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string =
      props?.colorTheme === COLOR_THEME || !props.colorTheme
        ? theme?.palette?.primary?.main
        : theme?.palette?.secondary?.main;

    const hoverBackgroundColor: string = theme?.palette?.secondary?.lighter;

    const underlineColor: string = theme?.palette?.secondary?.main;
    const hoverColor: string = theme?.palette?.secondary?.main;

    const color: string =
      props?.colorTheme === COLOR_THEME || !props.colorTheme
        ? theme?.palette?.baseFontColor
        : theme?.palette?.secondary?.main;

    return props?.type === ListType.Buttons ? (
      <ListDivStyled
        fontFamily={theme?.fontFamily}
        className={props.className}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        color={color}
        hoverColor={hoverColor}
        underlineColor={underlineColor}
      >
        {props.children}
      </ListDivStyled>
    ) : (
      <ListStyled fontFamily={theme?.fontFamily} className={props.className}>
        {props.children}
      </ListStyled>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default List;
