import styled from 'styled-components';
import CSS from "csstype";

type TRadioStylish = {
  backgroundColor: string,
  indeterminate: boolean,
  isIconDisabled?: boolean,
  color: CSS.Property.Color,
  borderColor: string,
  disabledColor: string,
};

const RadioStyled =
  styled.input.attrs({ type: 'radio' }) <
  TRadioStylish >
  `
    display: none;
  & + label:before {
    box-sizing: border-box;
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    height: 20px;
    width: 20px;
    min-width: 20px;
    min-height: 20px;
    border: 2px solid ${(props: TRadioStylish) => props.borderColor};    
    border-radius: 50%;
    margin-right: 5px;
  }  
  &:disabled + label:before {
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    background-color: #bdbdbd;
  }
  &:checked + label:before {
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;    
  }
  &:checked + label:after {
    position: absolute;
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 6px;
    background-color: ${(props: TRadioStylish) => props.backgroundColor};
  }
  &:not(:checked) {
    & + label:before {
      background: none;
    }
  }
  &:disabled:checked + label:after {
    position: absolute;
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 6px;
    background-color: ${(props: TRadioStylish) => props.disabledColor};
  }
`;
export default RadioStyled;
