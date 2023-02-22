import styled from 'styled-components';
import TProgressBar from '../types/tprogress-bar';

const ProgressBarContainerStyled =
  styled.div <
  TProgressBar >
  `
  position: relative;
  width: 100%;
  background-color: ${(props: TProgressBar) => props.backgroundColor};
  border-color: ${(props: TProgressBar) => props.borderColor};
  border-style: ${(props: TProgressBar) => props.borderStyle};
  border-width: ${(props: TProgressBar) => props.borderWidth};
  border-radius: ${(props: TProgressBar) => props.borderRadius};
  height: ${(props: TProgressBar) => props.height};
  font-family: ${(props: TProgressBar) => props?.fontFamily || 'inherit'};
  transform: ${(props: TProgressBar) => (props.direction == 'ltr' ? 'none' : 'rotate(180deg)')};
`;

export default ProgressBarContainerStyled;
