import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';

import Variants from '../../enums/variants';
import Input from '../../input/src';
import Label from '../../label/src';
import List from '../../list/src';
import ListItem from '../../list-item/src';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ISelect from '../types/iselect';
import LabelContainer from './label-container.styled';
import SelectContainer from './select-container.styled';
import SelectHeader from './select-header.styled';
import SelectListContainer from './select-list-container.styled';

const DEFAULT_HEIGHT = 30;
const TEXT_ALIGN = 'right';
const TIMEOUT_DELAY: number = 300;
const TYPE_TEXT = 'text';
const FONT_WEIGHT_REGULAR = 400;

const Select: React.FunctionComponent<ISelect> = (props: ISelect) => {
  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(props.activeElement);
  const [elements, setElements] = useState(props.elements);
  const [isVisibleList, setIsVisibleList] = useState(false);

  useEffect(() => {
    if (props?.activeElement > '') {
      setIsExistValue(true);
      setValue(props?.activeElement);
    } else {
      setIsExistValue(false);
    }
  }, [props.activeElement]);

  useEffect(() => {
    setElements(props.elements);
  }, [props.elements]);

  useEffect(() => {
    if (props?.activeElement > '') {
      setIsExistValue(true);
    } else {
      setIsExistValue(false);
    }
    const elements: Array<string> =
      isFocus && (value !== props.activeElement || value === null || value === '')
        ? props.elements.filter((element: string) => element.indexOf(value) > -1)
        : props.elements;
    setElements(elements);
  }, [value]);

  const onInputDelete = (name: string, value: string) => {
    props?.onRemove(name, value);
    setIsExistValue(false);
    setIsVisibleList(false);
  };

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    if (element?.value > '') {
      setIsExistValue(true);
    }
  };

  const onInputFocus = () => {
    setIsFocus(true);
    setIsVisibleList(true);
  };

  const onInputBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, TIMEOUT_DELAY);
    if (props?.value) {
      setIsExistValue(true);
    } else {
      setIsExistValue(false);
    }
  };

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const element: any = evt.target;
      setValue(element.value);
    };

    const onInputBlur = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const element: any = evt.target;
    };

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
            onChange={onInputChange}
            onRemove={onInputDelete}
            onInput={onInput}
            variant={Variants.Outlined}
            value={value}
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
            isNotUseDebounce={true}
          />
        </SelectHeader>
        {isVisibleList && (
          <SelectListContainer>
            <List type="list-buttons">
              {elements?.map((element: string, index: number) => {
                const backgroundColor: string = element === props.activeElement ? theme.palette.primary.light : null;
                const hoverBackgroundColor: string =
                  element === props.activeElement ? theme.palette.primary.light : null;
                const color: string = element === props.activeElement ? theme.mainWhiteColor : null;

                const onSelectChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
                  const element: any = evt.currentTarget;
                  const elementValue: string | number = element?.dataset?.value;
                  props.onChange({ label: element.value, value: elementValue });
                  setIsVisibleList(!isVisibleList);
                };

                return (
                  <ListItem
                    type="button"
                    key={index}
                    backgroundColor={backgroundColor}
                    hoverBackgroundColor={hoverBackgroundColor}
                    color={color}
                    onClick={onSelectChange}
                    data-value={element}
                  >
                    {element}
                  </ListItem>
                );
              })}
            </List>
          </SelectListContainer>
        )}
      </SelectContainer>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Select);
