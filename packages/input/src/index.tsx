import debounce from 'debounce';
import React, { useEffect, useState } from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import IInput from '../types/iinput';
import InputStyled from './input.styled';
import InputContainer from './input-container.styled';
import InputUnderline from './input-underline.styled';
import TextMessage from './text-message.styled';

const DEFAULT_WIDTH = '190';
const DEFAULT_HEIGHT = '30';
const TEXT_ALIGN = 'right';
const TIMEOUT = 1000;

const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  const [inputValue, setInputValue] = useState(props.value);
  const [evtObj, setEvtObject] = useState(null);
  const [isNotRunDebounce, setIsRunDebounce] = useState(false);

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

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt?.target;
    setInputValue(element.value);
    setEvtObject(evt);
    if (!isNotRunDebounce) {
      setIsRunDebounce(true);
    }
  };

  const componentThemed = (theme: ITheme) => {
    const backgroundColor: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? theme?.palette?.primary?.main
        : theme?.palette?.secondary?.main;

    const hoverBackgroundColor: string = props?.error ? theme?.palette?.secondary?.lighter : 'transparent';

    const underlineColor: string = props?.error ? theme?.palette?.secondary?.main : theme?.mainBlackColor;
    const hoverColor: string = props?.error ? theme?.palette?.secondary?.main : theme?.mainGrayColor;

    const color: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? theme?.palette?.baseFontColor
        : theme?.palette?.secondary?.main;

    const focusColor: string = backgroundColor;

    return (
      <InputContainer backgroundImage={props?.backgroundImage} height={props?.height} width={props?.width}>
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
          variant={props?.variant}
          borderColor={theme?.mainBlackColor}
          error={props?.error}
        />
        <InputUnderline
          className="underline"
          variant={props?.variant}
          color={underlineColor}
          disabled={props?.disabled}
          width={props.width}
        />
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
