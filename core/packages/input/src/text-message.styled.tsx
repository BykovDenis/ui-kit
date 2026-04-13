import { styled } from 'styled-components';

interface ITextMessage {
  fontFamily: string;
  fontSize: number;
  color: string;
}

const TextMessage = styled('p')<ITextMessage>`
  position: absolute;
  top: 100%;
  left: 0;
  display: block;
  margin: 0;
  margin-top: 3px;
  padding: 0;
  font-family: ${(props: ITextMessage) => props.fontFamily};
  font-size: ${(props: ITextMessage) => props.fontSize - 2}px;
  text-align: left;
  color: ${(props: ITextMessage) => props?.color};
`;

export default TextMessage;
