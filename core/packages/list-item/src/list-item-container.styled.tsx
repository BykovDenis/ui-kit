import styled from 'styled-components';

import IListElement from '../types/ilist-element';

const ListItemContainer =
  styled('div') <
  IListElement >
  `
    position: relative;
    background-color: transparent;
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
      opacity: ${(props: IListElement) => props.isVisibleTextUnderline ? 0.15 : 0};
    }
    &:hover:after {
      background-color: ${(props: IListElement) => props.hoverColor};
    }  
`;

export default ListItemContainer;
