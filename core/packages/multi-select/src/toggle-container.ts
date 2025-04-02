import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type ToggleContainerProps = {
  backgroundColor: string;
  top: number;
  left: number | string;
  width: number | string;
};

const ToggleContainer = styled.div<ToggleContainerProps>`
  ${(props: ToggleContainerProps) => `
    left: ${getMeasureValue(props?.left, '100%')};
    top: ${getMeasureValue(props?.top + 6, '100%')};
    background-color: ${(props: ToggleContainerProps) => props.backgroundColor};
    position: absolute;
    z-index: 10001;
    width: ${getMeasureValue(props?.width, '100%')};
  `}
`;

export default ToggleContainer;
