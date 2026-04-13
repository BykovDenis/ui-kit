import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';
import CSS from "csstype";

type TMultiSelectStyled = {
  width?: CSS.Property.Width,
  height?: number | string,
  isExistLabel?: boolean,
  borderColor?: string,
};

const MultiSelectStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: ${(props: TMultiSelectStyled) => getMeasureValue(props.height)};
  padding-top: ${(props: TMultiSelectStyled) => (props.isExistLabel ? '15px' : '3px')};
  border-right: 1px solid ${(props: TMultiSelectStyled) => props.borderColor};
  box-sizing: border-box;
  overflow-y: auto;
  &:last-child {
    margin-right: 0;
  }
`;

export default MultiSelectStyled;
