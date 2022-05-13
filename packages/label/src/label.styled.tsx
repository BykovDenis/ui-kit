import styled from 'styled-components';

import rgbToRgba from '../../helpers/rgb-to-rgba';
import ILabel from '../types/ilabel';

const Label =
  styled.label <
  ILabel >
  `
      position: relative;
      display: inline-flex;
      vertical-align: center;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      font-family: ${(props: ILabel) => props.fontFamily};
      cursor: ${(props: ILabel) => (!props.isReadOnly && !props.isDisabled ? 'pointer' : 'default')};
      color: ${(props: ILabel) => props.color};
      font-size: ${(props: ILabel) => props.fontSize}px;
      line-height: 0.7;
      white-space: nowrap;
      font-weight: ${(props: ILabel) => props.fontWeight}; 
      width: ${(props: ILabel) => (props.width ? `${props.width}px` : '100%')};  
      &:focus {
        outline: 1px solid ${(props: ILabel) => rgbToRgba(props?.focusColor, 0.3)};
        box-shadow: 1px 1px 5px 3px ${(props: ILabel) => rgbToRgba(props?.focusColor, 0.3)};
      }
      `;

export default Label;
