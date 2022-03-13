import styled from 'styled-components';

import IListElement from '../types/ilist-element';

const ListItem =
  styled('button') <
  IListElement >
  `  
  box-sizing: border-box;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  width: 100%;
  height: ${(props: IListElement) => props.height}px;
  color: ${(props: IListElement) => props.color};
  font-family: inherit;
  font-size: inherit;
  line-height: 1;  
  text-align: ${(props: IListElement) => props.textAlign};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props: IListElement) => props.backgroundColor || 'transparent'};
  &:hover {
    background-color: ${(props: IListElement) => props.hoverBackgroundColor};
  }
  &:active {
    background-color: ${(props: IListElement) => props.activeBackgroundColor};
  }
  `;

export default ListItem;
