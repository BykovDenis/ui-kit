import styled from 'styled-components';

import getMeasureValue from '../../helpers/get-measure-value';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import FileUploaderProps from '../types/file-uploader-props';

const Label = styled.label<FileUploaderProps>`
  ${(props: FileUploaderProps) => `
    box-sizing: border-box;
    position: relative;
    display: ${props?.display ? props.display : 'inline-flex'};
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    padding: ${getMeasureValue(props?.padding, '10px 15px')};
    justify-content: ${props?.justifyContent ? props.justifyContent : 'center'};
    font-family: ${props.fontFamily};
    cursor: ${!props.isReadOnly && !props.disabled ? 'pointer' : 'default'};
    color: ${props.color};
    font-size: ${props.fontSize}px;
    line-height: ${props.lineHeight ?? 0.7}; 
    white-space: ${props?.whiteSpace ? props.whiteSpace : 'nowrap'};
    font-weight: ${props.fontWeight || 'inherit'}; 
    width: ${getMeasureValue(props?.width, '80px')};
    height: ${getMeasureValue(props?.height, '80px')};
    background-color: ${props.backgroundColor ? props.backgroundColor : 'inherit'};
    word-break: ${props.wordBreak ?? 'initial'};  
    border-radius: 4px;
    &:focus {
      outline: 1px solid ${rgbToRgba(props?.focusColor, 0.3)};
      box-shadow: 1px 1px 5px 3px ${rgbToRgba(props?.focusColor, 0.3)};
    }
    &:hover {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25); 
      background-color: ${rgbToRgba(props.backgroundColor, 0.85)};
    }

    &:active {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
      background-color: ${rgbToRgba(props.backgroundColor, 0.5)};
    }

    &:disabled {
      box-shadow: none; 
      border-radius: 4px;
      border: 1px solid #bdbdbd;
    }
  `}
`;

export default Label;
