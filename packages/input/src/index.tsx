import debounce from 'debounce';
import React, { useEffect, useRef, useState } from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import IInput from '../types/IInput';
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
const TYPE_TEXT = 'text';
const FONT_WEIGHT_REGULAR = 400;

const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  const [inputValue, setInputValue] = useState(props.value);
  const [evtObj, setEvtObject] = useState(null);
  const [isNotRunDebounce, setIsRunDebounce] = useState(false);
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
    if (isNotRunDebounce) {
      const executeDebounce = debounce(cb, TIMEOUT);
      executeDebounce();
    } else {
      if (inputRef?.current) {
        const inputElement = inputRef?.current;
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
    if (!isNotRunDebounce) {
      setIsRunDebounce(true);
    }
  };

  const onInputDelete = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue('');
    setEvtObject(null);
    setIsChanging(false);
    props?.onRemove(props?.name, '', evt);
  };

  const onInputFocus = () => {
    setIsFocus(true);
    if (inputRef?.current && props?.value !== null && props?.isSeparateNumberFormat) {
      const inputElement = inputRef?.current;
      if (inputElement) {
        inputElement.value = props?.value;
        setInputValue(props?.value);
      }
    }
    props?.onFocus();
  };

  const onInputBlur = () => {
    setIsFocus(false);
    if (props?.isSeparateNumberFormat && props?.value !== null) {
      setInputValue(parseFloat(props.value as string).toLocaleString('ru-RU').replace(',', '.'))
    }
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
        ? isFocus && !props?.isReadOnly
          ? theme?.palette?.primary?.main
          : theme?.palette?.baseFontColor
        : theme?.palette?.secondary?.main;

    const focusColor: string = backgroundColor;

    const ReactInput: React.FunctionComponent = (props: any) => <input {...props} />;

    const value: string | number = inputValue !== undefined && inputValue !== null ? inputValue : '';

    return (
      <InputContainer backgroundImage={props?.backgroundImage} height={props?.height} width={props?.width}>
        <InputElementContainer>
          <InputStyled
            {...props}
            value={value}
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
            required={props?.required}
            step={props?.step}
            type={props?.type || TYPE_TEXT}
            fontWeight={props?.fontWeight | FONT_WEIGHT_REGULAR}
            ref={props?.ref || inputRef}
            min={props?.min}
            max={props?.max}
            readOnly={props?.isReadOnly}
          />
          {props?.variant !== TYPE_TEXT &&<InputUnderline
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
              <DeleteIcon className="delete-icon" />
            </ButtonDelete>
          ) : null}
        </InputElementContainer>
        {props?.textMessage ? (
          <TextMessage
            className="text-message"
            fontSize={props?.fontSize ?? theme?.baseFontSize}
            fontFamily={theme?.fontFamily}
            color={color}
          >
            {props.textMessage}
          </TextMessage>
        ) : null}
      </InputContainer>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Input);
