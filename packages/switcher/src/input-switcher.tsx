import styled from 'styled-components';

import hexToRgb from '../../helpers/hex-to-rgb';

interface IInputSwitcher {
  backgroundColor?: string;
  color?: string;
  position: string;
}

const InputSwitcher =
  styled.input <
  IInputSwitcher >
  `
  display: none;
  & + label {
    transition: all 0.2s ease-out 0.1s;
    background-color: transparent;
    border-radius: ${(props: IInputSwitcher) => (props.position === 'left' ? '3px 0 0 3px' : '0 3px 3px 0')}
  }
  &:checked + label {
    transition: all 0.2s ease-out 0.1s;
    background-color: ${(props: IInputSwitcher) => props.backgroundColor ?? '#42a5f5'};
    color: ${(props: IInputSwitcher) => props.color ?? '#ffffff'};;
    &:hover {
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
      background-color: ${(props: IInputSwitcher) =>
        props.backgroundColor ? hexToRgb(props.backgroundColor, 0.85) : hexToRgb('#42a5f5', 0.85)};
    }
    &:active {
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
      background-color: ${(props: IInputSwitcher) =>
        props.backgroundColor ? hexToRgb(props.backgroundColor, 0.5) : hexToRgb('#42a5f5', 0.5)};
    }    
  }
  &:disabled + label {
    background-color: #bdbdbd;
    color: white;
    filter: none;
    &:hover {
      background-color: #bdbdbd;
      color: white;
      filter: none;
    }
  }
`;
export default InputSwitcher;
