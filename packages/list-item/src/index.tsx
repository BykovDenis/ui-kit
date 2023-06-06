import React from 'react';

import ListItemType from '../enums/list-item-type';
import IListElement from '../types/ilist-element';
import ListItemStyled from './list-item.styled';
import ListItemButtonStyled from './list-item-button.styled';
import ListItemContainer from './list-item-container.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const HEIGHT: number = 30;
const TEXT_ALIGN = 'center';

const ListItem: React.FunctionComponent<IListElement> = (props: IListElement) => {
  const cssVariables: any = getCssVariables();
  const listItemType: string = ListItemType.Text;

    const backgroundColor: string = cssVariables.backgroundColor;
    const hoverBackgroundColor: string = cssVariables.primaryMainColor;
    const activeBackgroundColor: string = cssVariables.primaryLightColor;

    const underLineColor: string = cssVariables.mainGrayColor;
    const hoverColor: string = props?.colorInverted || cssVariables.baseFontColorInverted;

    const color: string =
      props?.colorTheme === 'normal' || !props.colorTheme
        ? cssVariables.baseFontColor
        : cssVariables.secondaryMainColor;

    return props.type === ListItemType.Button ? (
      <ListItemContainer underLineColor={underLineColor} hoverColor={hoverColor}>
        <ListItemButtonStyled
          {...props}
          color={props?.color || color}
          hoverColor={hoverColor}
          height={props?.height || HEIGHT}
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
        >
          {props.children}
        </ListItemButtonStyled>
      </ListItemContainer>
    ) : (
      <ListItemStyled
        color={props?.color || color}
        height={props?.height || HEIGHT}
        textAlign={props?.textAlign || TEXT_ALIGN}
        underLineColor={underLineColor}
        type={props?.type || listItemType}
        backgroundColor={props?.backgroundColor || backgroundColor}
        className={props?.className}
        justifyContent={props?.justifyContent}
        padding={props.padding}
        fontSize={props?.fontSize}
      >
        {props.children}
      </ListItemStyled>
    );
};

export default ListItem;
