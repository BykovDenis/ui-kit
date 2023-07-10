import styled from 'styled-components';
import TProgressBarProgressValue from '../types/tprogress-bar-progress-value';

const ProgressValueStyled = styled.p<TProgressBarProgressValue>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${(props: TProgressBarProgressValue) =>
    props.direction == 'ltr' ? 'translate(-50%, -50%)' : 'rotate(180deg) translate(-50%, -50%)'};
  padding: 0;
  margin: 0;
  color: ${(props: TProgressBarProgressValue) => props.fillColor};
  font-size: ${(props: TProgressBarProgressValue) => props.fontSize};
  font-family: inherit;
  transform-origin: center;
`;

export default ProgressValueStyled;
