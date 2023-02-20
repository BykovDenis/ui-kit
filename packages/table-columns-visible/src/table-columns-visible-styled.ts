import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type TTableColumnsVisibleStyled = {
  color: string,
  width?: number | string,
  minHeight?: number | string,
  height?: number | string,
};

const TableColumnsVisibleStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border: 1px solid ${(props: TTableColumnsVisibleStyled) => props.color};
  width: 100%;
  min-height: ${(props: TTableColumnsVisibleStyled) => getMeasureValue(props.minHeight)};
  height: ${(props: TTableColumnsVisibleStyled) => getMeasureValue(props.height)};
  padding: 3px 5px;
  box-sizing: border-box;
  &:last-child {
    margin-right: 0;
  }
`;

export default TableColumnsVisibleStyled;
