import styled from 'styled-components';

type LabelContainer = {
  isExistValue: boolean;
  backgroundColor: string;
  height?: number;
};

const LabelContainer = styled('div')<LabelContainer>`
  background-color: ${(props: LabelContainer) => (props.isExistValue ? props.backgroundColor : 'transparent')};
  padding-left: 4px;
  padding-right: 4px;
  display: block;
  position: absolute;
  top: ${(props: LabelContainer) =>
    props.isExistValue ? '-10px' : props?.height ? `${Math.round(props?.height / 2)}px` : '50%'};
  left: 5px;
  z-index: 1;
  transform: translateY(${(props: LabelContainer) => (props.isExistValue ? 0 : '-50%')}) rotate(360deg);
  border-radius: 3px;
  transition: all 100ms ease-in-out;
`;

export default LabelContainer;
