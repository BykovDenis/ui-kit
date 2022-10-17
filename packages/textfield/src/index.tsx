import React, { useEffect, useState } from 'react';

import Input from '../../input/src';
import Label from '../../label/src';
import ITheme from '../../styles/types/itheme';
import ITextField from '../types/itext-field';
import LabelContainer from './label-container.styled';
import TextFieldContainer from './text-field-container.styled';
import { ReactThemeContextConsumer } from '../../styles/src';

const TextField: React.FunctionComponent<ITextField> = (props: ITextField) => {
  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

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

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    return (
      <TextFieldContainer backgroundImage={props?.backgroundImage} width={props?.width} height={props?.height}>
        <LabelContainer isExistValue={isExistValue || isFocus} isExistTextMessageHelper={props?.textMessage > ''}>
          <Label
            htmlFor={props.id}
            fontSize={labelFontSize}
            isFocus={isFocus}
            isReadOnly={props.isReadOnly}
            fontWeight={props?.fontWeight}
            isDisabled={props.disabled}
            error={props?.error}
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
        />
      </TextFieldContainer>
    );
  };

  if (!ReactThemeContextConsumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <ReactThemeContextConsumer>{componentThemed}</ReactThemeContextConsumer>;
};

export default React.memo(TextField);
