import styled from 'styled-components';

import ISelect from '../types/iselect';

const SelectContainer = styled('div')`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  width: ${(props: ISelect) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: ISelect) => (props?.height ? `${props?.height + 5}px` : 'calc(100% + 5px)')};
  line-height: 1;
`;

export default SelectContainer;
