import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type TLabelSwitcher = {
  fontFamily: string,
  height?: number | string,
  fontSize: number | string,
  color: string,
};

const LabelSwitcher =
  styled.label <
  TLabelSwitcher >
  `
  ${(props: TLabelSwitcher) =>
    `box-sizing: border-box;
    font-family: ${props.fontFamily};
    color: ${props.color};
    font-size: ${getMeasureValue(props.fontSize, 'inherit')};
    height: ${getMeasureValue(props.height)};
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: ${props.fontSize};
    line-height: 1;
    text-align: center;
    letter-spacing: 0.39998px;
    display: flex;
    padding: 10px;
    min-width: 50px;
    width: 50%;
    cursor: pointer;`}
`;

export default LabelSwitcher;
