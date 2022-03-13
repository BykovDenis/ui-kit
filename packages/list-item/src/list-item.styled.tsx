import styled from 'styled-components';

import IListElement from '../types/ilist-element';

const ListItem =
  styled('li') <
  IListElement >
  `  
    position: relative;  
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
    cursor: pointer;
    background-color: ${(props: IListElement) => props.backgroundColor || 'transparent'};
    border-radius: 4px;
    &:hover {
      background-color: ${(props: IListElement) => props.hoverBackgroundColor};
    }
    &:after {
      display: block;
      position: absolute;
      bottom: 0;
      width: 98%;
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      content: '';
      background-color: ${(props: IListElement) => props.underLineColor};
    }
    &:hover:after {
      background-color: ${(props: IListElement) => props.hoverColor};
    }
  `;

export default ListItem;
