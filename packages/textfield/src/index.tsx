import React, { useEffect, useState } from 'react';

import Input from '../../input/src';
import Label from '../../label/src';
import ITextField from '../types/itext-field';
import LabelContainer from './label-container.styled';
import TextFieldContainer from './text-field-container.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const TextField: React.FunctionComponent<ITextField> = (props: ITextField) => {
  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const cssVariables: any = getCssVariables();

  useEffect(() => {
    if (props?.value > '') {
      setIsExistValue(true);
    } else {
      setIsExistValue(false);
    }
  }, [props.value]);

  const onInputDelete = (name: string, value: string) => {
    props?.onRemove(name, value);
    setIsExistValue(false);
  };

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    if (element?.value > '') {
      setIsExistValue(true);
    }
  };

  const onInputFocus = () => {
    setIsFocus(true);
  };

  const onInputBlur = () => {
    setIsFocus(false);
    if (props?.value) {
      setIsExistValue(true);
    } else {
      setIsExistValue(false);
    }
  };

    const fontSize: number = props?.fontSize ?? cssVariables.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;
    const backgroundColor: string = props.disabled ? cssVariables.inactiveBackgroundColor : cssVariables.mainBackgroundColor;
    const color: string = props?.disabled ? cssVariables.inactiveFontColor : props.color;

    return (
      <TextFieldContainer width={props?.width} height={props?.height}>
        <LabelContainer
          backgroundColor={backgroundColor}
          isExistValue={isExistValue || isFocus}
          isExistTextMessageHelper={props?.textMessage > ''}
        >
          <Label
            htmlFor={props.id}
            fontSize={labelFontSize}
            isFocus={isFocus}
            isReadOnly={props.isReadOnly}
            fontWeight={props?.fontWeight}
            disabled={props.disabled}
            error={props?.error}
            color={color}
            backgroundColor="transparent"
          >
            {props?.label}
          </Label>
        </LabelContainer>
        <Input
          {...props}
          id={props.id}
          name={props.name}
          height={props?.height}
          width={props?.width}
          onChange={props.onChange}
          onRemove={onInputDelete}
          onInput={onInput}
          variant={props?.variant}
          value={props?.value}
          textAlign={props?.textAlign}
          fontSize={fontSize}
          baseFontSize={props?.baseFontSize}
          fontFamily={props?.fontFamily}
          textMessage={props?.textMessage}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          disabled={props?.disabled}
          required={props?.required}
          step={props?.step}
          min={props?.min}
          max={props?.max}
          type={props?.type}
          fontWeight={props?.fontWeight}
          isReadOnly={props?.isReadOnly}
          getIsChangingState={props.getIsChangingState}
          mask={props?.mask}
          isNotUseDebounce={props?.isNotUseDebounce}
          color={color}
        />
      </TextFieldContainer>
    );
};

export default React.memo(TextField);
