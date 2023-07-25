import styled from 'styled-components';
import TProgressBar from '../types/tprogress-bar';
import getMeasureValue from '../../helpers/get-measure-value';

const ProgressBarContainerStyled = styled.div<TProgressBar>`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props: TProgressBar) => props.backgroundColor};
  outline-color: ${(props: TProgressBar) => props.borderColor};
  outline-style: ${(props: TProgressBar) => props.borderStyle};
  outline-width: ${(props: TProgressBar) => props.borderWidth};
  border-radius: ${(props: TProgressBar) => getMeasureValue(props.borderRadius, '0')};
  height: ${(props: TProgressBar) => getMeasureValue(props.height, '30px')};
  font-family: ${(props: TProgressBar) => props?.fontFamily || 'inherit'};
  transform: ${(props: TProgressBar) => (props.direction == 'ltr' ? 'none' : 'rotate(180deg)')};
  box-shadow: 0 0 2px 1px ${(props: TProgressBar) => props.borderColor};
`;

export default ProgressBarContainerStyled;
