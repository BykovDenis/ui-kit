import styled from 'styled-components';

import Variants from '../../enums/variants';
import Iinput from '../types/iinput';

const InputUnderline =
  styled('div') <
  Iinput >
  `
  display: ${(props: Iinput) => (props?.variant === Variants.Outlined ? 'none' : 'block')} ;
  width: ${(props: Iinput) => (props?.width ? `${props?.width}px` : `100%`)};
  height: 1px;
  background-color: ${(props: Iinput) => props.color};
`;

export default InputUnderline;
