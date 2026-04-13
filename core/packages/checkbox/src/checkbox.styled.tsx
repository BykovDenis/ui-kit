import CSS from 'csstype';
import { styled } from 'styled-components';

const CheckIcon: string =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxtYXNrIGlkPSJwYXRoLTEtaW5zaWRlLTFfMTQ2XzUzIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgPHBhdGggZD0iTTQuNDU0NTUgMTEuMDc0NkwxLjExMzY0IDYuNjg2NTdMMCA4LjE0OTI1TDQuNDU0NTUgMTRMMTQgMS40NjI2OUwxMi44ODY0IDBMNC40NTQ1NSAxMS4wNzQ2WiIvPgogICAgPC9tYXNrPgogICAgPHBhdGggZD0iTTQuNDU0NTUgMTEuMDc0NkwxLjExMzY0IDYuNjg2NTdMMCA4LjE0OTI1TDQuNDU0NTUgMTRMMTQgMS40NjI2OUwxMi44ODY0IDBMNC40NTQ1NSAxMS4wNzQ2WiIgZmlsbD0id2hpdGUiLz4KICAgIDxwYXRoIGQ9Ik00LjQ1NDU1IDExLjA3NDZMMi4wNjc2MyAxMi44OTE5TDQuNDU0NTQgMTYuMDI3TDYuODQxNDYgMTIuODkxOUw0LjQ1NDU1IDExLjA3NDZaTTEuMTEzNjQgNi42ODY1N0wzLjUwMDU1IDQuODY5MjZMMS4xMTM2NCAxLjczNDJMLTEuMjczMjggNC44NjkyNkwxLjExMzY0IDYuNjg2NTdaTTAgOC4xNDkyNUwtMi4zODY5MiA2LjMzMTk0TC0zLjc3MDU1IDguMTQ5MjVMLTIuMzg2OTIgOS45NjY1N0wwIDguMTQ5MjVaTTQuNDU0NTUgMTRMMi4wNjc2MyAxNS44MTczTDQuNDU0NTUgMTguOTUyNEw2Ljg0MTQ2IDE1LjgxNzNMNC40NTQ1NSAxNFpNMTQgMS40NjI2OUwxNi4zODY5IDMuMjhMMTcuNzcwNiAxLjQ2MjY5TDE2LjM4NjkgLTAuMzU0NjI1TDE0IDEuNDYyNjlaTTEyLjg4NjQgMEwxNS4yNzMzIC0xLjgxNzMxTDEyLjg4NjQgLTQuOTUyMzdMMTAuNDk5NCAtMS44MTczMUwxMi44ODY0IDBaTTYuODQxNDYgOS4yNTczMkwzLjUwMDU1IDQuODY5MjZMLTEuMjczMjggOC41MDM4OEwyLjA2NzYzIDEyLjg5MTlMNi44NDE0NiA5LjI1NzMyWk0tMS4yNzMyOCA0Ljg2OTI2TC0yLjM4NjkyIDYuMzMxOTRMMi4zODY5MiA5Ljk2NjU3TDMuNTAwNTUgOC41MDM4OEwtMS4yNzMyOCA0Ljg2OTI2Wk0tMi4zODY5MiA5Ljk2NjU3TDIuMDY3NjMgMTUuODE3M0w2Ljg0MTQ2IDEyLjE4MjdMMi4zODY5MiA2LjMzMTk0TC0yLjM4NjkyIDkuOTY2NTdaTTYuODQxNDYgMTUuODE3M0wxNi4zODY5IDMuMjhMMTEuNjEzMSAtMC4zNTQ2MjVMMi4wNjc2MyAxMi4xODI3TDYuODQxNDYgMTUuODE3M1pNMTYuMzg2OSAtMC4zNTQ2MjVMMTUuMjczMyAtMS44MTczMUwxMC40OTk0IDEuODE3MzFMMTEuNjEzMSAzLjI4TDE2LjM4NjkgLTAuMzU0NjI1Wk0xMC40OTk0IC0xLjgxNzMxTDIuMDY3NjMgOS4yNTczMkw2Ljg0MTQ2IDEyLjg5MTlMMTUuMjczMyAxLjgxNzMxTDEwLjQ5OTQgLTEuODE3MzFaIiBtYXNrPSJ1cmwoI3BhdGgtMS1pbnNpZGUtMV8xNDZfNTMpIi8+Cjwvc3ZnPgo=';

const CheckBoxDisabledIcon: string =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWFzayBpZD0icGF0aC0xLWluc2lkZS0xXzE0Nl81MyIgZmlsbD0iIzMzMzMzMyI+PHBhdGggZD0iTTQuNDU0NTUgMTEuMDc0NkwxLjExMzY0IDYuNjg2NTdMMCA4LjE0OTI1TDQuNDU0NTUgMTRMMTQgMS40NjI2OUwxMi44ODY0IDBMNC40NTQ1NSAxMS4wNzQ2WiIgLz48L21hc2s+PHBhdGggZD0iTTQuNDU0NTUgMTEuMDc0NkwxLjExMzY0IDYuNjg2NTdMMCA4LjE0OTI1TDQuNDU0NTUgMTRMMTQgMS40NjI2OUwxMi44ODY0IDBMNC40NTQ1NSAxMS4wNzQ2WiIgZmlsbD0iIzMzMzMzMyIgLz48cGF0aCBkPSJNNC40NTQ1NSAxMS4wNzQ2TDIuMDY3NjMgMTIuODkxOUw0LjQ1NDU0IDE2LjAyN0w2Ljg0MTQ2IDEyLjg5MTlMNC40NTQ1NSAxMS4wNzQ2Wk0xLjExMzY0IDYuNjg2NTdMMy41MDA1NSA0Ljg2OTI2TDEuMTEzNjQgMS43MzQyTC0xLjI3MzI4IDQuODY5MjZMMS4xMTM2NCA2LjY4NjU3Wk0wIDguMTQ5MjVMLTIuMzg2OTIgNi4zMzE5NEwtMy43NzA1NSA4LjE0OTI1TC0yLjM4NjkyIDkuOTY2NTdMMCA4LjE0OTI1Wk00LjQ1NDU1IDE0TDIuMDY3NjMgMTUuODE3M0w0LjQ1NDU1IDE4Ljk1MjRMNi44NDE0NiAxNS44MTczTDQuNDU0NTUgMTRaTTE0IDEuNDYyNjlMMTYuMzg2OSAzLjI4TDE3Ljc3MDYgMS40NjI2OUwxNi4zODY5IC0wLjM1NDYyNUwxNCAxLjQ2MjY5Wk0xMi44ODY0IDBMMTUuMjczMyAtMS44MTczMUwxMi44ODY0IC00Ljk1MjM3TDEwLjQ5OTQgLTEuODE3MzFMMTIuODg2NCAwWk02Ljg0MTQ2IDkuMjU3MzJMMy41MDA1NSA0Ljg2OTI2TC0xLjI3MzI4IDguNTAzODhMMi4wNjc2MyAxMi44OTE5TDYuODQxNDYgOS4yNTczMlpNLTEuMjczMjggNC44NjkyNkwtMi4zODY5MiA2LjMzMTk0TDIuMzg2OTIgOS45NjY1N0wzLjUwMDU1IDguNTAzODhMLTEuMjczMjggNC44NjkyNlpNLTIuMzg2OTIgOS45NjY1N0wyLjA2NzYzIDE1LjgxNzNMNi44NDE0NiAxMi4xODI3TDIuMzg2OTIgNi4zMzE5NEwtMi4zODY5MiA5Ljk2NjU3Wk02Ljg0MTQ2IDE1LjgxNzNMMTYuMzg2OSAzLjI4TDExLjYxMzEgLTAuMzU0NjI1TDIuMDY3NjMgMTIuMTgyN0w2Ljg0MTQ2IDE1LjgxNzNaTTE2LjM4NjkgLTAuMzU0NjI1TDE1LjI3MzMgLTEuODE3MzFMMTAuNDk5NCAxLjgxNzMxTDExLjYxMzEgMy4yOEwxNi4zODY5IC0wLjM1NDYyNVpNMTAuNDk5NCAtMS44MTczMUwyLjA2NzYzIDkuMjU3MzJMNi44NDE0NiAxMi44OTE5TDE1LjI3MzMgMS44MTczMUwxMC40OTk0IC0xLjgxNzMxWiIgbWFzaz0idXJsKCNwYXRoLTEtaW5zaWRlLTFfMTQ2XzUzKSIvPjwvc3ZnPg==';

type TCheckboxStylish = {
  backgroundColor: string;
  indeterminate: boolean;
  isIconDisabled?: boolean;
  color: CSS.Property.Color;
  borderColor: string;
  disabledColor: string;
};

const Checkbox = styled.input.attrs({ type: 'checkbox' })<TCheckboxStylish>`
  ${(props: TCheckboxStylish) => `
      display: none;
    & + label:before {
      box-sizing: border-box;
      display:  ${props.isIconDisabled === true ? 'none' : 'block'};
      content: '';
      height: 20px;
      width: 20px;
      min-width: 20px;
      min-height: 20px;
      border: 2px solid ${props.borderColor};    
      border-radius: 3px;
      margin-right: 5px;
      background-color: ${props?.backgroundColor ? props.backgroundColor : props.borderColor};
    }  
    &:disabled + label:before {
      display:  ${props.isIconDisabled === true ? 'none' : 'block'};
      content: '';
      height: 20px;
      width: 20px;
      background-color: ${props?.backgroundColor};
      border-color: ${props.borderColor}; 
    }
    &:checked + label:before {
      display:  ${props.isIconDisabled === true ? 'none' : 'block'};
      content: '';
      height: 20px;
      width: 20px;
      background-color: ${props.backgroundColor};
      background-image: url('${CheckIcon}');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;    
    }
    &:not(:checked) {
      & + label:before {
        background: ${props.indeterminate ? props.backgroundColor : 'none'};
      }
      & + label:after {
        position: absolute;
        display:  ${props.isIconDisabled === true ? 'none' : 'block'};
        content: '';
        height: 2px;
        width: 16px;
        background: ${props.indeterminate ? '#ffffff' : 'none'};
        left: 2px;
      }
    }
    &:disabled:not(:checked) + label:before {
      background-color: ${props?.backgroundColor};
    }
    ${
      props.indeterminate
        ? `&:disabled:not(:checked) + label:after {
      background-color: #333333;
    };`
        : ''
    }
    &:disabled:checked + label:before {
      display:  ${props.isIconDisabled === true ? 'none' : 'block'};
      content: '';
      height: 20px;
      width: 20px;
      background-color: ${props?.backgroundColor};
      background-image: url('${CheckBoxDisabledIcon}');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  `}
`;

export default Checkbox;
