import styled from 'styled-components';

interface IDivider {
  color: string;
}

const Divider = styled('hr')`
  width: 240px;
  height: 1px;
  background-color: ${(props: IDivider) => props.color};
  border: none;
  margin: 5px 4px;
  margin-bottom: 0;
`;

export default Divider;
