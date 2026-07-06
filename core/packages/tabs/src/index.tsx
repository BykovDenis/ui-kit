import React from 'react';

import ITheme from '../../styles/types/itheme';
import TTabs from '../types/ttabs';
import TabsStyled from './tabs.styled';
import renderChildren from '../helpers/render-children-with-props';
import { useTheme } from '@dbykov-ui-kit/styles';

const Tabs: React.FunctionComponent<TTabs> = (props: TTabs) => {
  if (props?.children) {
    const theme = useTheme();

    const componentThemed: any = (theme: ITheme) => {
      const color: string = props.disabled
        ? theme?.palette?.baseFontColorOpacity05
        : props.color || theme?.palette?.baseFontColor;

      const children = renderChildren(props.children?.length ? props?.children : [props?.children], props);

      return (
        <TabsStyled
          {...props}
          className={props?.className}
          fontFamily={theme?.fontFamily}
          focusColor={color}
          color={props?.color || color}
          fontSize={props?.fontSize ?? theme?.baseFontSize}
          fontWeight={props?.fontWeight}
          width={props?.width}
          backgroundColor={props?.backgroundColor}
          disabled={props.disabled}
          whiteSpace={props?.whiteSpace}
          padding={props?.padding}
          height={props?.height}
          wordBreak={props?.wordBreak}
          lineHeight={props.lineHeight}
        >
          {children}
        </TabsStyled>
      );
    };


    return componentThemed(theme);
  } else {
    return null;
  }
};

export default Tabs;
