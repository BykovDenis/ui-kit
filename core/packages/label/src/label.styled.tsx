import styled from 'styled-components';

import getMeasureValue from '../../helpers/get-measure-value';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import TLabel from '../types/tlabel';

const Label =
  styled.label <
  TLabel >
  `
      position: relative;
      display: ${(props: TLabel) => (props?.display ? props.display : 'inline-flex')};
      vertical-align: middle;
      flex-direction: row;
      align-items: center;
      justify-content: ${(props: TLabel) => (props?.justifyContent ? props.justifyContent : 'center')};
      font-family: ${(props: TLabel) => props.fontFamily};
      cursor: ${(props: TLabel) => (!props.isReadOnly && !props.disabled ? 'pointer' : 'default')};
      color: ${(props: TLabel) => props.color};
      font-size: ${(props: TLabel) => props.fontSize}px;
      line-height: ${(props: TLabel) => props.lineHeight ?? 0.7}; 
      white-space: ${(props: TLabel) => (props?.whiteSpace ? props.whiteSpace : 'nowrap')};
      font-weight: ${(props: TLabel) => props.fontWeight || 'inherit'}; 
      width: ${(props: TLabel) => getMeasureValue(props?.width, '100%')};
      height: ${(props: TLabel) => getMeasureValue(props?.height)};
      background-color: ${(props: TLabel) => (props.backgroundColor ? props.backgroundColor : 'inherit')};
      word-break: ${(props: TLabel) => props.wordBreak ?? 'initial'};  
      padding: ${(props: TLabel) => props.padding || 'initial'};
      &:focus {
        outline: 1px solid ${(props: TLabel) => rgbToRgba(props?.focusColor, 0.3)};
        box-shadow: 1px 1px 5px 3px ${(props: TLabel) => rgbToRgba(props?.focusColor, 0.3)};
      }
      `;

export default Label;
