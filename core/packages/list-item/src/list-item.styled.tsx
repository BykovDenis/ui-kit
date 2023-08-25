import styled from 'styled-components';

import IListElement from '../types/ilist-element';
import getMeasureValue from '../../helpers/get-measure-value';

const ListItem =
  styled('li') <
  IListElement >
  `  
    position: relative;  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props: IListElement) => (props.justifyContent ? 'flex-start' : 'center')};  
    width: 100%;
    color: ${(props: IListElement) => props.color};
    font-family: inherit;
    font-size: ${(props: IListElement) => getMeasureValue(props.fontSize, 'inherit')};
    line-height: 1;  
    text-align: ${(props: IListElement) => props.textAlign};  
    cursor: pointer;
    background-color: ${(props: IListElement) => props.backgroundColor || 'transparent'};
    border-radius: 4px;
    padding: ${(props: IListElement) => props.padding || 'initial'};
    ${(props: IListElement) => props?.height ? `height: ${getMeasureValue(props.height)};` : ''}
    ${(props: IListElement) => props?.minHeight ? `min-height: ${getMeasureValue(props.minHeight)};` : ''}
    &:after {
      display: block;
      position: absolute;
      bottom: 0;
      width: 98%;
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      content: '';
      background-color: ${(props: IListElement) => props.underLineColor || 'transparent'};
    }
  `;

export default ListItem;
