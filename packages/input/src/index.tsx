import debounce from 'debounce';
import React, { useEffect, useRef, useState } from 'react';

import {
  DEFAULT_HEIGHT,
  FONT_WEIGHT_REGULAR,
  TEXT_ALIGN_RIGHT,
  TIMEOUT,
  TYPE_TEXT
} from '../../constants';
import Itheme from '../../styles/types/itheme';
import IInput from '../types/iinput';
import ButtonDelete from './button-delete.styled';
import Index from '../../icons-components/delete-icon';
import InputStyled from './input.styled';
import InputContainer from './input-container.styled';
import InputElementContainer from './input-element-container.styled';
import InputUnderline from './input-underline.styled';
import TextMessage from './text-message.styled';


const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  const [inputValue, setInputValue] = useState(props.value !== undefined && props?.value !== null ? props.value : '');
  const [evtObj, setEvtObject] = useState(null);
  const [isNotRunDebounce, setIsRunDebounce] = useState(props?.isNotRunDebounce || false);
  const [isFocus, setIsFocus] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;

  const cb = () => {
    let value: number | string = evtObj.target.value;
    const evtObjNew = {...evtObj};
    if (props?.min !== undefined && props?.min !== null) {
      if (parseFloat(value as string) < props?.min) {
        value = props?.min;
      }
    }
    if (props?.max !== undefined && props?.max !== null) {
      if (parseFloat(value as string) > props?.max) {
        value = props?.max;
      }
    }
    evtObjNew.target.value = value;
    props?.onChange(evtObjNew);
    setIsChanging(false);
    setIsRunDebounce(false);
  };

  useEffect(() => {
    if (inputValue !== props.value) {
      setInputValue(props.value)
    }
  }, [props.value]);

  useEffect(() => {
    if (isNotRunDebounce && !props.isNotUseDebounce) {
      const executeDebounce = debounce(cb, TIMEOUT);
      executeDebounce();
    } else {
      const ref = props?.inputRef || inputRef;
      if (ref?.current) {
        const inputElement = ref?.current;
        if (inputElement) {
          inputElement.value = props?.value;
          setInputValue(props?.value);
        }
      }
    }
  }, [isNotRunDebounce]);

  useEffect(() => {
    if (props.getIsChangingState) {
      props.getIsChangingState(isChanging);
    }
  }, [isChanging])

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props?.onInput(evt);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt?.target;
    const value: string | number = props.mask ? element.value?.replaceAll(props.mask, '') : element.value;
    setInputValue(value);
    setEvtObject(evt);
    setIsChanging(true);
    if (props?.onInput) {
      onInput(evt);
    }
    if (!isNotRunDebounce && !props.isNotUseDebounce) {
      setIsRunDebounce(true);
    }
    if (props.isNotUseDebounce) {
      props?.onChange(evt);
    }
  };

  const onInputDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setInputValue('');
    setEvtObject(null);
    setIsChanging(false);
    if (props?.onRemove) {
      props.onRemove(props?.name, '', evt);
    }
  };

  const onInputFocus = (evt?: any) => {
    setIsFocus(true);
    const ref = props?.inputRef || inputRef;
    if (ref?.current && props?.value !== null && props?.isSeparateNumberFormat) {
      const inputElement = ref?.current;
      if (inputElement) {
        inputElement.value = props?.value;
        setInputValue(props?.value);
      }
    }
    if (props?.onFocus) {
      props?.onFocus(evt);
    }
  };

  const onInputBlur = (evt: any) => {
    setIsFocus(false);
    if (props?.isSeparateNumberFormat && props?.value !== null) {
      setInputValue(parseFloat(props.value as string)?.toLocaleString('ru-RU')?.replace(',', '.'))
    }
    if (props?.onBlur) {
      props.onBlur(evt);
    }
  };

  const componentThemed: any = (theme: Itheme) => {
    const backgroundColor: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? theme?.palette?.primary?.main
        : theme?.palette?.secondary?.main;

    const hoverBackgroundColor: string = props?.error ? theme?.palette?.secondary?.lighter : 'transparent';
    const underlineColor: string = props?.error ? theme?.palette?.secondary?.main : props?.borderColor || theme?.mainBlackColor;
    const hoverColor: string = props?.error ? theme?.palette?.secondary?.main : theme?.mainGrayColor;

    const color: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? isFocus && !props?.isReadOnly
          ? theme?.palette?.primary?.main
          : theme?.palette?.baseFontColor
        : theme?.palette?.secondary?.main;

    const focusColor: string = props?.error ? theme?.palette?.secondary?.main : backgroundColor;

    const ReactInput: React.FunctionComponent = (props: any) => <input {...props} />;

    const colorInteractive: string = props?.error ? theme?.palette?.secondary?.lighter : isFocus ? theme?.palette?.primary?.main : props?.color;
    const value: string | number = inputValue !== undefined && inputValue !== null ? inputValue : '';
    const borderColor: string = props?.error ? theme?.palette?.secondary?.lighter : props?.borderColor || theme?.mainBlackColor;
    const inputColor: string = props?.error ? theme?.palette?.secondary?.main : props?.color || color;

    return (
      <InputContainer height={props?.height} width={props?.width}>
        <InputElementContainer backgroundColor={props?.backgroundColor || theme.mainWhiteColor}>
          <InputStyled
            {...props}
            value={value}
            disabled={props?.disabled}
            width={props.width}
            height={props.height || DEFAULT_HEIGHT}
            color={inputColor}
            hoverColor={props?.hoverColor || hoverColor}
            focusColor={props.focusColor || focusColor}
            disabledBackgroundColor={theme?.mainGrayColor}
            hoverBackgroundColor={hoverBackgroundColor}
            disabledColor={theme?.mainBlackColor}
            backgroundColor={backgroundColor}
            backgroundImage={props?.backgroundImage}
            fontSize={props?.fontSize ?? theme?.baseFontSize}
            className={props?.className}
            fontFamily={theme?.fontFamily}
            textAlign={props?.textAlign || TEXT_ALIGN_RIGHT}
            onChange={onInputChange}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            variant={props?.variant}
            borderColor={borderColor}
            error={props?.error}
            id={props?.id}
            name={props?.name}
            inputComponent={ReactInput}
            isSeparateNumberFormat={props?.isSeparateNumberFormat}
            required={props?.required}
            step={props?.step}
            type={props?.type || TYPE_TEXT}
            fontWeight={props?.fontWeight | FONT_WEIGHT_REGULAR}
            ref={props?.inputRef || inputRef}
            min={props?.min}
            max={props?.max}
            readOnly={props?.isReadOnly}
            autoComplete="off"
          />
          {props?.variant !== TYPE_TEXT && <InputUnderline
            name={props?.name}
            className="underline"
            variant={props?.variant}
            color={underlineColor}
            disabled={props?.disabled}
            width={props.width}
          />}
          {!props?.isReadOnly && !props.isNotClearable && inputValue !== null && inputValue !== '' && !props?.disabled ? (
            <ButtonDelete
              onClick={onInputDelete}
              className="delete-button"
              hoverColor={hoverColor}
              focusColor={focusColor}
              disabled={props?.disabled}
            >
              <Index color={colorInteractive} className="delete-icon" />
            </ButtonDelete>
          ) : null}
        </InputElementContainer>
        {props?.textMessage ? (
          <TextMessage
            className="text-message"
            fontSize={props?.fontSize ?? theme?.baseFontSize}
            fontFamily={theme?.fontFamily}
            color={inputColor}
          >
            {props.textMessage}
          </TextMessage>
        ) : null}
      </InputContainer>
    );
  };

  if ((!globalThis.ReactThemeContextConsumer)) {
    console.error('You need an initialization provider');
    return null;
  }

  return <globalThis.ReactThemeContextConsumer>{componentThemed}</globalThis.ReactThemeContextConsumer>;
};

export default React.memo(Input);
