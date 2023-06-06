import React from 'react';

import TTab from '../types/ttab';
import TabStyled from './tab.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const Tab: React.FunctionComponent<TTab> = (props: TTab) => {
    const cssVariables: any = getCssVariables()

    const color: string = props.disabled ? cssVariables.inactiveFontColor : props.color ?? cssVariables.baseFontColor;

    const borderColor: string = cssVariables.secondaryMainColor;

    const onTabClick = (evt: React.ChangeEvent<HTMLButtonElement>) => {
      props.onChange(props.tabActive, evt);
    };

    const backgroundColor: string = props.disabled ? cssVariables.inactiveBackgroundColor : props?.backgroundColor;

    return (
      <TabStyled
        {...props}
        className={props?.className}
        fontFamily={cssVariables.fontFamily}
        focusColor={color}
        color={props?.color || color}
        fontSize={props?.fontSize ?? cssVariables.baseFontSize}
        fontWeight={props?.fontWeight}
        width={props?.width}
        backgroundColor={backgroundColor}
        disabled={props.disabled}
        whiteSpace={props?.whiteSpace}
        padding={props?.padding}
        wordBreak={props?.wordBreak}
        lineHeight={props.lineHeight}
        borderColor={borderColor}
        onClick={onTabClick}
        maxWidth={props?.maxWidth}
        minHeight={props?.minHeight}
        isUpperCase={props?.isUpperCase}
      >
        {props.children}
      </TabStyled>
    );
};

export default React.memo(Tab);
