import React, { useRef } from 'react';

import { COLOR_THEME } from '../../constants';
import ListType from '../enum/list-type';
import IList from '../types/ilist';
import ListStyled from './list.styled';
import ListDivStyled from './list-div.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const List: React.FunctionComponent<IList> = (props: IList) => {
  const cssVariables: any = getCssVariables();

  const listRef = useRef();
  const backgroundColor: string =
    props?.colorTheme === COLOR_THEME || !props.colorTheme
      ? cssVariables.primaryMainColor
      : cssVariables.secondaryMainColor;

  const hoverBackgroundColor: string = cssVariables.primaryLighterColor;

  const underlineColor: string = cssVariables.primaryMainColor;
  const hoverColor: string = cssVariables.baseFontColor;

  const color: string =
    props?.color ||
    (props?.colorTheme === COLOR_THEME || !props.colorTheme
      ? cssVariables.baseFontColor
      : cssVariables.secondaryMainColor);

  const onMouseDown = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (props?.onMouseDown) {
      props.onMouseDown(evt, listRef);
    }
  };

  const onKeyUp = (evt: React.KeyboardEvent<HTMLElement>) => {
    if (props?.onKeyUp) {
      props.onKeyUp(evt, listRef);
    }
  };

  return props?.type === ListType.Buttons ? (
    <ListDivStyled
      fontFamily={cssVariables.fontFamily}
      className={props.className}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      color={color}
      hoverColor={hoverColor}
      underlineColor={underlineColor}
      onMouseDown={onMouseDown}
      onKeyUp={onKeyUp}
      ref={listRef}
    >
      {props.children}
    </ListDivStyled>
  ) : (
    <ListStyled fontFamily={cssVariables.fontFamily} className={props.className}>
      {props.children}
    </ListStyled>
  );
};

export default React.memo(List);
