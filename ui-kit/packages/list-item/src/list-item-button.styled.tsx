import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

interface IListItemButton {
  height?: number;
  color?: string;
  hoverColor?: string;
  textAlign?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  className?: string;
  type?: any;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  padding?: string;
  fontSize?: number | string;
}

const ListItemButton =
  styled('button') <
  IListItemButton >
  `  
  box-sizing: border-box;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  width: 100%;
  height: ${(props: IListItemButton) => props.height}px;
  color: ${(props: IListItemButton) => props.color};
  font-family: inherit;
  font-size: ${(props: IListItemButton) => getMeasureValue(props.fontSize, 'inherit')};
  line-height: 1;  
  text-align: ${(props: IListItemButton) => props.textAlign};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props: IListItemButton) => props.backgroundColor || 'transparent'};
  padding: ${(props: IListItemButton) => props.padding || 'initial'};
  &:hover {
    background-color: ${(props: IListItemButton) => props.hoverBackgroundColor};
    color: ${(props: IListItemButton) => props.hoverColor};
  }
  &:active {
    background-color: ${(props: IListItemButton) => props.activeBackgroundColor};
    color: ${(props: IListItemButton) => props.hoverColor};
  }
  `;

export default ListItemButton;
