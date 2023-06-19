import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type TMiddleEllipseContainer = {
  backgroundValue: string,
  color: string,
};

const MiddleEllipseContainer =
  styled.div <
  TMiddleEllipseContainer >
  `
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items:center;
  border-radius: 6px;
  background-color: ${(props: TMiddleEllipseContainer) => props.backgroundValue};
  color: ${(props: TMiddleEllipseContainer) => props.color};
`;

export default MiddleEllipseContainer;
