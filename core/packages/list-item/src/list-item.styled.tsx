import styled from 'styled-components';

import IListElement from '../types/ilist-element';
import getMeasureValue from '../../helpers/get-measure-value';

const ListItem = styled('li')<IListElement>`
  ${(props: IListElement) => `
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props.justifyContent};
    width: 100%;
    color: ${props.color};
    font-family: inherit;
    font-size: ${getMeasureValue(props.fontSize, 'inherit')};
    line-height: 1;
    text-align: ${props.textAlign};
    cursor: pointer;
    background-color: ${props.backgroundColor || 'transparent'};
    border-radius: 4px;
    padding: ${props.padding || 'initial'};
    ${props?.height ? `height: ${getMeasureValue(props.height)};` : ''}
    ${props?.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${props?.alignSelf ? `align-items: ${props.alignSelf};` : ''}
    ${props?.minHeight ? `min-height: ${getMeasureValue(props.minHeight)};` : ''}
      &:after {
      display: block;
      position: absolute;
      bottom: 0;
      width: 98%;
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      content: '';
      background-color: ${props.underLineColor || 'transparent'};
    }`}
`;

export default ListItem;
