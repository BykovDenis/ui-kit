import styled from 'styled-components';
import TProgressBar from '../types/tprogress-bar';
import TProgressBarFillContainer from '../types/tprogress-bar-fill-container';
import getMeasureValue from '../../helpers/get-measure-value';

const ProgressBarFillContainerStyled = styled.div<TProgressBarFillContainer>`
  height: 100%;
  box-sizing: border-box;
  width: ${(props: TProgressBarFillContainer) => props.progress}%;
  background: ${(props: TProgressBarFillContainer) => props.fillColor};
  border-radius: ${(props: TProgressBarFillContainer) => getMeasureValue(props.borderRadius, '0')};
  transition: ${(props: TProgressBarFillContainer) => (props.isAnimate ? 'width 900ms ease-in-out 0s' : 'none')};
`;

export default ProgressBarFillContainerStyled;
