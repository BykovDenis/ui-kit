import styled from 'styled-components';

import isNotEmptyString from '../../helpers/is-not-empty-string';
import TLabelInteractive from '../types/tlabel-interactive';

type TLabelInteractiveStyled = {
  backgroundColor?: string,
  children?: any | Array<any>, // React.ReactNode | number | string | Array<React.ReactNode>,
};

const LabelInteractiveStyled =
  styled.div <
  TLabelInteractiveStyled >
  `
  display: flex;
  font-weight: inherit;
  background-color: ${(props: TLabelInteractiveStyled) =>
    isNotEmptyString(props?.backgroundColor) ? props?.backgroundColor : 'transparent'};
`;

export default LabelInteractiveStyled;
