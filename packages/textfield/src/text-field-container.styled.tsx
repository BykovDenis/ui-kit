import styled from 'styled-components';

import ITextField from '../types/itext-field';

const TextFieldContainerStyled = styled('div')`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  width: ${(props: ITextField) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: ITextField) => (props?.height ? `${props?.height + 5}px` : 'calc(100% + 5px)')};
`;

export default TextFieldContainerStyled;
