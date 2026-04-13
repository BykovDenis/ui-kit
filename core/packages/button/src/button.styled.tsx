import { styled } from 'styled-components';

import { Variant } from '../../enums/variant';
import getMeasureValue from '../../helpers/get-measure-value';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import TButton from '../types/tbutton';

const ButtonStyled = styled('button')<TButton>`
  ${(props: TButton) => `
    display: flex;
    align-items: center;
    flex-direction: row; 
    justify-content: ${props?.justifyContent || 'center'};
    box-sizing: border-box;
    font-family: ${props?.fontFamily};
    border: none;
    border-radius: ${props?.borderRadius ? props?.borderRadius : '4px'};
    font-style: inherit;
    font-weight: ${props?.fontWeight ?? 'inherit'};
    font-size: ${props?.fontSize}px;
    line-height: 1;
    text-align: ${props?.textAlign || 'center'};
    letter-spacing: 0.39998px;
    color: ${
      props?.variant !== Variant.Outlined || !props?.variant || props.disabled ? props.color : props.backgroundColor
    };
    padding: ${props?.padding ?? '10px 15px'};
    background-color: ${
      props?.variant === Variant.Contained || !props?.variant || props.disabled
        ? props.backgroundColor
        : props?.variant === Variant.Text || props?.variant === Variant.Outlined
          ? 'transparent'
      : props.color
    };
    background-image: ${props?.backgroundImage ?? 'none'};
    cursor: pointer;
    border: ${
      props?.variant === Variant.Outlined || props.disabled
        ? `1px solid ${props.backgroundColor}`
        : '1px solid transparent'
    };
    width: ${getMeasureValue(props?.width)};
    height: ${getMeasureValue(props?.height)};
    margin: 0;
    ${props?.textTransform ? `text-transform: ${props.textTransform};` : ''};
    ${props?.textDecoration ? `text-decoration: ${props.textDecoration};` : ''};
    &:focus {
      outline: 1px solid ${rgbToRgba(props?.focusColor, 0.3)};
      box-shadow: 1px 1px 5px 3px ${rgbToRgba(props?.focusColor, 0.3)};
    }
  
    &:hover {
      box-shadow: ${
        props?.variant === Variant.Contained || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px rgba(0, 0, 0, 0.15)'
      };
      background-color: ${
        props?.variant === Variant.Contained || !props?.variant
          ? rgbToRgba(props.backgroundColor, 0.85)
          : rgbToRgba(props.backgroundColor, 0.05)
      };
    }
  
    &:active {
      box-shadow: ${
        props?.variant === Variant.Contained || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'
      };
      background-color: ${
        props?.variant === Variant.Contained || !props?.variant
          ? rgbToRgba(props.backgroundColor, 0.5)
          : rgbToRgba(props.backgroundColor, 0.25)
      };
    }
  
    &:disabled {
      box-shadow: none;
      border-radius: 4px;
      border: 1px solid #bdbdbd;
    }
  `}
`;

export default ButtonStyled;
