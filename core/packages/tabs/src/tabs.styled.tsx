import { styled } from 'styled-components';

import getMeasureValue from '../../helpers/get-measure-value';
import TTabs from '../types/ttabs';

const Tabs =
  styled.div <
  TTabs >
  `
      position: relative;
      display: ${(props: TTabs) => (props?.display ? props.display : 'flex')};
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-family: ${(props: TTabs) => props.fontFamily};
      cursor: pointer;
      color: ${(props: TTabs) => props.color};
      font-size: ${(props: TTabs) => props.fontSize}px;
      line-height: ${(props: TTabs) => props.lineHeight ?? 0.7}; 
      white-space: ${(props: TTabs) => (props?.whiteSpace ? props.whiteSpace : 'nowrap')};
      font-weight: ${(props: TTabs) => props.fontWeight || 'inherit'}; 
      width: ${(props: TTabs) => getMeasureValue(props?.width, '100%')};
      height: ${(props: TTabs) => getMeasureValue(props?.height)};
      background-color: ${(props: TTabs) => (props.backgroundColor ? props.backgroundColor : 'inherit')};
      word-break: ${(props: TTabs) => props.wordBreak ?? 'initial'};  
      padding: ${(props: TTabs) => props.padding || 'initial'};
  `;

export default Tabs;
