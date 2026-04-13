import { styled } from 'styled-components';

const InputStyled = styled.input.attrs({ type: 'file' })`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export default InputStyled;
