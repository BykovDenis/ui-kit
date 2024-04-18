import React, { useEffect, useState } from 'react';
import TTypography from '../types/ttypography';
import H1Styled from './h1.styled';
import H2Styled from './h2.styled';
import H3Styled from './h3.styled';
import ITheme from '../../styles/types/itheme';
import PhraseStyled from './phrase.styled';

const Typography: React.FunctionComponent<TTypography> = (props: TTypography) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = !props?.error ? theme?.palette?.baseFontColor : theme?.palette?.secondary?.main;

    switch (props.variant) {
      case 'H1': {
        return (
          <H1Styled
            {...props}
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? theme.h1FontSize}
            backgroundColor={props?.backgroundColor}
            className={props?.className}
            fontFamily={props.fontFamily || theme.fontFamily}
          >
            {props.children}
          </H1Styled>
        );
      }
      case 'H2': {
        return (
          <H2Styled
            {...props}
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? theme.h2FontSize}
            backgroundColor={props?.backgroundColor}
            className={props?.className}
            fontFamily={props.fontFamily || theme.fontFamily}
          >
            {props.children}
          </H2Styled>
        );
      }
      case 'H3': {
        return (
          <H3Styled
            {...props}
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? theme.h3FontSize}
            backgroundColor={props?.backgroundColor}
            className={props?.className}
            fontFamily={props.fontFamily || theme.fontFamily}
          >
            {props.children}
          </H3Styled>
        );
      }
      case 'H4': {
        return (
          <H3Styled
            {...props}
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? theme.h4FontSize}
            backgroundColor={props?.backgroundColor}
            className={props?.className}
            fontFamily={props.fontFamily || theme.fontFamily}
          >
            {props.children}
          </H3Styled>
        );
      }
      case 'H5': {
        return (
          <H3Styled
            {...props}
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? theme.h5FontSize}
            backgroundColor={props?.backgroundColor}
            className={props?.className}
            fontFamily={props.fontFamily || theme.fontFamily}
          >
            {props.children}
          </H3Styled>
        );
      }
      case 'H6': {
        return (
          <H3Styled
            {...props}
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? theme.h6FontSize}
            backgroundColor={props?.backgroundColor}
            className={props?.className}
            fontFamily={props.fontFamily || theme.fontFamily}
          >
            {props.children}
          </H3Styled>
        );
      }
      case 'Phrase': {
        return (
          <PhraseStyled
            {...props}
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? theme.h6FontSize}
            backgroundColor={props?.backgroundColor}
            className={props?.className}
            fontFamily={props.fontFamily || theme.fontFamily}
          >
            {props.children}
          </PhraseStyled>
        );
      }
      default: {
        return (
          <H1Styled
            {...props}
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? theme.h1FontSize}
            backgroundColor={props?.backgroundColor}
            className={props?.className}
            fontFamily={props.fontFamily || theme.fontFamily}
          >
            {props.children}
          </H1Styled>
        );
      }
    }
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Typography;
