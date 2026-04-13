import styled from 'styled-components';
import IHeader from '../types/iheader';

const H6Styled = styled.h3<IHeader>`
  color: ${(props: IHeader) => (props.color ? props.color : 'transparent')};
  font-size: ${(props: IHeader) => props.fontSize}px;
  background-color: ${(props: IHeader) => props.backgroundColor};
  font-family: ${(props: IHeader) => props.fontFamily};
  text-transform: ${(props: IHeader) => props.textTransform ?? 'none'};
  text-decoration: ${(props: IHeader) => props.textDecoration ?? 'none'};
  ${(props: IHeader) => (props?.margin ? `margin: ${props.margin};` : '')}
  ${(props: IHeader) => (props?.padding ? `padding: ${props.padding};` : '')}
  ${(props: IHeader) => (props?.textAlign ? `text-align: ${props.textAlign};` : '')}
  ${(props: IHeader) => (props?.opacity ? `opacity: ${props.opacity};` : '')}
  ${(props: IHeader) => (props?.display ? `display: ${props.display};` : '')}
  ${(props: IHeader) => (props?.flexDirection ? `flex-direction: ${props.flexDirection};` : '')}
  ${(props: IHeader) => (props?.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
  ${(props: IHeader) => (props?.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props: IHeader) => (props?.alignSelf ? `align-self: ${props.alignSelf};` : '')}
`;

export default H6Styled;
