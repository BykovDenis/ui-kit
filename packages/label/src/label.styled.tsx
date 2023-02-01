import styled from 'styled-components';

import rgbToRgba from '../../helpers/rgb-to-rgba';
import TLabel from '../types/tlabel';

const Label =
  styled.label <
  TLabel >
  `
      position: relative;
      display: inline-flex;
      vertical-align: center;
      flex-direction: row;
      align-items: center;
      justify-content: ${(props: TLabel) => (props?.justifyContent ? props.justifyContent : 'center')};
      font-family: ${(props: TLabel) => props.fontFamily};
      cursor: ${(props: TLabel) => (!props.isReadOnly && !props.disabled ? 'pointer' : 'default')};
      color: ${(props: TLabel) => props.color};
      font-size: ${(props: TLabel) => props.fontSize}px;
      line-height: 0.7;
      white-space: ${(props: TLabel) => (props?.whiteSpace ? props.whiteSpace : 'nowrap')};
      font-weight: ${(props: TLabel) => props.fontWeight || 'inherit'}; 
      width: ${(props: TLabel) =>
    props.width ? (typeof props.width === 'string' ? props.width : `${props.width}px`) : '100%'};  
      background-color: ${(props: TLabel) => (props.backgroundColor ? props.backgroundColor : 'inherit')};
      &:focus {
        outline: 1px solid ${(props: TLabel) => rgbToRgba(props?.focusColor, 0.3)};
        box-shadow: 1px 1px 5px 3px ${(props: TLabel) => rgbToRgba(props?.focusColor, 0.3)};
      }
      `;

export default Label;
