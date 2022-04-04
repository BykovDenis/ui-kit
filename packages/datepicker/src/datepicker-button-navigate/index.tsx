import './index.css';

import React from 'react';

import Button from '../../../button/src/button.styled';
import IButton from '../../../button/types/ibutton';

interface IDatepickerButtonNavigate extends IButton {
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
      fontSize={props.fontSize}
      fontFamily={props.fontFamily}
      className="button"
      color={props.color}
      width={17}
      height={17}
      onClick={props?.onClick}
      children={props?.children}
    />
  );
};

export default DatepickerButtonNavigate;
