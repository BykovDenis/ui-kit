import debounce from 'debounce';
import React, { useEffect, useState } from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import Iinput from '../types/iinput';
import ButtonDelete from './button-delete.styled';
import DeleteIcon from './delete-icon';
import InputStyled from './input.styled';
import InputContainer from './input-container.styled';
import InputElementContainer from './input-element-container.styled';
import InputUnderline from './input-underline.styled';
import TextMessage from './text-message.styled';

const DEFAULT_HEIGHT = 30;
const TEXT_ALIGN = 'right';
const TIMEOUT = 1000;

const Input: React.FunctionComponent<Iinput> = (props: Iinput) => {
  const [inputValue, setInputValue] = useState(props.value);
  const [evtObj, setEvtObject] = useState(null);
  const [isNotRunDebounce, setIsRunDebounce] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const cb = () => {
    props?.onChange(evtObj);
    setIsRunDebounce(false);
  };

  useEffect(() => {
    if (isNotRunDebounce) {
      const executeDebounce = debounce(cb, TIMEOUT);
      executeDebounce();
    }
  }, [isNotRunDebounce]);

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props?.onInput(evt);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt?.target;
    setInputValue(element.value);
    setEvtObject(evt);
    if (props?.onInput) {
      onInput(evt);
    }
    if (!isNotRunDebounce) {
      setIsRunDebounce(true);
    }
  };

  const onInputDelete = () => {
    setInputValue('');
    setEvtObject(null);
    props?.onRemove(props?.name, '');
  };

  const onInputFocus = () => {
    setIsFocus(true);
    props?.onFocus();
  };

  const onInputBlur = () => {
    setIsFocus(false);
    props?.onBlur();
  };

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? theme?.palette?.primary?.main
        : theme?.palette?.secondary?.main;

    const hoverBackgroundColor: string = props?.error ? theme?.palette?.secondary?.lighter : 'transparent';

    const underlineColor: string = props?.error ? theme?.palette?.secondary?.main : theme?.mainBlackColor;
    const hoverColor: string = props?.error ? theme?.palette?.secondary?.main : theme?.mainGrayColor;

    const color: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? isFocus
          ? theme?.palette?.primary?.main
          : theme?.palette?.baseFontColor
        : theme?.palette?.secondary?.main;

    const focusColor: string = backgroundColor;

    const ReactInput: React.FunctionComponent = (props: any) => <input {...props} />;

    return (
      <InputContainer backgroundImage={props?.backgroundImage} height={props?.height} width={props?.width}>
        <InputElementContainer>
          <InputStyled
            value={inputValue}
            disabled={props?.disabled}
            width={props.width}
            height={props.height || DEFAULT_HEIGHT}
            color={color}
            hoverColor={hoverColor}
            focusColor={focusColor}
            disabledBackgroundColor={theme?.mainGrayColor}
            hoverBackgroundColor={hoverBackgroundColor}
            disabledColor={theme?.mainBlackColor}
            backgroundColor={backgroundColor}
            backgroundImage={props?.backgroundImage}
            fontSize={props?.fontSize ?? theme?.baseFontSize}
            className={props?.className}
            fontFamily={theme?.fontFamily}
            dataset={props?.dataset}
            textAlign={props?.textAlign || TEXT_ALIGN}
            onChange={onInputChange}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            variant={props?.variant}
            borderColor={theme?.mainBlackColor}
            error={props?.error}
            id={props?.id}
            name={props?.name}
            inputComponent={ReactInput}
            isSeparateNumberFormat={props?.isSeparateNumberFormat}
          />
          <InputUnderline
            name={props?.name}
            className="underline"
            variant={props?.variant}
            color={underlineColor}
            disabled={props?.disabled}
            width={props.width}
          />
          {inputValue && inputValue > '' && !props?.disabled && (
            <ButtonDelete
              onClick={onInputDelete}
              className="delete-button"
              hoverColor={hoverColor}
              focusColor={focusColor}
              disabled={props?.disabled}
            >
              <DeleteIcon className="delete-icon" />
            </ButtonDelete>
          )}
        </InputElementContainer>
        {props?.textMessage && (
          <TextMessage
            className="text-message"
            fontSize={props?.fontSize ?? theme?.baseFontSize}
            fontFamily={theme?.fontFamily}
            color={color}
          >
            {props.textMessage}
          </TextMessage>
        )}
      </InputContainer>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Input);
