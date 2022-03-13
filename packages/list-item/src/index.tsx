import React from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ListItemType from '../enums/list-item-type';
import IListElement from '../types/ilist-element';
import ListItemStyled from './list-item.styled';
import ListItemButtonStyled from './list-item-button.styled';
import ListItemContainer from './list-item-container.styled';

const HEIGHT: number = 30;
const TEXT_ALIGN = 'center';

const ListItem: React.FunctionComponent<IListElement> = (props: IListElement) => {
  const listItemType: string = ListItemType.Text;

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string =
      props?.colorTheme === 'normal' || !props.colorTheme ? theme?.mainWhiteColor : theme?.palette?.secondary?.main;

    const hoverBackgroundColor: string = theme?.palette?.primary?.lighter;
    const activeBackgroundColor: string = theme?.palette?.primary?.light;

    const underLineColor: string = theme?.mainGrayColor;
    const hoverColor: string = theme?.palette?.primary?.main;

    const color: string =
      props?.colorTheme === 'normal' || !props.colorTheme
        ? theme?.palette?.baseFontColor
        : theme?.palette?.secondary?.main;

    return props.type === ListItemType.Button ? (
      <ListItemContainer underLineColor={underLineColor} hoverColor={hoverColor}>
        <ListItemButtonStyled
          {...props}
          color={props?.color || color}
          height={props?.height || HEIGHT}
          textAlign={props?.textAlign || TEXT_ALIGN}
          underLineColor={underLineColor}
          hoverColor={hoverColor}
          hoverBackgroundColor={props.hoverBackgroundColor || hoverBackgroundColor}
          activeBackgroundColor={activeBackgroundColor}
          type={props?.type || listItemType}
          backgroundColor={props?.backgroundColor || backgroundColor}
          onClick={props?.onClick}
          className={props?.className}
        >
          {props.children}
        </ListItemButtonStyled>
      </ListItemContainer>
    ) : (
      <ListItemStyled
        color={color}
        height={props?.height || HEIGHT}
        textAlign={props?.textAlign || TEXT_ALIGN}
        underLineColor={underLineColor}
        hoverColor={hoverColor}
        hoverBackgroundColor={hoverBackgroundColor}
        activeBackgroundColor={activeBackgroundColor}
        type={props?.type || listItemType}
        backgroundColor={props?.backgroundColor || backgroundColor}
        className={props?.className}
      >
        {props.children}
      </ListItemStyled>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default ListItem;
