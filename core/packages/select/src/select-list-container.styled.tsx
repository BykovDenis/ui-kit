import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type TSelectListContainer = {
  backgroundColor: string;
  outlinedColor: string;
  top: number;
  left: number | string;
  width: number | string;
};

const SelectListContainer = styled('div')<TSelectListContainer>`
  ${(props: TSelectListContainer) => `
  left: ${getMeasureValue(props?.left, '100%')};
  top: ${getMeasureValue(props?.top + 6, '100%')};
  background-color: ${props.backgroundColor};
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px ${props.outlinedColor}, 0px 4px 11px ${props.outlinedColor};
  margin-bottom: 5px;
  margin-top: -4px;
  position: absolute;
  width: ${getMeasureValue(props?.width, '100%')};
  z-index: 10001;
  box-sizing: border-box;
  max-height: 500px;
  overflow-y: auto;
  `}
`;

export default SelectListContainer;
