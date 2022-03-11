import React, { useEffect, useRef } from 'react';

import searchDomChildElement from '../../helpers/search-dom-child-element';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ListType from '../enum/list-type';
import IList from '../types/ilist';
import ListStyled from './list.styled';
import ListDivStyled from './list-div.styled';

const KEY_ESCAPE: string = 'ESCAPE';
const COLOR_THEME: string = 'normal';

const List: React.FunctionComponent<IList> = (props: IList) => {
  const listRef = useRef();

  const onMouseUp = (evt: any) => {
    const element: any = evt.target;
    if (listRef) {
      const listElement: any = listRef?.current;
      if (listElement) {
        props?.onMouseOutUp(searchDomChildElement(listElement, element), evt);
      }
    }
  };

  const onKeyUp = (evt: any) => {
    if (evt.keyCode === 27 || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
      props?.onKeyUp(evt);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.addEventListener('keyup', onKeyUp);
    };
  }, []);

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
        ref={listRef}
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
