import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';

import Input from '@dbykov-ui-kit/input';
import Label from '@dbykov-ui-kit/label';
import ITheme from '../../styles/types/itheme';
import ITextField from '../types/itext-field';
import LabelContainer from './label-container.styled';
import TextFieldContainer from './text-field-container.styled';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import { useTheme } from '@dbykov-ui-kit/styles';

const TextField = forwardRef<HTMLInputElement, ITextField>((props: ITextField, ref: ForwardedRef<HTMLInputElement>) => {
  const [value, setValue] = useState<string | number | null | undefined>(props.value);
  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setValue(props.value);
    if ((props?.value ?? '') > '') {
      setIsExistValue(true);
    } else {
      setIsExistValue(false);
    }
  }, [props.value]);

  const onInputDelete = (name?: string, value?: string | null) => {
    props?.onRemove?.(name, value);
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
      setValue(
        parseFloat(value as string)
          ?.toLocaleString('ru-RU')
          ?.replace(',', '.')
      );
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
    const color: string | undefined = props?.disabled ? theme.inactiveColor : props.color;

    return (
      <TextFieldContainer backgroundImage={props?.backgroundImage} width={props?.width} height={props?.height}>
        <LabelContainer
          backgroundColor={backgroundColor}
          isExistValue={isExistValue || isFocus}
          isExistTextMessageHelper={(props?.textMessage ?? '') > ''}
        >
          <Label
            htmlFor={props.id}
            fontSize={labelFontSize}
            isFocus={isFocus}
            fontWeight={props?.fontWeight}
            disabled={props.disabled}
            readOnly={props.readOnly}
            error={props?.error}
            color={color}
          >
            {props?.label}
          </Label>
        </LabelContainer>
        <Input
          {...props}
          ref={ref}
          onRemove={onInputDelete}
          onInput={onInput}
          fontSize={fontSize}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          color={color}
          regExp={props.regExp}
          value={value}
          onChange={props.onChange}
          delayDebounce={props?.delayDebounce}
          disabled={props?.disabled}
          readOnly={props?.readOnly}
        />
      </TextFieldContainer>
    );
  };


  return componentThemed(theme);
});

export default TextField;
