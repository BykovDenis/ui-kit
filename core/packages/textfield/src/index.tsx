import React, { useEffect, useState } from 'react';

import Input from '../../input/src';
import Label from '../../label/src';
import ITheme from '../../styles/types/itheme';
import ITextField from '../types/itext-field';
import LabelContainer from './label-container.styled';
import TextFieldContainer from './text-field-container.styled';
import isNotEmptyString from "../../helpers/is-not-empty-string";

const TextField: React.FunctionComponent<ITextField> = (props: ITextField) => {
  const [value, setValue] = useState<string | number>(props.value);
  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    setValue(props.value);
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
    setValue(element.value);
    if (element?.value > '') {
      setIsExistValue(true);
    }
  };

  const onInputFocus = () => {
    setIsFocus(true);
  };

  const onInputBlur = () => {
    if (isNotEmptyString(value as string) && props?.isSeparateNumberFormat) {
      setValue(parseFloat(value as string)
        ?.toLocaleString('ru-RU')
        ?.replace(',', '.'))
    }
    setIsFocus(false);
    if (isNotEmptyString(value as string)) {
      setIsExistValue(true);
    } else {
      setIsExistValue(false);
    }
  };

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;
    const backgroundColor: string = props.disabled ? theme.inactiveBackgroundColor : theme?.mainBackgroundColor;
    const color: string = props?.disabled ? theme.inactiveColor : props.color;

    return (
      <TextFieldContainer backgroundImage={props?.backgroundImage} width={props?.width} height={props?.height}>
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
          >
            {props?.label}
          </Label>
        </LabelContainer>
        <Input
          {...props}
          onRemove={onInputDelete}
          onInput={onInput}
          fontSize={fontSize}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          color={color}
          regExp={props.regExp}
          value={value}
          onChange={props.onChange}
        />
      </TextFieldContainer>
    );
  };

  if (!Consumer) {
    console.error('The Textfield component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(TextField);
