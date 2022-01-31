import styled from 'styled-components';

import ItextField from '../types/itext-field';

const TextFieldContainerStyled = styled('div')`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  width: ${(props: ItextField) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: ItextField) => (props?.height ? `${props?.height + 5}px` : 'calc(100% + 5px)')};
  line-height: 1;
`;

export default TextFieldContainerStyled;
