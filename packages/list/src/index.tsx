import React, { useEffect, useRef, useState } from 'react';

import { COLOR_THEME } from '../../constants';
import ITheme from '../../styles/types/itheme';
import ListType from '../enum/list-type';
import IList from '../types/ilist';
import ListStyled from './list.styled';
import ListDivStyled from './list-div.styled';

const List: React.FunctionComponent<IList> = (props: IList) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const listRef = useRef();
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

    const onMouseUp = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
      props.onMouseUp(evt, listRef);
    };

    const onKeyUp = (evt: React.KeyboardEvent<HTMLElement>) => {
      props.onKeyUp(evt, listRef);
    };

    return props?.type === ListType.Buttons ? (
      <ListDivStyled
        fontFamily={theme?.fontFamily}
        className={props.className}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        color={color}
        hoverColor={hoverColor}
        underlineColor={underlineColor}
        onMouseUp={onMouseUp}
        onKeyUp={onKeyUp}
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

  if (!Consumer) {
    console.error('The List component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(List);
