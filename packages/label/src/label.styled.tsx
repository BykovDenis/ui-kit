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
      cursor: pointer;
      color: ${(props: ILabel) => props.color};
      font-size: ${(props: ILabel) => props.fontSize}px;
      line-height: 1.3;
      &:focus {
        outline: 1px solid ${(props: ILabel) => rgbToRgba(props?.focusColor, 0.3)};
        box-shadow: 1px 1px 5px 3px ${(props: ILabel) => rgbToRgba(props?.focusColor, 0.3)};
      }
      `;

export default Label;
