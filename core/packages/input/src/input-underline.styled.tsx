import styled from 'styled-components';

import Variants from '../../enums/variants';

interface IInputUnderline {
  variant: Variants;
  width: number;
  color: string;
  name: string;
  disabled?: boolean;
  hoverColor?: string;
}

const InputUnderline =
  styled('div') <
  IInputUnderline >
  `
  display: ${(props: IInputUnderline) => (props?.variant === Variants.Outlined ? 'none' : 'block')} ;
  width: ${(props: IInputUnderline) => (props?.width ? `${props?.width}px` : `100%`)};
  height: 1px;
  background-color: ${(props: IInputUnderline) => props.color};
  &:hover {
    background-color: ${(props: IInputUnderline) => props.color}; 
  }  
`;

export default InputUnderline;
