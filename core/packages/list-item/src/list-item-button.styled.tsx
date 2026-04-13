import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';
import IListElement from "../types/ilist-element";

const ListItemButton = styled('button')<IListElement>`
  ${(props: IListElement) => `
    box-sizing: border-box;  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props.justifyContent};  
    width: 100%;
    color: ${props.color};
    font-family: inherit;
    font-size: ${getMeasureValue(props.fontSize, 'inherit')};
    line-height: 1;  
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props.backgroundColor || 'transparent'};
    padding: ${props.padding || 'initial'};
    ${props?.margin ? `margin: ${props.margin};` : ''}
    ${props?.height ? `height: ${getMeasureValue(props.height)};` : ''}
    ${props?.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${props?.alignSelf ? `align-self: ${props.alignSelf};` : ''}
    ${props?.minHeight ? `min-height: ${getMeasureValue(props.minHeight)};` : ''}
    ${props?.border ? `border: ${props.border};` : ''}
    ${props?.borderBottom ? `border-bottom: ${props.borderBottom};` : ''}
    &:hover {
      background-color: ${props.hoverBackgroundColor};
      color: ${props.hoverColor};
    }
    &:active {
      background-color: ${props.activeBackgroundColor};
      color: ${props.hoverColor};
    }`}
`;

export default ListItemButton;
