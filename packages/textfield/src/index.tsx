import React, { useEffect, useState } from 'react';

import Input from '../../input/src';
import Label from '../../label/src';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ItextField from '../types/itext-field';
import LabelContainer from './label-container.styled';
import TextFieldContainer from './text-field-container.styled';

const TextField: React.FunctionComponent<ItextField> = (props: ItextField) => {
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
        <LabelContainer isExistValue={isExistValue || isFocus}>
          <Label htmlFor={props.id} fontSize={labelFontSize} isFocus={isFocus} fontWeight={props?.fontWeight}>
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
        />
      </TextFieldContainer>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(TextField);
