import './index.css';

import React from 'react';

import Button from '../../../button/src/button.styled';
import TButton from '../../../button/types/tbutton';

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
  return (
    <Button
      id={props.id}
      type="button"
      fontSize={props.fontSize}
      fontFamily={props.fontFamily}
      className="button"
      color={props.color}
      width={17}
      height={20}
      onClick={props?.onClick}
      children={props?.children}
    />
  );
};

export default DatepickerButtonNavigate;
