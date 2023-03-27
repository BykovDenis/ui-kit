import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type TMultiSelectStyled = {
  width?: number | string,
  height?: number | string,
  isExistLabel?: boolean,
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
  box-sizing: border-box;
  overflow-y: auto;
  &:last-child {
    margin-right: 0;
  }
`;

export default MultiSelectStyled;
