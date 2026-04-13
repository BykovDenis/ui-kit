import React, { useEffect, useState } from 'react';

import { ListItemType } from '../enums/list-item-type';
import IListElement from '../types/ilist-element';
import ListItemStyled from './list-item.styled';
import ListItemButtonStyled from './list-item-button.styled';
import ListItemContainer from './list-item-container.styled';
import ITheme from '../../styles/types/itheme';
import calculationJustifyContent from './helpers/calculation-justify-content';
import { TEXT_ALIGN_CENTER } from '../../constants';

const HEIGHT: number = 30;

const ListItem: React.FunctionComponent<IListElement> = (props: IListElement) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isVisibleTextUnderline] = useState<boolean>(props?.isVisibleTextUnderline !== undefined ? props.isVisibleTextUnderline : true);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.isSelected
      ? theme.palette.primary.lighter
      : props.isDisable
      ? theme.inactiveBackgroundColor
      : theme.mainBackgroundColor;

    const hoverBackgroundColor: string = props.isDisable
      ? theme.inactiveBackgroundColor
      : theme?.palette?.primary?.lighter;
    const activeBackgroundColor: string = props.isDisable
      ? theme.inactiveBackgroundColor
      : theme?.palette?.primary?.light;

    const underLineColor: string = theme?.palette.baseFontColor;
    const hoverColor: string = props.isSelected
      ? theme.palette.baseFontColorOpacity05
      : props.isDisable
      ? theme.inactiveColor
      : props?.colorInverted || theme.palette.baseFontColorOpacity05;

    const color: string = props.isSelected
      ? theme.palette.baseFontColor
      : props.isDisable
      ? theme.inactiveColor
      : props?.colorTheme === 'normal' || !props.colorTheme
      ? theme?.palette?.baseFontColor
      : theme?.palette?.secondary?.main;

    const textAlign: string = props?.textAlign || TEXT_ALIGN_CENTER;
    const justifyContent: string = props?.justifyContent || calculationJustifyContent(textAlign);

    const { type, ...restProps } = props;

    return props.type === ListItemType.Button ? (
      <ListItemContainer underLineColor={underLineColor} hoverColor={hoverColor} isVisibleTextUnderline={isVisibleTextUnderline}>
        <ListItemButtonStyled
          {...restProps}
          color={props?.color || color}
          hoverColor={hoverColor}
          height={props?.height}
          minHeight={props?.minHeight || HEIGHT}
          hoverBackgroundColor={props?.hoverBackgroundColor || hoverBackgroundColor}
          activeBackgroundColor={props?.hoverBackgroundColor || activeBackgroundColor}
          backgroundColor={props?.backgroundColor || backgroundColor}
          onClick={props?.onClick}
          className={props?.className}
          justifyContent={justifyContent}
          alignItems={props?.alignItems}
          alignSelf={props?.alignSelf}
          padding={props.padding}
          fontSize={props?.fontSize}
          disabled={props.isDisable}
          isSelected={props.isSelected}
        >
          {props.children}
        </ListItemButtonStyled>
      </ListItemContainer>
    ) : (
      <ListItemStyled
        {...restProps}
        color={props?.color || color}
        height={props?.height}
        minHeight={props?.minHeight || HEIGHT}
        underLineColor={underLineColor}
        backgroundColor={props?.backgroundColor || backgroundColor}
        className={props?.className}
        justifyContent={justifyContent}
        alignItems={props?.alignItems}
        alignSelf={props?.alignSelf}
        padding={props.padding}
        fontSize={props?.fontSize}
        isSelected={props.isSelected}
        isVisibleTextUnderline={isVisibleTextUnderline}
      >
        {props.children}
      </ListItemStyled>
    );
  };

  return <Consumer>{componentThemed}</Consumer>;
};

export default ListItem;
