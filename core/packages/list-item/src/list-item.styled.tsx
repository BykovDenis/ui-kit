import { styled } from 'styled-components';

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
    ${props?.margin ? `margin: ${props.margin};` : ''}
    ${props?.height ? `height: ${getMeasureValue(props.height)};` : ''}
    ${props?.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${props?.alignSelf ? `align-self: ${props.alignSelf};` : ''}
    ${props?.minHeight ? `min-height: ${getMeasureValue(props.minHeight)};` : ''}
    ${props?.border ? `border: ${props.border};` : ''}
    ${props?.borderBottom ? `border-bottom: ${props.borderBottom};` : ''}
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 98%;
        left: 50%;
        transform: translateX(-50%);
        height: 1px;
        background-color: ${props.underLineColor || 'transparent'};
        opacity: ${props.isVisibleTextUnderline ? 0.15 : 0};
    }`}
`;

export default ListItem;
