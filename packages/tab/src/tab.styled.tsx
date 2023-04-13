import styled from 'styled-components';

import getMeasureValue from '../../helpers/get-measure-value';
import TTab from '../types/ttab';

const Tab =
  styled.button <
  TTab >
  `
      position: relative;
      display: ${(props: TTab) => (props?.display ? props.display : 'flex')};
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-family: ${(props: TTab) => props.fontFamily};
      cursor: pointer;
      color: ${(props: TTab) => props.color};
      font-size: ${(props: TTab) => props.fontSize}px;
      line-height: ${(props: TTab) => props.lineHeight ?? 0.7}; 
      white-space: ${(props: TTab) => (props?.whiteSpace ? props.whiteSpace : 'nowrap')};
      font-weight: ${(props: TTab) => props.fontWeight || 'inherit'}; 
      width: ${(props: TTab) => getMeasureValue(props?.width, '100%')};
      height: ${(props: TTab) => getMeasureValue(props?.height)};
      background-color: ${(props: TTab) => (props.backgroundColor ? props.backgroundColor : 'inherit')};
      word-break: ${(props: TTab) => props.wordBreak ?? 'initial'};  
      padding: ${(props: TTab) => props.padding || 'initial'};
  `;

export default Tab;
