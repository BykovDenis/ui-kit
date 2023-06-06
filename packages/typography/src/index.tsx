import React from 'react';
import ITypography from '../types/itypography';
import H1Styled from './h1.styled';
import H2Styled from './h2.styled';
import H3Styled from './h3.styled';
import getCssVariables from "../../styles/src/get-css-variables";

const Typography: React.FunctionComponent<ITypography> = (props: ITypography) => {
  const cssVariables: any = getCssVariables();
    const color: string = !props?.error ? cssVariables.baseFontColor : cssVariables.secondaryMainColor;

    switch (props.variant) {
      case 'H1': {
        return (
          <H1Styled
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? cssVariables.h1FontSize}
            backgroundColor={props?.backgroundColor}
          >
            {props.children}
          </H1Styled>
        );
      }
      case 'H2': {
        return (
          <H2Styled
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? cssVariables.h2FontSize}
            backgroundColor={props?.backgroundColor}
          >
            {props.children}
          </H2Styled>
        );
      }
      case 'H3': {
        return (
          <H3Styled
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? cssVariables.h3FontSize}
            backgroundColor={props?.backgroundColor}
          >
            {props.children}
          </H3Styled>
        );
      }
      case 'H4': {
        return (
          <H3Styled
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? cssVariables.h4FontSize}
            backgroundColor={props?.backgroundColor}
          >
            {props.children}
          </H3Styled>
        );
      }
      case 'H5': {
        return (
          <H3Styled
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? cssVariables.h5FontSize}
            backgroundColor={props?.backgroundColor}
          >
            {props.children}
          </H3Styled>
        );
      }
      case 'H6': {
        return (
          <H3Styled
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? cssVariables.h6FontSize}
            backgroundColor={props?.backgroundColor}
          >
            {props.children}
          </H3Styled>
        );
      }
      default: {
        return (
          <H1Styled
            color={props?.color ?? color}
            fontSize={props?.fontSize ?? cssVariables.h1FontSize}
            backgroundColor={props?.backgroundColor}
          >
            {props.children}
          </H1Styled>
        );
      }
    }
};

export default React.memo(Typography);
