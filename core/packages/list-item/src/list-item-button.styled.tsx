import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';
import * as CSS from 'csstype';

interface IListItemButton {
  height?: number | string;
  minHeight?: number | string;
  color?: string;
  hoverColor?: string;
  justifyContent?: CSS.Property.JustifyContent;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  className?: string;
  type?: any;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  padding?: string;
  fontSize?: number | string;
}

const ListItemButton = styled('button')<IListItemButton>`
  ${(props: IListItemButton) => `
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
    ${props?.height ? `height: ${getMeasureValue(props.height)};` : ''}
    ${props?.minHeight ? `min-height: ${getMeasureValue(props.minHeight)};` : ''}
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
