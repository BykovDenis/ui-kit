import styled from 'styled-components';
import '../../styles/src/index.scss';

import getMeasureValue from '../../helpers/get-measure-value';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import TLabel from '../types/tlabel';

const Label =
  styled.label <
  TLabel >
  `
      ${(props: TLabel) => `  
      position: relative;
      display: ${props?.display ? props.display : 'inline-flex'};
      vertical-align: center;
      flex-direction: row;
      align-items: center;
      justify-content: ${props?.justifyContent ? props.justifyContent : 'center'};
      font-family: ${props.fontFamily || 'var(--base-font-family)'};
      cursor: ${!props.isReadOnly && !props.disabled ? 'pointer' : 'default'};
      color: ${props?.color || 'var(--base-font-color)'};
      font-size: ${props.fontSize ?? 'var(--base-font-size)'}px;
      line-height: ${props.lineHeight ?? 0.7}; 
      white-space: ${props?.whiteSpace || 'nowrap'};
      font-weight: ${props.fontWeight || 'var(--base-font-weigh)'}; 
      width: ${getMeasureValue(props?.width, '100%')};
      height: ${getMeasureValue(props?.height)};
      background-color: ${props.backgroundColor ||'var(--main-background-color)'};
      word-break: ${props.wordBreak ?? 'initial'};  
      padding: ${props.padding || 'initial'};
      &:focus {
        outline: 1px solid ${rgbToRgba(props?.focusColor, 0.3)};
        box-shadow: 1px 1px 5px 3px ${rgbToRgba(props?.focusColor, 0.3)};
      }
      `}
      `;

export default Label;
