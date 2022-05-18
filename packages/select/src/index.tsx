import React, {useEffect, useRef, useState} from 'react';

import searchDomChildElement from '../../helpers/search-dom-child-element';
import Input from '../../input/src';
import Label from '../../label/src';
import List from '../../list/src';
import ListItem from '../../list-item/src';
import ThemeContext from '../../styles/src/themes';
import Itheme from '../../styles/types/itheme';
import ISelect from '../types/iselect';
import LabelContainer from './label-container.styled';
import SelectContainer from './select-container.styled';
import SelectHeader from './select-header.styled';
import SelectIndicator from './select-indicator.styled';
import SelectListContainer from './select-list-container.styled';
import IOption from '../types/ioption';

const DEFAULT_HEIGHT = 40;
const TEXT_ALIGN = 'center';
const TYPE_TEXT = 'text';
const FONT_WEIGHT_REGULAR = 400;
const INPUT_TAG: string = 'INPUT';
const BUTTON_TAG: string = 'BUTTON';
const TRANSPARENT_COLOR: string = 'transparent';

const KEY_ESCAPE: string = 'ESCAPE';

function getElementsParsed(elements: Array<IOption | string | number>): Array<IOption> {
  return elements?.map((element: string | number | IOption) => {
    if (typeof element === 'object') {
      return element;
    }
    return {
      label: element?.toString(),
      value: element,
    };
  });
}

function getActiveElementParsed(activeElement: string | number | IOption): IOption {
  const activeElementType: string = typeof activeElement;
  switch (activeElementType) {
    case 'object': {
      return activeElement as IOption;
    }
    case 'string': {
      return { label: activeElement, value: activeElement } as IOption;
    }
    case 'number': {
      return { label: activeElement?.toString(), value: activeElement } as IOption;
    }
    default: {
      return activeElement as IOption;
    }
  }
}

const Select: React.FunctionComponent<ISelect> = (props: ISelect) => {
  const activeElementParsed: IOption = getActiveElementParsed(props.activeElement);

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [label, setLabel] = useState<string>(activeElementParsed?.label);
  const [elements, setElements] = useState<Array<IOption>>(getElementsParsed(props.elements));
  const [isVisibleList, setIsVisibleList] = useState<boolean>(false);
  const [isFoundValue, setIsFoundValue] = useState<boolean>(true);
  const [isNewElement, setIsNewElement] = useState<boolean>(false);
  const [activeElement, setActiveElement] = useState<IOption>(activeElementParsed);
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onSelectChange = (evt: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
    const element: any = evt.target;
    const activeElement: IOption = { label: element?.dataset?.label, value: element?.dataset?.value };

    if (element.tagName !== BUTTON_TAG) {
      return;
    }

    if (props?.onChange) {
      const index: number = element?.dataset?.index ? parseInt(element?.dataset?.index, 10) : null;
      props.onChange({ name: props.name, index, ...activeElement });
    } else {
      setActiveElement(activeElement);
    }
    setIsEdited(false);
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

  const onMouseSelectUp = (evt: any) => {
    const element = evt.target;
    if (inputRef) {
      const input = inputRef?.current;
      if (element !== input) {
        onListItemsCloseByKey();
        setIsFocus(false);
        if (input?.blur) {
          input.blur();
        }
      }
    }
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
    const activeElementParsed: IOption = getActiveElementParsed(props.activeElement);
    setActiveElement(activeElementParsed);
    setLabel(activeElementParsed?.label);
  }, [props.activeElement]);

  useEffect(() => {
    document.addEventListener('mouseup', onMouseSelectUp);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', onMouseSelectUp);
      document.addEventListener('keyup', onKeyUp);
      setIsVisibleList(false);
      setIsFocus(false);
      setIsFoundValue(false);
    };
  }, []);

  useEffect(() => {
    setElements(getElementsParsed(props.elements));
    /** TODO ??? */
    setActiveElement({ label: label?.toString(), value: label?.toString() });
  }, [props.elements]);

  useEffect(() => {
    const labelUpperCase: string = label?.toString()?.toLocaleUpperCase();
    const elementsFiltered: Array<IOption> = getElementsParsed(props.elements)?.filter(
      (element: IOption) => {
        const labelParsed: string = element?.label?.toString();
        const labelParsedUppercase: string = labelParsed?.toLocaleUpperCase();
        if (labelParsed && label) {
          return labelParsedUppercase?.indexOf(labelUpperCase) > -1
        }
        return true;
      });
    setElements(elementsFiltered);
    setIsFoundValue(elementsFiltered.length > 0);
    setIsNewElement(elementsFiltered?.length === 0);
  }, [label]);

  useEffect(() => {
    const labelUpperCase: string = label?.toString()?.toLocaleUpperCase();
    const elementsFiltered: Array<IOption> = elements?.filter(
      (element: IOption) => {
        const labelParsed: string = element?.label?.toString();
        if (labelParsed && label) {
          return labelParsed?.toLocaleUpperCase()?.indexOf(labelUpperCase) > -1
        }
        return true;
      });
    setIsNewElement(elementsFiltered?.length === 0);
    setIsFoundValue(true);
  }, [elements]);

  // useEffect(() => {
  //   const isElementFounded: boolean = elements.some(
  //     (element: IOption) => element?.label?.toString() === label?.toString()
  //   );
  //   if (!isElementFounded && activeElement?.label > '') {
  //     setElements([...getElementsParsed(props.elements), activeElement]);
  //   } else {
  //     setElements([...getElementsParsed(props.elements)]);
  //   }
  // }, [activeElement]);

  const onInputDelete = (name: string) => {
    props?.onRemove(name, null);
    setIsVisibleList(false);
    setLabel('');
    props.onChange({ name: name, label: null, value: null, index: null });
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

  const isExistValue: boolean = label > '';

  const componentThemed: any = (theme: Itheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const element: any = evt.target;
      setLabel(element.value);
      setActiveElement({label: null, value: null});
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
            value={label}
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
            inputRef={inputRef}
          />
        </SelectHeader>
        {isVisibleList && (
          <SelectListContainer>
            <List type="list-buttons" onMouseUp={onMouseUp} onKeyUp={onKeyUp}>
              {isFoundValue &&
                elements?.map((element: IOption, index: number) => {
                  const isActiveElementCompared: boolean = element?.value === activeElement?.value;
                  const backgroundColor: string = isActiveElementCompared ? theme.palette.primary.light : null;
                  const hoverBackgroundColor: string = isActiveElementCompared ? theme.palette.primary.light : null;
                  const color: string = isActiveElementCompared ? theme.mainWhiteColor : null;

                  return (
                    <ListItem
                      type="button"
                      key={`list-item-${index}`}
                      backgroundColor={backgroundColor}
                      hoverBackgroundColor={hoverBackgroundColor}
                      color={color}
                      data-index={index}
                      data-value={element.value}
                      data-label={element.label}
                      textAlign={props?.textAlign || TEXT_ALIGN}
                      fontSize={fontSize}
                      height={props?.height || DEFAULT_HEIGHT}
                      fontFamily={props?.fontFamily || theme?.fontFamily}
                    >
                      {element.label}
                    </ListItem>
                  );
                })}
              {isNewElement && props?.isCreatable && activeElement?.label > '' && (
                <ListItem
                  type="button"
                  key={`list-item-new`}
                  data-label={label}
                  data-value={label}
                  textAlign={props?.textAlign || TEXT_ALIGN}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  height={props?.height || DEFAULT_HEIGHT}
                >
                  Create new {label}
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
