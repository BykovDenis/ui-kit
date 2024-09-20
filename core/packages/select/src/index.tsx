import React, { useEffect, useRef, useState } from 'react';

import searchDomChildElement from '../../helpers/search-dom-child-element';
import Input from '../../input/src';
import Label from '../../label/src';
import List from '../../list/src';
import ListItem from '../../list-item/src';
import ITheme from '../../styles/types/itheme';
import IOption from '../types/ioption';
import ISelect from '../types/iselect';
import LabelContainer from './label-container.styled';
import SelectContainer from './select-container.styled';
import SelectHeader from './select-header.styled';
import SelectIndicator from './select-indicator.styled';
import SelectListContainer from './select-list-container.styled';
import getUniqueIndex from '../../helpers/get-unique-index';
import { onKeyUpEscapeEventHandler } from '../../helpers/on-key-up-event-handler';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import calculationPaddingByTextAlign from './helpers/calculation-padding-by-text-align';
import {
  BUTTON_TAG,
  DEFAULT_HEIGHT,
  FONT_WEIGHT_REGULAR,
  INPUT_TAG,
  IS_NOT_USE_DEBOUNCE_COUNT,
  TEXT_ALIGN_CENTER,
} from '../../constants';
import { v4 as uuidv4 } from 'uuid';

function getElementsParsed(elements: Array<IOption | string | number>, name: string): Array<IOption> {
  return elements?.map((element: string | number | IOption) => {
    if (typeof element === 'object') {
      return element;
    }
    return {
      name,
      index: getUniqueIndex(),
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

function getElementsFiltered(elements: Array<IOption>, label: string) {
  const labelUpperCase: string = label?.toString()?.toLocaleUpperCase();
  return elements?.filter((element: IOption) => {
    const labelParsed: string = element?.label?.toString();
    const labelParsedUppercase: string = labelParsed?.toLocaleUpperCase();
    if (labelParsed && label) {
      return labelParsedUppercase?.indexOf(labelUpperCase) > -1;
    }
    return true;
  });
}

function getElementsExactFiltered(elements: Array<IOption>, label: string) {
  const labelUpperCase: string = label?.toString()?.toLocaleUpperCase();
  return elements?.filter((element: IOption) => {
    const labelParsed: string = element?.label?.toString();
    const labelParsedUppercase: string = labelParsed?.toLocaleUpperCase();
    if (labelParsed && label) {
      return labelParsedUppercase === labelUpperCase;
    }
    return true;
  });
}

const Select: React.FunctionComponent<ISelect> = (props: ISelect) => {
  const activeElementParsed: IOption = getActiveElementParsed(props.activeElement);
  const isScrollingToSelected: boolean =
    props?.isScrollingToSelected !== undefined ? props.isScrollingToSelected : false;

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [label, setLabel] = useState<string>(
    props?.regExp ? activeElementParsed?.label?.replaceAll(props.regExp, '') : activeElementParsed?.label
  );
  const [elements, setElements] = useState<Array<IOption>>(getElementsParsed(props.elements, props.name));
  const [isVisibleList, setIsVisibleList] = useState<boolean>(false);
  const [isFoundValue, setIsFoundValue] = useState<boolean>(true);
  const [isNewElement, setIsNewElement] = useState<boolean>(false);
  const [activeElement, setActiveElement] = useState<IOption>(activeElementParsed);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [activeIndexElement, setActiveIndexElement] = useState<number>(null);
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const selectListContainerRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [uuid] = useState<string>(uuidv4());

  const onSelectChange = (evt: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
    const element: any = evt.target;
    const isTypeOfValueNumber: boolean = typeof activeElement?.value === 'number';
    const activeElementState: IOption = {
      label: element?.dataset?.label,
      value: isTypeOfValueNumber ? Number(element?.dataset?.value) : element?.dataset?.value,
    };

    if (element.tagName !== BUTTON_TAG) {
      return;
    }
    const index: number = element?.dataset?.index ? parseInt(element?.dataset?.index, 10) : null;
    if (props?.onChange) {
      props.onChange({ name: props.name, index, ...activeElementState });
    }
    if (activeElementState?.label) {
      setActiveElement({ name: props.name, index, ...activeElementState });
    }
    setLabel(props?.regExp ? activeElementState?.label?.replaceAll(props.regExp, '') : activeElementState?.label);
    setIsEdited(false);
    setIsVisibleList((isVisibleList: boolean) => !isVisibleList);
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
      const selectContainer = selectListContainerRef?.current;
      if (element !== input && element !== selectContainer) {
        onListItemsCloseByKey();
        setIsFocus(false);
        if (input?.blur) {
          input.blur();
        }
      }
    }
  };

  const onMouseDown = (evt: React.MouseEvent<HTMLElement, MouseEvent>, listRef: any) => {
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
    onKeyUpEscapeEventHandler(evt, onListItemsCloseByKey);
  };

  useEffect(() => {
    document.addEventListener('mouseup', onMouseSelectUp);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', onMouseSelectUp);
      document.addEventListener('keyup', onKeyUp);
      setIsVisibleList(false);
      setIsFocus(false);
      setIsFoundValue(true);
    };
  }, []);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    const activeElementParsed: IOption = getActiveElementParsed(props.activeElement);
    setActiveElement(activeElementParsed);
    setLabel(props?.regExp ? activeElementParsed?.label?.replaceAll(props.regExp, '') : activeElementParsed?.label);
  }, [props.activeElement]);

  useEffect(() => {
    const elementsFiltered: Array<IOption> = getElementsParsed(props.elements, props.name);
    setElements(elementsFiltered);
    setActiveElement(activeElementParsed);
  }, [props.elements]);

  useEffect(() => {
    if (isEdited) {
      const labelUpperCase: string = label?.toString()?.toLocaleUpperCase();
      const elementsFiltered: Array<IOption> = isNotEmptyString(labelUpperCase)
        ? getElementsFiltered(getElementsParsed(props.elements, props.name), labelUpperCase)
        : getElementsParsed(props.elements, props.name);
      const elementsExactFiltered: Array<IOption> = isNotEmptyString(labelUpperCase)
        ? getElementsExactFiltered(getElementsParsed(props.elements, props.name), labelUpperCase)
        : getElementsParsed(props.elements, props.name);
      setElements(elementsFiltered);
      setIsFoundValue(elementsFiltered?.length > 0);
      setIsNewElement(
        (elementsFiltered?.length > 0 && isNotEmptyString(label) && elementsExactFiltered?.length === 0) ||
          elementsFiltered?.length === 0
      );
    } else {
      setElements(getElementsParsed(props.elements, props.name));
    }
  }, [label]);

  const onInputDelete = (name: string) => {
    props?.onRemove(name, null);
    setIsVisibleList(false);
    setLabel('');
    setIsEdited(false);
    setActiveElement({ label: null, value: null });
    props.onChange({ name: name, label: null, value: null, index: null });
    setElements(getElementsParsed(props.elements, props.name));
    setIsFoundValue(true);
  };

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    const elementParsed: string = element.value.trim();
    if (elementParsed === '') {
      setIsVisibleList(true);
      setLabel(props?.regExp ? activeElementParsed?.label?.replaceAll(props.regExp, '') : activeElementParsed?.label);
    }
    setIsEdited(true);
  };

  const onLabelClick = () => {
    setIsVisibleList(true);
  };

  const onInputFocus = () => {
    setIsFocus(true);
    setIsVisibleList(true);
    if (isScrollingToSelected) {
      const elements = document.querySelector(`#${props.id || uuid}-list-items`);
      if (elements) {
        const options = elements.children[0].getBoundingClientRect();
        if (options && activeIndexElement > 0) {
          elements?.scrollTo({ behavior: 'smooth', top: activeIndexElement * 40 });
        }
      }
    }
  };

  const isExistValue: boolean = label > '';

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const element: any = evt.target;
      setLabel(props?.regExp ? element?.value?.replaceAll(props.regExp, '') : element?.value);
      setActiveElement({ label: null, value: null });
    };

    const onInputBlur = () => {
      setIsFocus(false);
      setIsEdited(false);
      setActiveElement(isFoundValue ? activeElementParsed : null);
      setIsVisibleList(false);
    };

    const indicatorColor: string = !props?.isReadOnly
      ? isExistValue && isFoundValue
        ? isEdited
          ? theme?.mainGrayColor
          : props?.indicatorColor || theme?.palette?.primary?.main
        : theme?.palette?.secondary?.main
      : theme?.palette?.baseFontColor;

    const backgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : props?.backgroundColor || theme.mainBackgroundColor;

    const textAlign: string = props?.textAlign || theme?.components?.Select?.textAlign || TEXT_ALIGN_CENTER;
    const paddingCalculated: string = calculationPaddingByTextAlign(
      textAlign,
      props.isNotVisibleIndicator,
      props?.isNotClearable
    );

    return (
      <SelectContainer data-test={props.id} id={uuid} width={props?.width} height={props?.height} margin={props.margin}>
        <SelectHeader height={props?.height || DEFAULT_HEIGHT}>
          {props?.label && (
            <LabelContainer isExistValue={isExistValue || isFocus} backgroundColor={backgroundColor}>
              {props?.label && (
                <Label
                  htmlFor={`${props.id}`}
                  fontSize={labelFontSize}
                  isFocus={isFocus}
                  isReadOnly={props.isReadOnly}
                  fontWeight={props?.fontWeight}
                  disabled={props.disabled}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  onClick={onLabelClick}
                >
                  {props?.label}
                </Label>
              )}
            </LabelContainer>
          )}
          {!props.isNotVisibleIndicator && <SelectIndicator backgroundColor={indicatorColor} />}
          <Input
            {...props}
            id={`${props.id}`}
            name={props.name}
            height={props?.height}
            width={props?.width}
            onChange={onInputChange}
            onRemove={onInputDelete}
            onInput={onInput}
            variant={props?.variant}
            value={label}
            textAlign={textAlign}
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
            type={props?.type}
            fontWeight={props?.fontWeight || FONT_WEIGHT_REGULAR}
            isReadOnly={props?.isReadOnly}
            isNotRunDebounce={elements?.length < IS_NOT_USE_DEBOUNCE_COUNT}
            backgroundColor={backgroundColor}
            color={props?.color}
            isNotClearable={props?.isNotClearable}
            borderColor={props?.borderColor}
            hoverColor={props?.hoverColor}
            focusColor={props?.focusColor}
            inputRef={inputRef}
            regExp={props?.regExp}
            padding={paddingCalculated}
            error={props.error}
          />
        </SelectHeader>
        {isVisibleList && (
          <SelectListContainer
            {...props}
            backgroundColor={backgroundColor}
            outlinedColor={theme.palette.primary.moreLighter}
            ref={selectListContainerRef}
            top={props?.height || DEFAULT_HEIGHT}
            id={`${props.id}-list-items`}
          >
            <List
              id={`${props.id}-list`}
              type="list-buttons"
              onMouseDown={onMouseDown}
              onKeyUp={onKeyUp}
              fontSize={props?.fontSize}
            >
              {isFoundValue &&
                elements?.map((element: IOption, index: number) => {
                  const isSelectedElement: boolean = element?.value === activeElement?.value;
                  if (isSelectedElement) {
                    setActiveIndexElement(index);
                  }
                  return (
                    <ListItem
                      type="button"
                      key={`${props.id}-list-item-${index}`}
                      data-index={element.index}
                      data-value={element.value}
                      data-label={element.label}
                      data-element-selected={`${props.id}-element${
                        element?.value && activeElement?.value && isSelectedElement ? '-selected' : ''
                      }`}
                      textAlign={textAlign}
                      fontSize={fontSize}
                      height={props?.height || DEFAULT_HEIGHT}
                      fontFamily={props?.fontFamily || theme?.fontFamily}
                      padding={paddingCalculated}
                      backgroundColor={
                        isNotEmptyString(element?.label) &&
                        isNotEmptyString(activeElement?.label) &&
                        element.label === activeElement.label
                          ? theme.palette.primary.main
                          : theme.mainBackgroundColor
                      }
                    >
                      {element.label}
                    </ListItem>
                  );
                })}
              {isNewElement && props?.isCreatable && (
                <ListItem
                  type="button"
                  key={`${props.id}-list-item-new`}
                  data-label={label}
                  data-value={label}
                  textAlign={textAlign}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  height={props?.height || DEFAULT_HEIGHT}
                  padding={paddingCalculated}
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

  if (!Consumer) {
    console.error('The Select component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Select;
