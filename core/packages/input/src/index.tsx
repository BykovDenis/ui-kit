import debounce from 'debounce';
import { useEffect, useRef, useState } from 'react';

import { DEFAULT_HEIGHT, FONT_WEIGHT_REGULAR, TEXT_ALIGN_RIGHT, TIMEOUT, TYPE_TEXT } from '../../constants';
import ITheme from '../../styles/types/itheme';
import IInput from '../types/iinput';
import CrossIcon from '../../icons-components/24x24/cross-icon';
import InputStyled from './input.styled';
import InputContainer from './input-container.styled';
import InputElementContainer from './input-element-container.styled';
import InputUnderline from './input-underline.styled';
import TextMessage from './text-message.styled';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import parseValue from './helpers/parse-value';
import ButtonDelete from '../../customs-styled-components/button-delete.styled';
import calculationPaddingByTextAlign from './helpers/calculation-padding-by-text-align';

const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  const [inputValue, setInputValue] = useState(isNotEmptyString(props.value?.toString()) ? props.value : '');
  const [isNotRunDebounce, setIsRunDebounce] = useState(
    props?.isNotRunDebounce !== undefined ? props.isNotRunDebounce : false
  );
  const [isFocus, setIsFocus] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  const cb = (evt: any) => {
    const value = props.inputRef ? props.inputRef?.current?.value : inputRef?.current?.value;
    if (isNotEmptyString(value)) {
      let valueParsed = parseValue(props.type, value, props.regExp, props.mask);
      if (props.type === 'number') {
        if (props?.min !== undefined && props?.min !== null) {
          if (Number(valueParsed) < props?.min) {
            valueParsed = props?.min?.toString();
          }
        }
        if (props?.max !== undefined && props?.max !== null) {
          if (Number(valueParsed) > props?.max) {
            valueParsed = props?.max?.toString();
          }
        }
      }
      if (props.inputRef && props.inputRef?.current?.value !== valueParsed) {
        props.inputRef.current.value = valueParsed?.toString();
      } else {
        if (inputRef?.current) {
          inputRef.current.value = valueParsed;
        }
      }
      if (props?.onChange) {
        props.onChange(evt, props.name, valueParsed);
      }
    } else {
      if (inputRef.current?.value !== undefined) {
        inputRef.current.value = '';
      }
      if (props?.onChange) {
        props.onChange(evt, props.name, value);
      }
    }
    setIsChanging(false);
    setIsRunDebounce(false);
  };

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    let valueParsed: number | string = parseValue(props.type, props.value, props.regExp, props.mask);
    if (props.type === 'number') {
      if (props?.min !== undefined && props?.min !== null) {
        if (Number(valueParsed) < props?.min) {
          valueParsed = props?.min?.toString();
        }
      }
      if (props?.max !== undefined && props?.max !== null) {
        if (Number(valueParsed) > props?.max) {
          valueParsed = props?.max?.toString();
        }
      }
    }
    if (valueParsed !== inputValue) {
      let value = props.value;
      setInputValue(valueParsed);
    }
  }, [props.value]);

  useEffect(() => {
    if (props.getIsChangingState) {
      props.getIsChangingState(isChanging);
    }
  }, [isChanging]);

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props?.onInput) {
      props.onInput(evt);
    }
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt?.target;
    let value: string = element.value;
    const valueParsed: string | number = parseValue(props.type, value, props.regExp, props.mask);
    setInputValue(valueParsed);
    setIsChanging(true);
    if (props?.onInput) {
      onInput(evt);
    }
    if (isNotRunDebounce) {
      if (props?.onChange) {
        props.onChange(evt, props.name, valueParsed);
      }
    } else {
      const cbEvent = () => {
        cb(evt);
      };
      const executeDebounce = debounce(cbEvent, TIMEOUT);
      executeDebounce();
    }
  };

  const onInputDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setInputValue('');
    setIsChanging(false);
    if (props?.onRemove) {
      props.onRemove(props?.name, '', evt);
    }
  };

  const onInputFocus = (evt?: any) => {
    setIsFocus(true);
    const ref = props?.inputRef || inputRef;
    if (ref?.current && inputValue !== null && props?.isSeparateNumberFormat) {
      const inputElement = ref?.current;
      if (inputElement) {
        let inputValueParsed: string = inputValue?.toString()?.replaceAll(' ', '') ?? '';
        inputElement.value = inputValueParsed;
        setInputValue(inputValueParsed);
      }
    }
    if (props?.onFocus) {
      props?.onFocus(evt);
    }
  };

  const onInputBlur = (evt: any) => {
    setIsFocus(false);
    const inputValueParsed: string = inputValue?.toString() || '';
    if (props?.isSeparateNumberFormat && isNotEmptyString(inputValueParsed)) {
      setInputValue(
        parseFloat(inputValue as string)
          ?.toLocaleString('ru-RU')
          ?.replace(',', '.')
      );
    }
    if (props?.onBlur) {
      props.onBlur(evt);
    }
  };

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.disabled ? theme.inactiveBackgroundColor : theme?.mainBackgroundColor;

    const hoverBackgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : props?.error
      ? theme?.palette?.secondary?.lighter
      : theme?.mainBackgroundColor;
    const hoverColor: string = props.disabled
      ? theme.inactiveColor
      : props?.error
      ? theme?.palette?.secondary?.main
      : theme?.palette.baseFontColor;
    const hoverBorderColor: string = props?.error ? theme?.palette?.secondary?.main : theme?.mainOutlinedHoverColor;

    const color: string = props?.error
      ? theme?.palette?.secondary?.main
      : isFocus && !props?.isReadOnly
      ? theme?.palette?.primary?.main
      : theme?.palette?.baseFontColor;

    const focusColor: string = props?.error ? theme?.palette?.secondary?.main : theme.palette.primary.main;

    const ReactInput: React.FunctionComponent = (props: any) => <input {...props} />;

    const value: string | number = inputValue !== undefined && inputValue !== null ? inputValue : '';
    const borderColor: string = props?.error
      ? theme?.palette?.secondary?.lighter
      : props?.borderColor || theme?.mainOutlinedColor;
    const inputColor: string = props.disabled
      ? theme.inactiveColor
      : props?.error
      ? theme?.palette?.secondary?.main
      : props?.color || color;
    const underlineColor: string = props.disabled
      ? theme.mainOutlinedColor
      : props?.error
      ? theme?.palette?.secondary?.main
      : props?.borderColor || theme?.mainOutlinedColor;

    const paddingCalculated = calculationPaddingByTextAlign(props.textAlign, props.isNotClearable);

    return (
      <InputContainer height={props?.height} width={props?.width}>
        <InputElementContainer backgroundColor={backgroundColor}>
          <InputStyled
            {...props}
            value={value}
            height={props.height || DEFAULT_HEIGHT}
            color={inputColor}
            hoverColor={props?.hoverColor || hoverColor}
            focusColor={props.focusColor || focusColor}
            disabledBackgroundColor={theme?.mainGrayColor}
            hoverBorderColor={props?.hoverColor || hoverBorderColor}
            hoverBackgroundColor={hoverBackgroundColor}
            disabledColor={theme?.palette.baseFontColorOpacity05}
            backgroundColor={props.backgroundColor ?? backgroundColor}
            fontSize={props?.fontSize ?? theme?.baseFontSize}
            fontFamily={theme?.fontFamily}
            textAlign={props?.textAlign || TEXT_ALIGN_RIGHT}
            onChange={onInputChange}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            borderColor={borderColor}
            inputComponent={ReactInput}
            type={props?.type || TYPE_TEXT}
            fontWeight={props?.fontWeight | FONT_WEIGHT_REGULAR}
            ref={props?.inputRef || inputRef}
            autoComplete="off"
            padding={props?.padding || paddingCalculated}
          />
          {props?.variant !== TYPE_TEXT && (
            <InputUnderline
              name={props?.name}
              className="underline"
              variant={props?.variant}
              color={underlineColor}
              hoverColor={hoverBackgroundColor}
              disabled={props?.disabled}
              width={props.width}
            />
          )}
          {!props?.isReadOnly &&
          !props.isNotClearable &&
          inputValue !== null &&
          inputValue !== '' &&
          !props?.disabled ? (
            <ButtonDelete
              data-test="btn-delete-value"
              onClick={onInputDelete}
              className="delete-button"
              hoverColor={hoverColor}
              focusColor={focusColor}
              disabled={props?.disabled}
            >
              <CrossIcon color={inputColor} className="delete-icon" />
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

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Input;
