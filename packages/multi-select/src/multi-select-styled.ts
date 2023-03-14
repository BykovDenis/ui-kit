import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type TMultiSelectStyled = {
  color: string,
  width?: number | string,
  height?: number | string,
};

const MultiSelectStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border: 1px solid ${(props: TMultiSelectStyled) => props.color};
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  height: ${(props: TMultiSelectStyled) => getMeasureValue(props.height)};
  padding: 3px 5px;
  box-sizing: border-box;
  overflow-y: auto;
  &:last-child {
    margin-right: 0;
  }
`;

export default MultiSelectStyled;
