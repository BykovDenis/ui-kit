import styled from 'styled-components';

import getMeasureValue from '../../helpers/get-measure-value';
import TTab from '../types/ttab';

type TTabStyled = TTab & {
  borderColor: string,
};

const Tab =
  styled.button <
  TTabStyled >
  `
      position: relative;
      display: ${(props: TTabStyled) => (props?.display ? props.display : 'flex')};
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-family: ${(props: TTabStyled) => props.fontFamily};
      cursor: pointer;
      color: ${(props: TTabStyled) => props.color};
      font-size: ${(props: TTabStyled) => props.fontSize}px;
      line-height: ${(props: TTabStyled) => props.lineHeight ?? 0.7}; 
      white-space: ${(props: TTabStyled) => (props?.whiteSpace ? props.whiteSpace : 'nowrap')};
      font-weight: ${(props: TTabStyled) => props.fontWeight || 900}; 
      width: ${(props: TTabStyled) => getMeasureValue(props?.width, '100%')};
      height: ${(props: TTabStyled) => getMeasureValue(props?.height)};
      background-color: ${(props: TTabStyled) => (props.backgroundColor ? props.backgroundColor : 'inherit')};
      word-break: ${(props: TTabStyled) => props.wordBreak ?? 'initial'};  
      padding: ${(props: TTabStyled) => props.padding || 'initial'};
      min-height: 40px;
      border: none;
      border-bottom: ${(props: TTabStyled) => `4px solid ${props.isActive ? props.borderColor : 'transparent'}`};
      transition: border-color 3s ease-in-out;
  `;

export default Tab;
