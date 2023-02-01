import styled from 'styled-components';

import isNotEmptyString from '../../helpers/is-not-empty-string';
import TLabelInteractive from '../types/tlabel-interactive';

const LabelInteractiveStyled =
  styled.div <
  TLabelInteractive >
  `
  display: flex;
  font-weight: inherit;
  background-color: ${(props: TLabelInteractive) =>
    isNotEmptyString(props?.backgroundColor) ? props?.backgroundColor : 'transparent'};
`;

export default LabelInteractiveStyled;
