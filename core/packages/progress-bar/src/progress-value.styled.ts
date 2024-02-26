import styled from 'styled-components';
import TProgressBarProgressValue from '../types/tprogress-bar-progress-value';
import getMeasureValue from '../../helpers/get-measure-value';

const ProgressValueStyled = styled.div<TProgressBarProgressValue>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: fit-content;
  height: ${(props: TProgressBarProgressValue) => getMeasureValue(props.fontSize)};
  transform: ${(props: TProgressBarProgressValue) =>
    props.direction == 'ltr' ? 'translate(-50%, -50%)' : 'rotate(180deg) translate(-50%, -50%)'};
  padding: 0;
  margin: 0;
  color: ${(props: TProgressBarProgressValue) => props.fillColor};
  font-size: ${(props: TProgressBarProgressValue) => getMeasureValue(props.fontSize)};
  font-family: inherit;
  transform-origin: center;
`;

export default ProgressValueStyled;
