import styled from 'styled-components';

import hexToRgb from '../../helpers/hex-to-rgb';
import CheckIcon from './check-icon.svg';
import ICheckbox from './icheckbox';

const CheckboxStyled =
  styled.input.attrs({ type: 'checkbox' }) <
  ICheckbox >
  `
    display: none;
  & + label:before {
    display: block;
    content: '';
    height: 16px;
    width: 16px;
    border: 2px solid ${(props: ICheckbox) => {
      console.log(props.theme.color);
      return hexToRgb(props.theme.color, 0.85);
    }};
    box-sizing: border-box;
    border-radius: 3px;
    margin-right: 5px;
    background-color: #ffffff;
  }  
  &:disabled + label:before {
    display: block;
    content: '';
    height: 16px;
    width: 16px;
    background-color: #bdbdbd;
    border: 2px solid #bdbdbd;
  }
  &:checked + label:before {
    display: block;
    content: '';
    height: 16px;
    width: 16px;
    background-color: ${(props: ICheckbox) => props.theme.backgroundColor};
    background-image: url('${CheckIcon}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;    
  }
`;
export default CheckboxStyled;
