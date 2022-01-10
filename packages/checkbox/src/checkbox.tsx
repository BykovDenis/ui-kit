import styled from 'styled-components';

import hexToRgb from '../../helpers/hex-to-rgb';
import ICheckbox from '../types/icheckbox';

const CheckIcon: string =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxtYXNrIGlkPSJwYXRoLTEtaW5zaWRlLTFfMTQ2XzUzIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgPHBhdGggZD0iTTQuNDU0NTUgMTEuMDc0NkwxLjExMzY0IDYuNjg2NTdMMCA4LjE0OTI1TDQuNDU0NTUgMTRMMTQgMS40NjI2OUwxMi44ODY0IDBMNC40NTQ1NSAxMS4wNzQ2WiIvPgogICAgPC9tYXNrPgogICAgPHBhdGggZD0iTTQuNDU0NTUgMTEuMDc0NkwxLjExMzY0IDYuNjg2NTdMMCA4LjE0OTI1TDQuNDU0NTUgMTRMMTQgMS40NjI2OUwxMi44ODY0IDBMNC40NTQ1NSAxMS4wNzQ2WiIgZmlsbD0id2hpdGUiLz4KICAgIDxwYXRoIGQ9Ik00LjQ1NDU1IDExLjA3NDZMMi4wNjc2MyAxMi44OTE5TDQuNDU0NTQgMTYuMDI3TDYuODQxNDYgMTIuODkxOUw0LjQ1NDU1IDExLjA3NDZaTTEuMTEzNjQgNi42ODY1N0wzLjUwMDU1IDQuODY5MjZMMS4xMTM2NCAxLjczNDJMLTEuMjczMjggNC44NjkyNkwxLjExMzY0IDYuNjg2NTdaTTAgOC4xNDkyNUwtMi4zODY5MiA2LjMzMTk0TC0zLjc3MDU1IDguMTQ5MjVMLTIuMzg2OTIgOS45NjY1N0wwIDguMTQ5MjVaTTQuNDU0NTUgMTRMMi4wNjc2MyAxNS44MTczTDQuNDU0NTUgMTguOTUyNEw2Ljg0MTQ2IDE1LjgxNzNMNC40NTQ1NSAxNFpNMTQgMS40NjI2OUwxNi4zODY5IDMuMjhMMTcuNzcwNiAxLjQ2MjY5TDE2LjM4NjkgLTAuMzU0NjI1TDE0IDEuNDYyNjlaTTEyLjg4NjQgMEwxNS4yNzMzIC0xLjgxNzMxTDEyLjg4NjQgLTQuOTUyMzdMMTAuNDk5NCAtMS44MTczMUwxMi44ODY0IDBaTTYuODQxNDYgOS4yNTczMkwzLjUwMDU1IDQuODY5MjZMLTEuMjczMjggOC41MDM4OEwyLjA2NzYzIDEyLjg5MTlMNi44NDE0NiA5LjI1NzMyWk0tMS4yNzMyOCA0Ljg2OTI2TC0yLjM4NjkyIDYuMzMxOTRMMi4zODY5MiA5Ljk2NjU3TDMuNTAwNTUgOC41MDM4OEwtMS4yNzMyOCA0Ljg2OTI2Wk0tMi4zODY5MiA5Ljk2NjU3TDIuMDY3NjMgMTUuODE3M0w2Ljg0MTQ2IDEyLjE4MjdMMi4zODY5MiA2LjMzMTk0TC0yLjM4NjkyIDkuOTY2NTdaTTYuODQxNDYgMTUuODE3M0wxNi4zODY5IDMuMjhMMTEuNjEzMSAtMC4zNTQ2MjVMMi4wNjc2MyAxMi4xODI3TDYuODQxNDYgMTUuODE3M1pNMTYuMzg2OSAtMC4zNTQ2MjVMMTUuMjczMyAtMS44MTczMUwxMC40OTk0IDEuODE3MzFMMTEuNjEzMSAzLjI4TDE2LjM4NjkgLTAuMzU0NjI1Wk0xMC40OTk0IC0xLjgxNzMxTDIuMDY3NjMgOS4yNTczMkw2Ljg0MTQ2IDEyLjg5MTlMMTUuMjczMyAxLjgxNzMxTDEwLjQ5OTQgLTEuODE3MzFaIiBtYXNrPSJ1cmwoI3BhdGgtMS1pbnNpZGUtMV8xNDZfNTMpIi8+Cjwvc3ZnPgo=';

const CheckboxStyled =
  styled.input.attrs({ type: 'checkbox' }) <
  ICheckbox >
  `
    display: none;
  & + label:before {
    box-sizing: border-box;
    display: block;
    content: '';
    height: 20px;
    width: 20px;
    border: 2px solid ${(props: ICheckbox) => hexToRgb(props.color, 0.85)};    
    border-radius: 3px;
    margin-right: 5px;
    background-color: #ffffff;
  }  
  &:disabled + label:before {
    display: block;
    content: '';
    height: 20px;
    width: 20px;
    background-color: #bdbdbd;
  }
  &:checked + label:before {
    display: block;
    content: '';
    height: 20px;
    width: 20px;
    background-color: ${(props: ICheckbox) => props.backgroundColor};
    background-image: url('${CheckIcon}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;    
  }
  &:disabled:checked + label:before {
    display: block;
    content: '';
    height: 20px;
    width: 20px;
    background-color: #bdbdbd;
    background-image: url('${CheckIcon}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`;
export default CheckboxStyled;
