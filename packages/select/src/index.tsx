import React, { createRef, useEffect, useState } from 'react';

import Variants from '../../enums/variants';
import searchDomChildElement from '../../helpers/search-dom-child-element';
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
import SelectIndicator from './select-indicator.styled';
import SelectListContainer from './select-list-container.styled';

const DEFAULT_HEIGHT = 40;
const TEXT_ALIGN = 'center';
const TYPE_TEXT = 'text';
const FONT_WEIGHT_REGULAR = 400;
const INPUT_TAG: string = 'INPUT';
const TRANSPARENT_COLOR: string = 'transparent';

const KEY_ESCAPE: string = 'ESCAPE';

const Select: React.FunctionComponent<ISelect> = (props: ISelect) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(props.activeElement);
  const [elements, setElements] = useState(props.elements);
  const [isVisibleList, setIsVisibleList] = useState(false);
  const [isFoundValue, setIsFoundValue] = useState(true);
  const [isNewElement, setIsNewElement] = useState(false);
  const [activeElement, setActiveElement] = useState(props.activeElement);
  const [isEdited, setIsEdited] = useState(false);

  const onSelectChange = (evt: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
    const element: any = evt.target;
    const value: string = element?.dataset?.value;

    if (props?.onChange) {
      const index: number = element?.dataset?.index ? parseInt(element?.dataset?.index, 10) : null;
      props.onChange({ name: props.name, label: props.label, value, index });
    } else {
      setValue(value);
    }
    setIsEdited(false);
    setElements([...props.elements, value]);
    setIsVisibleList(!isVisibleList);
  };

  const onListItemsClose = (isSearchResult: boolean, evt?: any) => {
    const element = evt.target;
    if (element?.tagName !== INPUT_TAG) {
      if (!isSearchResult) {
        setIsFocus(false);
        setIsVisibleList(false);
      }
    }
  };

  const onListItemsCloseByKey = () => {
    setIsFocus(false);
    setIsVisibleList(false);
  };

  const onMouseSelectUp = () => {
    onListItemsCloseByKey();
  };

  const onMouseUp = (evt: React.MouseEvent<HTMLElement, MouseEvent>, listRef: any) => {
    const element: any = evt.target;
    if (listRef && listRef?.current) {
      const listElement: any = listRef?.current;
      onSelectChange(evt);
      if (listElement) {
        onListItemsClose(searchDomChildElement(listElement, element), evt);
      }
    } else {
      onListItemsCloseByKey();
    }
  };

  const onKeyUp = (evt: any) => {
    if (evt.keyCode === 27 || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
      onListItemsCloseByKey();
    }
  };

  useEffect(() => {
    if (props?.activeElement > '') {
      setValue(props?.activeElement);
      setActiveElement(props?.activeElement);
    }
  }, [props.activeElement]);

  useEffect(() => {
    document.addEventListener('mouseup', onMouseSelectUp);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', onMouseSelectUp);
      document.addEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    setElements(props.elements);
    setActiveElement(value);
  }, [props.elements]);

  useEffect(() => {
    const elements: Array<string> =
      isFocus && (value !== props.activeElement || value === null || value === '')
        ? props.elements.filter((element: string) => element.indexOf(value) > -1)
        : props.elements;
    setElements(elements);
    setIsFoundValue(elements.length > 0);
    setIsNewElement(elements?.filter((element: string) => element.indexOf(value) > -1)?.length === 0);
  }, [value]);

  useEffect(() => {
    setIsNewElement(elements?.filter((element: string) => element.indexOf(value) > -1)?.length === 0);
    setIsFoundValue(true);
  }, [elements]);

  useEffect(
    () => () => {
      setIsVisibleList(false);
      setIsFocus(false);
      setIsFoundValue(false);
    },
    []
  );

  const onInputDelete = (name: string) => {
    props?.onRemove(name, null);
    setIsVisibleList(false);
    setValue('');
    props.onChange({ name: name, label: props.label, value: null, index: null });
  };

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    const elementParsed: string = element.value.trim();
    if (elementParsed === '') {
      setIsVisibleList(true);
    }
    setIsEdited(true);
  };

  const onInputFocus = () => {
    setIsFocus(true);
    setIsVisibleList(true);
  };

  const isExistValue: boolean = value > '';

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const element: any = evt.target;
      setValue(element.value);
    };

    const onInputBlur = () => {
      setIsFocus(false);
    };

    const indicatorColor: string = !props?.isReadOnly
      ? isExistValue
        ? isEdited
          ? theme?.mainGrayColor
          : props?.indicatorColor || theme?.palette?.primary?.main
        : theme?.palette?.secondary?.main
      : theme?.palette?.baseFontColor;

    return (
      <SelectContainer width={props?.width} height={props?.height || DEFAULT_HEIGHT}>
        <SelectHeader height={props?.height || DEFAULT_HEIGHT}>
          {props?.label && (
            <LabelContainer
              isExistValue={isExistValue || isFocus}
              backgroundColor={props?.backgroundColor || theme.mainWhiteColor}
            >
              <Label
                htmlFor={props.id}
                fontSize={labelFontSize}
                isFocus={isFocus}
                isReadOnly={props.isReadOnly}
                fontWeight={props?.fontWeight}
                isDisabled={props.disabled}
                fontFamily={props?.fontFamily || theme?.fontFamily}
              >
                {props?.label}
              </Label>
            </LabelContainer>
          )}
          <SelectIndicator backgroundColor={indicatorColor} />
          <Input
            id={props.id}
            name={props.name}
            height={props?.height || DEFAULT_HEIGHT}
            width={props?.width}
            onChange={onInputChange}
            onRemove={onInputDelete}
            onInput={onInput}
            variant={props?.variant}
            value={value}
            textAlign={props?.textAlign || TEXT_ALIGN}
            fontSize={fontSize}
            baseFontSize={props?.baseFontSize}
            fontFamily={props?.fontFamily || theme?.fontFamily}
            textMessage={props?.textMessage}
            onFocus={onInputFocus}
            onClick={onInputFocus}
            onBlur={onInputBlur}
            disabled={props?.disabled}
            required={props?.required}
            step={props?.step}
            min={props?.min}
            max={props?.max}
            type={props?.type || TYPE_TEXT}
            fontWeight={props?.fontWeight || FONT_WEIGHT_REGULAR}
            isReadOnly={props?.isReadOnly}
            isNotUseDebounce={elements?.length < 500}
            backgroundColor={props?.backgroundColor || TRANSPARENT_COLOR}
            color={props?.color}
            isNotClearable={props?.isNotClearable}
            borderColor={props?.borderColor}
            hoverColor={props?.hoverColor}
            focusColor={props?.focusColor}
          />
        </SelectHeader>
        {isVisibleList && (
          <SelectListContainer>
            <List type="list-buttons" onMouseUp={onMouseUp} onKeyUp={onKeyUp}>
              {isFoundValue &&
                elements?.map((element: string, index: number) => {
                  const backgroundColor: string = element === activeElement ? theme.palette.primary.light : null;
                  const hoverBackgroundColor: string = element === activeElement ? theme.palette.primary.light : null;
                  const color: string = element === activeElement ? theme.mainWhiteColor : null;

                  return (
                    <ListItem
                      type="button"
                      key={`list-item-${index}`}
                      backgroundColor={backgroundColor}
                      hoverBackgroundColor={hoverBackgroundColor}
                      color={color}
                      data-index={index}
                      data-value={element}
                      textAlign={props?.textAlign || TEXT_ALIGN}
                      fontSize={fontSize}
                      height={props?.height || DEFAULT_HEIGHT}
                      fontFamily={props?.fontFamily || theme?.fontFamily}
                    >
                      {element}
                    </ListItem>
                  );
                })}
              {isNewElement && props?.isCreatable && (
                <ListItem
                  type="button"
                  key={`list-item-new`}
                  data-value={value}
                  textAlign={props?.textAlign || TEXT_ALIGN}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  height={props?.height || DEFAULT_HEIGHT}
                >
                  Create new {value}
                </ListItem>
              )}
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
