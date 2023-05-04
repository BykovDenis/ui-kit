import styled from 'styled-components';
import TDropZone from '../types/tdrop-zone';

const InputFileStyled = styled.input.attrs((props: TDropZone) => ({ type: 'file', multiple: props.isMulti }))`
  visibility: hidden;
  width: 0;
`;

export default InputFileStyled;
