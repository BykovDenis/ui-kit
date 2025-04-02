import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import ITheme from '../../styles/types/itheme';
import MultiSelectStyled from './multi-select-styled';
import Label from '../../label/src';
import FormControl from '../../form-control/src';
import CrossIcon from '../../icons-components/24x24/circle-cross-icon';
import CircleCrossIcon from '../../icons-components/24x24/circle-cross-icon';
import Button from '../../button/src';
import ChevronUpIcon from '../../icons-components/24x24/chevron-up-icon';
import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import List from '../../list/src';
import ListItem from '../../list-item/src';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import ListContainerStyled from './list-container.styled';
import CirclePlusIcon from '../../icons-components/24x24/circle-plus-icon';
import ButtonStyled from './button.styled';
import pixelsMeasureToNumber from '../../helpers/pixels-measure-to-number';
import Input from '../../input/src';
import ButtonExpandStyled from './button-expand.styled';
import ToggleContainer from './toggle-container';
import LabelContainer from './label-container.styled';
import MultiSelectContainerStyled from './multi-select-container.styled';
import sortObjectData from '../../helpers/sort-object-data';
import TMultiSelectOption from '../types/tmulti-select-option';
import MultiSelectVariant from '../enums/multi-select-variant';
import { onKeyUpEscapeEventHandler } from '../../helpers/on-key-up-event-handler';
import optionsToArray from '../helpers/options-to-array';
import TMultiSelectObjects from '../types/tmulti-select-objects';
import TMapMultiSelectObjects from '../types/tmap-multi-select-objects';
import convertArrayToMap from '../../helpers/convert-array-to-map';
import getObjectsElementsFromLocalStorage from '../helpers/get-objects-elements-from-localstorage';
import {
  TAG_NAME_BUTTON,
  TAG_NAME_DIV,
  TAG_NAME_INPUT,
  TAG_NAME_LABEL,
  TAG_NAME_PATH,
  TAG_NAME_SVG,
} from '../../constants';
import { BUTTON_MULTI_SELECT_CONTAINER, BUTTON_TOGGLE_NAME } from './constants';
import { createPortal } from 'react-dom';

const MultiSelectObjects: React.FunctionComponent<PropsWithChildren<TMultiSelectObjects>> = (
  props: TMultiSelectObjects
) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [variant] = useState<string | null>(props.variant || MultiSelectVariant.Normal);

  const elementNamesSorted: Array<TMultiSelectOption> = React.useMemo(
    () =>
      props?.sortDirection ? sortObjectData(props.elementNames, 'value', props.sortDirection) : props.elementNames,
    [props.elementNames, props.sortDirection]
  );

  const elementNamesMapped: Array<{ label: string; value: string }> = React.useMemo(
    () =>
      elementNamesSorted?.map((element: TMultiSelectOption) => ({
        label: element?.label,
        value: element?.value?.toString(),
      })),
    [elementNamesSorted]
  );

  const mapElementsSelected: Map<string, number | string> = React.useMemo(() => {
    return convertArrayToMap(props.elementNamesDefaultSelected);
  }, [props.elementNamesDefaultSelected]);

  const [elementNames, setElementNames] = useState<Array<TMultiSelectOption>>(elementNamesMapped);
  const [elementNamesSelected, setElementNamesSelected] = useState<TMapMultiSelectObjects>(mapElementsSelected);
  const [searchText, setSearchText] = useState<string>(null);
  const [isUseLocaleStorage] = useState<boolean>(
    props?.isUseLocaleStorage !== undefined ? props.isUseLocaleStorage : false
  );

  const btnMultiSelect: any = useRef();
  const btnToggleContainer = useRef();

  const multiSelectVisibleChange = (evt: any) => {
    const element = evt.target;
    const btnMultiSelectElement = btnMultiSelect?.current;
    // @ts-ignore-next-line
    if (btnMultiSelectElement && !btnMultiSelectElement?.contains(element)) {
      setExpanded(false);
    }
  };

  const onListItemsCloseByKey = () => {
    setExpanded(false);
  };

  const onElementNameSelect = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const element: any = evt.currentTarget;
    const columnName: string = element?.dataset?.label;
    const columnValue: string = element?.dataset?.value;
    const id: string = element?.dataset?.id;
    if (isNotEmptyString(columnName) && props.id === id) {
      // @ts-ignore-next-line
      setElementNamesSelected((elementNamesSelected: TMapMultiSelectObjects) => {
        const elementNamesSelectedModified: Map<string, number | string> = elementNamesSelected;
        elementNamesSelectedModified.set(columnName, columnValue);

        // @ts-ignore-next-line
        const elementNamesSelectedModifiedSorted: TMapMultiSelectObjects = elementNamesSelectedModified; // convertArrayToMap(sortObjectData(optionsToArray(elementNamesSelectedModified), 'key', 'asc' ));

        if (isUseLocaleStorage) {
          const elementNamesSelectedText: string = JSON.stringify(optionsToArray(elementNamesSelectedModifiedSorted));
          localStorage.setItem(props.name, elementNamesSelectedText);
        }
        if (props?.onChange) {
          props.onChange(optionsToArray(elementNamesSelectedModifiedSorted));
        }
        return elementNamesSelectedModifiedSorted;
      });
    }
  };

  const onKeyUp = (evt: any) => {
    onKeyUpEscapeEventHandler(evt, onListItemsCloseByKey);
  };

  useEffect(() => {
    const elementsSelected: TMapMultiSelectObjects = isUseLocaleStorage
      ? getObjectsElementsFromLocalStorage(props.name)
      : convertArrayToMap(props?.elementNamesDefaultSelected);
    if (isUseLocaleStorage) {
      const elementNamesSelectedText: string = JSON.stringify(optionsToArray(elementsSelected));
      localStorage.setItem(props.name, elementNamesSelectedText);
    }
    setElementNamesSelected(elementsSelected);
    document.addEventListener('mouseup', multiSelectVisibleChange);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', multiSelectVisibleChange);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    // console.log('elementNamesSelected =', elementNamesSelected);
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    const elementNamesSorted: Array<TMultiSelectOption> = props?.sortDirection
      ? sortObjectData(props.elementNames, 'value', props.sortDirection)
      : props.elementNames;

    const elementNamesMapped: Array<TMultiSelectOption> = elementNamesSorted?.map(
      (element: { label: string; value: number | string }) => ({
        label: element?.label,
        value: element?.value?.toString(),
      })
    );
    setElementNames(elementNamesMapped);
  }, [props.elementNames]);

  useEffect(() => {
    // console.log('elementNamesSelected =', elementNamesSelected);
    if (props.elementNamesDefaultSelected?.length === 0) {
      setElementNamesSelected(new Map());
    }
  }, [props.elementNamesDefaultSelected]);

  const componentThemed: any = (theme: ITheme) => {
    const onListExpanded = () => {
      setExpanded((isExpanded: boolean) => !isExpanded);
    };

    const onColumnNameRemove = (evt: React.ChangeEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
      evt.stopPropagation();
      const element = evt.currentTarget;
      const id: string = element?.dataset?.id;
      if (id === props.id) {
        const columnName: string = element?.dataset?.label;
        if (columnName) {
          const elementNamesEdited: TMapMultiSelectObjects = isUseLocaleStorage
            ? getObjectsElementsFromLocalStorage(props.name)
            : elementNamesSelected;
          elementNamesEdited.delete(columnName);
          if (isUseLocaleStorage) {
            const elementNamesSelectedText: string = JSON.stringify(optionsToArray(elementNamesEdited));
            localStorage.setItem(props.name, elementNamesSelectedText);
          }
          setElementNamesSelected(elementNamesEdited);
          if (props?.onChange) {
            props.onChange(optionsToArray(elementNamesEdited));
          }
        }
      }
    };

    const onAllElementsSelected = () => {
      const allElementSelected: TMapMultiSelectObjects = convertArrayToMap(elementNames);

      setElementNamesSelected(allElementSelected);

      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = JSON.stringify(optionsToArray(allElementSelected));
        localStorage.setItem(props.name, elementNamesSelectedText);
      }
      if (props?.onChange) {
        props.onChange(optionsToArray(allElementSelected));
      }
      setExpanded(false);
      setSearchText('');
    };

    const onAllElementsUnselected = () => {
      const elementNamesSelectedParsed: TMapMultiSelectObjects = new Map();
      setElementNamesSelected(elementNamesSelectedParsed);

      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = JSON.stringify(optionsToArray(elementNamesSelectedParsed));
        localStorage.setItem(props.name, elementNamesSelectedText);
      }
      if (props?.onChange) {
        props.onChange(optionsToArray(elementNamesSelectedParsed));
      }
      setExpanded(false);
    };

    const onSearchStringChange = (evt: React.ChangeEvent<HTMLInputElement>, name: string, value: string) => {
      if (value !== undefined) {
        setSearchText(value);
      }
    };

    const onSearchStringClean = () => {
      setSearchText(null);
    };

    const onBtnElementsClickExpand = (evt: React.ChangeEvent<HTMLButtonElement>) => {
      const rootElement = evt.currentTarget;
      const element = evt.target;
      const id = rootElement.dataset.id;
      const buttonToggle = rootElement?.dataset?.name;
      if (
        !props.disabled &&
        props.id === id &&
        (buttonToggle === BUTTON_TOGGLE_NAME || buttonToggle === BUTTON_MULTI_SELECT_CONTAINER)
      ) {
        if (element.tagName === TAG_NAME_DIV) {
          const children: any = element?.children[0];
          if (children) {
            if (
              (children?.tagName === TAG_NAME_BUTTON && children?.dataset?.dataListItem === 'true') ||
              children?.tagName !== TAG_NAME_BUTTON
            ) {
              setExpanded(!isExpanded);
            }
          } else {
            setExpanded(!isExpanded);
          }
        } else if (
          element.tagName !== TAG_NAME_LABEL &&
          element.tagName !== TAG_NAME_INPUT &&
          element.tagName !== TAG_NAME_BUTTON &&
          element.tagName !== TAG_NAME_SVG &&
          element.tagName !== TAG_NAME_PATH
        ) {
          setExpanded(!isExpanded);
        }
      }
    };

    const arrElementNames: Array<TMultiSelectOption> =
      elementNamesSelected && elementNamesSelected.size > 0 ? optionsToArray(elementNamesSelected) : [];

    const elementLabelsFiltered = elementNames?.filter((elementName: TMultiSelectOption) =>
      arrElementNames?.some((arrElement: TMultiSelectOption) => elementName?.label === arrElement.label)
    );

    const elementNamesFiltered: Array<TMultiSelectOption> =
      elementNames?.filter(
        (columnName: { label: string; value: string }) =>
          !elementNamesSelected?.has(columnName.label) &&
          (searchText?.length >= 1 ? columnName?.label?.toUpperCase()?.indexOf(searchText?.toUpperCase()) > -1 : true)
      ) ?? [];

    const fontSize: number | string = props.fontSize ?? theme.baseFontSize;

    const color: string = props.disabled ? theme?.palette?.baseFontColorOpacity05 : theme?.palette?.baseFontColor;
    const outlinedColor: string = props.disabled ? 'transparent' : theme.mainOutlinedColor;
    const borderColorFocused: string = props.disabled ? 'transparent' : theme.palette.primary.main;
    const borderColorHovered: string = props.disabled ? outlinedColor : theme.mainOutlinedHoverColor;

    let top: number = 0;
    let left: number = 0;
    let width: number = 0;

    if (btnMultiSelect?.current?.getBoundingClientRect) {
      const clientRectPosition: any = btnMultiSelect.current.getBoundingClientRect();
      top = clientRectPosition.bottom;
      left = clientRectPosition.left;
      width = clientRectPosition.width;
    }

    const SelectListContainerPortal = () =>
      createPortal(
        <ToggleContainer
          data-name="toggle-container"
          data-cy={`${props.id}-toggle-container`}
          ref={btnToggleContainer}
          backgroundColor={theme.mainBackgroundColor}
          top={top}
          left={left}
          width={width}
        >
          <FormControl>
            <Button
              padding="2px"
              width="50%"
              onClick={onAllElementsSelected}
              fontSize={pixelsMeasureToNumber(fontSize)}
              color={theme.palette.baseFontColor}
              backgroundColor={theme.palette.primary.light}
              disabled={props.disabled}
            >
              Select all <CirclePlusIcon color={theme.palette.baseFontColor} />
            </Button>
            <Button
              padding="2px"
              width="50%"
              onClick={onAllElementsUnselected}
              fontSize={pixelsMeasureToNumber(fontSize)}
              color={theme.palette.baseFontColor}
              backgroundColor={theme.palette.primary.light}
              disabled={props.disabled}
            >
              Unselect all <CircleCrossIcon color={theme.palette.baseFontColor} />
            </Button>
          </FormControl>
          <Input
            name="search-values"
            data-cy={`${props.id}-search-input`}
            value={searchText}
            onChange={onSearchStringChange}
            onRemove={onSearchStringClean}
            placeholder="Search elements"
            variant="outlined"
            isNotClearable={props.disabled}
            disabled={props.disabled}
            fontSize={pixelsMeasureToNumber(fontSize)}
          />
          <ListContainerStyled
            backgroundColor={theme.mainBackgroundColor}
            outlinedColor={theme.palette.primary.lighter}
          >
            <List
              data-cy={`${props.id}-list`}
              type="list-buttons"
              onKeyUp={onKeyUp}
              backgroundColor={theme.mainBackgroundColor}
              color={theme.palette.baseFontColor}
            >
              {!props.disabled &&
                variant === MultiSelectVariant.Atlas &&
                elementLabelsFiltered?.map((columnElement: TMultiSelectOption, index: number) => (
                  <ListItem
                    type="button"
                    key={`${index}-list-item`}
                    padding="0"
                    justifyContent="space-between"
                    color={theme.palette.baseFontColor}
                    data-value={columnElement.value}
                    data-label={columnElement.label}
                    data-id={props.id}
                    data-list-item={true}
                    onClick={onColumnNameRemove}
                    backgroundColor={theme.palette.primary.lighter}
                  >
                    <Label
                      backgroundColor="transparent"
                      data-label={columnElement.label}
                      display="inline-flex"
                      height="100%"
                      fontSize={pixelsMeasureToNumber(fontSize)}
                    >
                      {columnElement.label}
                      <FormControl position="absolute" right={5} width="initial" data-value={columnElement.value}>
                        <CircleCrossIcon color={theme.palette.baseFontColor} />
                      </FormControl>
                    </Label>
                  </ListItem>
                ))}
              {!props.disabled &&
                elementNamesFiltered?.map((columnElement: { label: string; value: string }, index: number) => (
                  <ListItem
                    type="button"
                    key={`${index}-list-item`}
                    padding="0"
                    justifyContent="space-between"
                    color={theme.palette.baseFontColor}
                    data-label={columnElement.label}
                    data-value={columnElement.value}
                    data-id={props.id}
                    onClick={onElementNameSelect}
                  >
                    <Label
                      backgroundColor="transparent"
                      data-value={columnElement.value}
                      display="inline-flex"
                      height="100%"
                      fontSize={pixelsMeasureToNumber(fontSize)}
                    >
                      {columnElement.label}
                      <FormControl position="absolute" right={5} width="initial" data-value={columnElement.value}>
                        <CirclePlusIcon color={theme.palette.baseFontColor} />
                      </FormControl>
                    </Label>
                  </ListItem>
                ))}
            </List>
          </ListContainerStyled>
        </ToggleContainer>,
        document.body
      );

    return (
      <MultiSelectContainerStyled
        data-name={BUTTON_MULTI_SELECT_CONTAINER}
        data-id={props.id}
        id={props.id}
        width={props?.width}
        borderColor={outlinedColor}
        borderColorFocused={borderColorFocused}
        borderColorHovered={theme.mainOutlinedHoverColor}
        onClick={onBtnElementsClickExpand}
        ref={btnMultiSelect}
        backgroundColor={props.disabled ? theme.inactiveBackgroundColor : 'transparent'}
        disabled={props.disabled}
      >
        {props?.label && (
          <LabelContainer backgroundColor={theme.mainBackgroundColor}>
            <Label
              fontSize={pixelsMeasureToNumber(fontSize) - 2}
              disabled={props.disabled}
              fontFamily={props?.fontFamily || theme?.fontFamily}
              backgroundColor={theme.mainBackgroundColor}
            >
              {props?.label}
            </Label>
          </LabelContainer>
        )}
        <FormControl>
          <MultiSelectStyled
            data-id={`${props.id}-border-right`}
            data-cy={`${props.id}-selected-elements`}
            className={props?.className}
            height={props.height}
            isExistLabel={isNotEmptyString(props?.label)}
            borderColor={theme.palette.baseFontColorOpacity05}
          >
            {variant === MultiSelectVariant.Normal ? (
              elementLabelsFiltered?.map((columnNameElement: { label: string; value: string }, index: number) => (
                <FormControl
                  key={`${index}-button`}
                  width="initial"
                  outline={`1px solid ${theme?.palette?.baseFontColorOpacity05}`}
                  borderRadius={5}
                  padding="1px"
                  margin="0 3px 0 0"
                  backgroundColor={props.disabled ? theme.inactiveColor : theme.palette.primary.main}
                  alignItems="stretch"
                >
                  <Label
                    fontSize={pixelsMeasureToNumber(fontSize)}
                    htmlFor={`${props.id}-${index}-button`}
                    whiteSpace="normal"
                    wordBreak="break-all"
                    lineHeight={1}
                    color={theme.palette.baseFontColor}
                    backgroundColor="transparent"
                    data-label="multiselect-label"
                    display="inline-flex"
                  >
                    {columnNameElement.label}
                  </Label>{' '}
                  <ButtonStyled
                    id={`${props.id}-${index}-button`}
                    onClick={onColumnNameRemove}
                    data-label={columnNameElement.label}
                    data-id={props.id}
                    disabled={props.disabled}
                  >
                    <CrossIcon color={theme.palette.baseFontColor} />
                  </ButtonStyled>
                </FormControl>
              ))
            ) : (
              <Label>
                {elementLabelsFiltered?.length ?? 0} of {elementNames?.length ?? 0} elements selected
              </Label>
            )}
          </MultiSelectStyled>
          <ButtonExpandStyled
            data-name="button-toggle"
            data-id={props.id}
            data-cy={`${props.id}-btn-expand`}
            onClick={onListExpanded}
            fontSize={pixelsMeasureToNumber(fontSize)}
            borderColor={outlinedColor}
            borderColorFocused={theme.palette.primary.light}
            disabled={props.disabled}
          >
            {isExpanded ? <ChevronUpIcon color={color} /> : <ChevronDownIcon color={color} />}
          </ButtonExpandStyled>
        </FormControl>
        {isExpanded && <SelectListContainerPortal />}
      </MultiSelectContainerStyled>
    );
  };

  if (!Consumer) {
    console.error('MultiSelect. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default MultiSelectObjects;
