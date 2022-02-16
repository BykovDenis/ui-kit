import styled from 'styled-components';

import IListElement from '../types/ilist-element';

const ListItem =
  styled('li') <
  IListElement >
  `  
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
  border-bottom: 1px solid ${(props: IListElement) => props.underLineColor};  
  cursor: pointer;
  background-color: ${(props: IListElement) => props.backgroundColor || 'transparent'};
  &:hover {
    border-bottom: 1px solid ${(props: IListElement) => props.hoverColor};
    background-color: ${(props: IListElement) => props.hoverBackgroundColor};
  }  
`;

export default ListItem;
