import React, { useEffect, useState } from 'react';

import Input from '../../input/src';
import Label from '../../label/src';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ISelect from '../types/iselect';
import LabelContainer from './label-container.styled';
import SelectContainer from './select-container.styled';
import SelectHeader from './select-header.styled';

const DEFAULT_HEIGHT = 30;
const TEXT_ALIGN = 'right';
const TIMEOUT = 1000;
const TYPE_TEXT = 'text';
const FONT_WEIGHT_REGULAR = 400;

const Select: React.FunctionComponent<ISelect> = (props: ISelect) => {
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
      <SelectContainer backgroundImage={props?.backgroundImage} width={props?.width} height={props?.height}>
        <SelectHeader>
          <LabelContainer isExistValue={isExistValue || isFocus} textMessage={props?.textMessage}>
            <Label
              htmlFor={props.id}
              fontSize={labelFontSize}
              isFocus={isFocus}
              isReadOnly={props.isReadOnly}
              fontWeight={props?.fontWeight}
              isDisabled={props.disabled}
            >
              {props?.label}
            </Label>
          </LabelContainer>
          <Input
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
          />
        </SelectHeader>
      </SelectContainer>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Select);
