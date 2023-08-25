import React, { useEffect, useState } from 'react';

import ListItemType from '../enums/list-item-type';
import IListElement from '../types/ilist-element';
import ListItemStyled from './list-item.styled';
import ListItemButtonStyled from './list-item-button.styled';
import ListItemContainer from './list-item-container.styled';
import ITheme from '../../styles/types/itheme';

const HEIGHT: number = 30;
const TEXT_ALIGN = 'center';

const ListItem: React.FunctionComponent<IListElement> = (props: IListElement) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);
  const listItemType: string = ListItemType.Text;

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

    const underLineColor: string = theme?.mainGrayColor;
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

    return props.type === ListItemType.Button ? (
      <ListItemContainer underLineColor={underLineColor} hoverColor={hoverColor}>
        <ListItemButtonStyled
          {...props}
          color={props?.color || color}
          hoverColor={hoverColor}
          height={props?.height}
          minHeight={props?.minHeight || HEIGHT}
          textAlign={props?.textAlign || TEXT_ALIGN}
          hoverBackgroundColor={props?.hoverBackgroundColor || hoverBackgroundColor}
          activeBackgroundColor={props?.hoverBackgroundColor || activeBackgroundColor}
          type={props?.type || listItemType}
          backgroundColor={props?.backgroundColor || backgroundColor}
          onClick={props?.onClick}
          className={props?.className}
          justifyContent={props?.justifyContent}
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
        {...props}
        color={props?.color || color}
        height={props?.height}
        minHeight={props?.minHeight || HEIGHT}
        textAlign={props?.textAlign || TEXT_ALIGN}
        underLineColor={underLineColor}
        type={props?.type || listItemType}
        backgroundColor={props?.backgroundColor || backgroundColor}
        className={props?.className}
        justifyContent={props?.justifyContent}
        padding={props.padding}
        fontSize={props?.fontSize}
        isSelected={props.isSelected}
      >
        {props.children}
      </ListItemStyled>
    );
  };

  return <Consumer>{componentThemed}</Consumer>;
};

export default ListItem;
