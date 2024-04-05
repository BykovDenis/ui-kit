import styled from 'styled-components';

type ToggleContainerProps = {
  backgroundColor: string;
};

const ToggleContainer = styled.div<ToggleContainerProps>`
  background-color: ${(props: ToggleContainerProps) => props.backgroundColor};
  position: absolute;
  z-index: 10001;
  top: 100%;
  left: 0;
  width: 100%;
`;

export default ToggleContainer;
