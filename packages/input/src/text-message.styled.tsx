import styled from 'styled-components';

type TTextMessage = {
  fontFamily: string;
  fontSize: number;
  color: string;
}

const TextMessage =
  styled('p') <
      TTextMessage >
  `
    ${(props: TTextMessage) => `
  display: block;
  margin: 0;
  margin-top: 3px;  
  padding: 0;
  font-family: ${props.fontFamily};
  font-size: ${props.fontSize - 2}px; 
  text-align: left;  
  color: ${props?.color};
  `}
`;

export default TextMessage;
