import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import searchDomChildElement from '../../helpers/search-dom-child-element';
import Input from '@dbykov-ui-kit/input';
import Label from '@dbykov-ui-kit/label';
import List from '@dbykov-ui-kit/list';
import ListItem from '@dbykov-ui-kit/list-item';
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
import { getIsClient } from '../../utilities/ssr/get-is-client';
import { Portal } from '../../portal';
import { useTheme } from '@dbykov-ui-kit/styles';

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
  const [isVisibleList, setIsVisibleList] = useState<boolean>(false);
  const [activeElement, setActiveElement] = useState<IOption>(activeElementParsed);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const theme = useTheme();

  // The filtered list is derived in the same render as the label, not
  // synchronized into state by a passive effect: the effect ran after paint,
  // so every keystroke committed one frame whose first list item still
  // belonged to the previous filter — clicks landed on the wrong option.
  const elementsParsed: Array<IOption> = useMemo(
    () => getElementsParsed(props.elements, props.name),
    [props.elements, props.name]
  );
  // typing clears activeElement, selection/reset restores it — that is what
  // separates "user is filtering" from "label just mirrors the chosen value"
  const isFiltering: boolean = isNotEmptyString(label) && activeElement?.value == null;
  const elements: Array<IOption> = useMemo(
    () => (isFiltering ? getElementsFiltered(elementsParsed, label) : elementsParsed),
    [elementsParsed, isFiltering, label]
  );
  const isFoundValue: boolean = !isFiltering || elements?.length > 0;
  const isNewElement: boolean =
    isFiltering &&
    ((elements?.length > 0 && getElementsExactFiltered(elementsParsed, label)?.length === 0) ||
      elements?.length === 0);

  // derived, not state: setting it from inside the list render caused
  // an update-during-render loop
  const activeIndexElement: number = elements?.findIndex(
    (element: IOption) => element?.value === activeElement?.value
  );

  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const selectListContainerRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [uuid] = useState<string>(uuidv4());

  // aria-activedescendant target while navigating with the keyboard;
  // clamped so a shrinking filter can never leave it out of range
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const highlighted: number =
    highlightedIndex >= 0 && highlightedIndex < (elements?.length ?? 0) ? highlightedIndex : -1;

  const listboxId: string = `${props.id}-list`;
  const getOptionId = (index: number): string => `${props.id}-option-${index}`;

  // single selection path shared by mouse clicks and the Enter key
  const applySelection = (option: IOption, index: number | null) => {
    if (props?.onChange) {
      props.onChange({ name: props.name, index, label: option?.label, value: option?.value });
    }
    if (option?.label) {
      setActiveElement({ name: props.name, index, label: option.label, value: option.value });
    }
    setLabel(props?.regExp ? option?.label?.replaceAll(props.regExp, '') : option?.label);
    setIsEdited(false);
    setIsVisibleList(false);
    setHighlightedIndex(-1);
  };

  const onSelectChange = (evt: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent>) => {
    const element: any = evt.target;
    if (element.tagName !== BUTTON_TAG) {
      return;
    }
    const isTypeOfValueNumber: boolean = typeof activeElement?.value === 'number';
    const option: IOption = {
      label: element?.dataset?.label,
      value: isTypeOfValueNumber ? Number(element?.dataset?.value) : element?.dataset?.value,
    };
    const index: number = element?.dataset?.index ? parseInt(element?.dataset?.index, 10) : null;
    applySelection(option, index);
  };

  const onInputKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (props?.readOnly || props?.disabled) {
      return;
    }
    const count: number = elements?.length ?? 0;
    const moveTo = (index: number) => {
      setHighlightedIndex(index);
      document.getElementById(getOptionId(index))?.scrollIntoView?.({ block: 'nearest' });
    };
    switch (evt.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        evt.preventDefault();
        if (!isVisibleList) {
          setIsVisibleList(true);
        }
        if (count === 0) {
          return;
        }
        if (highlighted < 0) {
          moveTo(activeIndexElement >= 0 ? activeIndexElement : 0);
          return;
        }
        moveTo(evt.key === 'ArrowDown' ? (highlighted + 1) % count : (highlighted - 1 + count) % count);
        return;
      }
      case 'Home':
      case 'End': {
        if (isVisibleList && count > 0) {
          evt.preventDefault();
          moveTo(evt.key === 'Home' ? 0 : count - 1);
        }
        return;
      }
      case 'Enter': {
        if (isVisibleList && highlighted >= 0 && elements?.[highlighted]) {
          evt.preventDefault();
          applySelection(elements[highlighted], highlighted);
        }
        return;
      }
      default:
        return;
    }
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
    setHighlightedIndex(-1);
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
      document.removeEventListener('keyup', onKeyUp);
      setIsVisibleList(false);
      setIsFocus(false);
    };
  }, []);

  useEffect(() => {
    const activeElementParsed: IOption = getActiveElementParsed(props.activeElement);
    setActiveElement(activeElementParsed);
    setLabel(props?.regExp ? activeElementParsed?.label?.replaceAll(props.regExp, '') : activeElementParsed?.label);
  }, [props.activeElement]);

  useEffect(() => {
    setActiveElement(activeElementParsed);
  }, [props.elements]);

  const onInputDelete = (name: string) => {
    props?.onRemove(name, null);
    setIsVisibleList(false);
    setLabel('');
    setIsEdited(false);
    setActiveElement({ label: null, value: null });
    props.onChange({ name: name, label: null, value: null, index: null });
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
      // typing re-filters the list: highlight its first option so Enter
      // immediately picks the best match
      setHighlightedIndex(0);
    };

    const onInputBlur = () => {
      setIsFocus(false);
      setIsEdited(false);
      setActiveElement(isFoundValue ? activeElementParsed : null);
      setIsVisibleList(false);
      setHighlightedIndex(-1);
    };

    const indicatorColor: string = !props?.readOnly
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

    let top: number = 0;
    let left: number = 0;
    let width: number = 0;

    if (getIsClient() && inputRef?.current) {
      const clientRectPosition: any = inputRef.current.getBoundingClientRect();
      top = clientRectPosition.bottom + window.scrollY;
      left = clientRectPosition.left;
      width = clientRectPosition.width;
    }

    // custom callbacks are not DOM attributes: keep them out of the spread,
    // is-prop-valid lets any on* prop through to the element
    const { onRemove: _onRemove, ...listContainerProps } = props;

    // plain JSX value, not a nested component: a component type created
    // inside render is new on every pass, so React unmounted and remounted
    // the whole list on each parent state update (unstable DOM under cursor)
    const selectListContainerPortal = (
      <Portal>
        <SelectListContainer
          {...listContainerProps}
          backgroundColor={backgroundColor}
          outlinedColor={theme.palette.primary.moreLighter}
          ref={selectListContainerRef}
          top={top}
          left={left}
          width={width}
          id={`${props.id}-list-items`}
        >
          <List
            id={listboxId}
            type="list-buttons"
            role="listbox"
            aria-label={typeof props?.label === 'string' ? props.label : undefined}
            onMouseDown={onMouseDown}
            onKeyUp={onKeyUp}
            fontSize={props?.fontSize}
          >
            {isFoundValue &&
              elements?.map((element: IOption, index: number) => {
                const isSelectedElement: boolean = element?.value === activeElement?.value;
                return (
                  <ListItem
                    type="button"
                    key={`${props.id}-list-item-${index}`}
                    id={getOptionId(index)}
                    role="option"
                    aria-selected={isSelectedElement}
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
                        : index === highlighted
                        ? theme.palette.primary.lighter
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
      </Portal>
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
                  readOnly={props.readOnly}
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
            role="combobox"
            aria-expanded={isVisibleList}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={isVisibleList && highlighted >= 0 ? getOptionId(highlighted) : undefined}
            onKeyDown={onInputKeyDown}
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
            readOnly={props?.readOnly}
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
        {isVisibleList && selectListContainerPortal}
      </SelectContainer>
    );
  };


  return componentThemed(theme);
};

export default Select;
