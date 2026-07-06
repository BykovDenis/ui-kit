import { styled } from '@dbykov-ui-kit/styles';

const InputStyled = styled.input.attrs({ type: 'file' })`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export default InputStyled;
