import styled from 'styled-components';
import TDropZone from '../types/tdrop-zone';

const DropZoneStyled =
  styled.div <
  TDropZone >
  `
  display: flex;
  justify-content: center;  
  outline: 1px dotted ${(props: TDropZone) => props.color};
  color: ${(props: TDropZone) => props.color};
  font-family: ${(props: TDropZone) => props.fontFamily};
  text-align: center;
  padding: ${(props: TDropZone) => (props?.padding ? props.padding : '10px 0')};
  cursor: ${(props: TDropZone) => (props?.isDragOver ? 'grabbing' : 'pointer')};
  background-color: ${(props: TDropZone) => props?.backgroundColor};
`;

export default DropZoneStyled;
