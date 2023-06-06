import './index.css';

import React from 'react';

import Button from '../../../button/src/button.styled';
import TButton from '../../../button/types/tbutton';
import getCssVariables from '../../../styles/src/get-css-variables';

interface IDatepickerButtonNavigate extends TButton {
  children?: React.ReactNode;
  color: string;
  fontFamily: string;
  fontSize: number;
  id?: any;
  onClick?: (evt: any) => void;
}

const DatepickerButtonNavigate: React.FunctionComponent<IDatepickerButtonNavigate> = (
  props: IDatepickerButtonNavigate
) => {
  const cssVariables: any = getCssVariables();
  return (
    <Button
      id={props.id}
      fontSize={props.fontSize}
      fontFamily={props.fontFamily}
      className="button"
      color={props.color}
      width={17}
      height={17}
      onClick={props?.onClick}
      children={props?.children}
      cssVariables={cssVariables}
    />
  );
};

export default DatepickerButtonNavigate;
