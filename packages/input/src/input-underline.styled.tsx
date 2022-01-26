import styled from 'styled-components';

import Variants from '../../enums/variants';
import IInput from '../types/iinput';

const InputUnderline =
  styled('div') <
  IInput >
  `
  display: ${(props: IInput) => (props?.variant === Variants.Outlined ? 'none' : 'block')} ;
  width: ${(props: IInput) => (props?.width ? `${props?.width}px` : `100%`)};
  height: 1px;
  background-color: ${(props: IInput) => props.color};
`;

export default InputUnderline;
