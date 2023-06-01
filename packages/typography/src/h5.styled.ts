import styled from 'styled-components';
import IHeader from '../types/iheader';

const H5Styled =
  styled.h3 <
  IHeader >
  `
  color: ${(props: IHeader) => (props.color ? props.color : 'transparent')};
  font-size: ${(props: IHeader) => props.fontSize}px;
  background-color: ${(props: IHeader) => props.backgroundColor};
  font-family: ${(props: IHeader) => props.fontFamily};
  text-transform: ${(props: IHeader) => props.textTransform ?? 'none'};
  text-decoration: ${(props: IHeader) => props.textDecoration ?? 'none'};
`;

export default H5Styled;
