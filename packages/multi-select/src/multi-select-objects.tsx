import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import TMultiSelect from '../types/tmulti-select';
import ITheme from '../../styles/types/itheme';
import MultiSelectStyled from './multi-select-styled';
import Label from '../../label/src';
import FormControl from '../../form-control/src';
import CrossIcon from '../../icons-components/24x24/circle-cross-icon';
import Button from '../../button/src';
import ChevronUpIcon from '../../icons-components/24x24/chevron-up-icon';
import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import List from '../../list/src';
import ListItem from '../../list-item/src';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import getElementsFromLocalStorage from '../../helpers/get-elements-from-localstorage';
import ListContainerStyled from './list-container.styled';
import CirclePlusIcon from '../../icons-components/24x24/circle-plus-icon';
import CircleCrossIcon from '../../icons-components/24x24/circle-cross-icon';
import ButtonStyled from './button.styled';
import pixelsMeasureToNumber from '../../helpers/pixels-measure-to-number';
import Input from '../../input/src';
import ButtonExpandStyled from './button-expand.styled';
import sortArray from '../../helpers/sort-array';
import ToggleContainer from './toggle-container';
import LabelContainer from './label-container.styled';
import MultiSelectContainerStyled from './multi-select-container.styled';
import { KEY_ESCAPE } from '../../constants';
import sortObjectData from '../../helpers/sort-object-data';
import getValuesFromElements from './helpers/get-values-from-elements';

type TMultiSelectObjects = TMultiSelect & {
  elementNames: Array<{ label: string, value: number | string }>,
};

const MultiSelectObjects: React.FunctionComponent<PropsWithChildren<TMultiSelect>> = (props: TMultiSelectObjects) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  const elementNamesSorted: Array<string | { label: string, value: number | string }> = React.useMemo(
    () =>
      props?.sortDirection ? sortObjectData(props.elementNames, 'value', props.sortDirection) : props.elementNames,
    [props.elementNames, props.sortDirection]
  );

  const elementNamesMapped: Array<{ label: string, value: string }> = React.useMemo(
    () =>
      elementNamesSorted?.map((element: { label: string, value: number | string }) => ({
        label: element?.label,
        value: element?.value?.toString(),
      })),
    [elementNamesSorted]
  );

  const [elementNames, setElementNames] = useState<Array<{ label: string, value: string }>>(elementNamesMapped);
  const [elementNamesSelected, setElementNamesSelected] = useState<Set<string>>(
    new Set(props.elementNamesDefaultSelected)
  );
  const [searchText, setSearchText] = useState<string>(null);
  const [isUseLocaleStorage] = useState<boolean>(
    props?.isUseLocaleStorage !== undefined ? props.isUseLocaleStorage : false
  );

  const btnMultiSelect = useRef();
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
    const columnName: string = element?.dataset?.value;
    if (isNotEmptyString(columnName)) {
      setElementNamesSelected((elementNamesSelected: Set<string>) => {
        const elementNamesSelectedModified: Set<string> = new Set(elementNamesSelected);
        elementNamesSelectedModified.add(columnName);

        const elementNamesSelectedModifiedSorted: Set<string> = props?.sortDirection
          ? new Set(sortArray(Array.from(elementNamesSelectedModified), props.sortDirection))
          : elementNamesSelectedModified;

        if (isUseLocaleStorage) {
          const elementNamesSelectedText: string = Array.from(elementNamesSelectedModifiedSorted).join(',');
          localStorage.setItem(props.name, elementNamesSelectedText);
          const elementNamesEditedNew: Set<string> = getElementsFromLocalStorage(props.name, ',');
          if (props?.onChange) {
            props.onChange(Array.from(elementNamesEditedNew));
          }
        } else {
          if (props?.onChange) {
            props.onChange(Array.from(elementNamesSelectedModifiedSorted));
          }
        }
        setSearchText('');
        return elementNamesSelectedModifiedSorted;
      });
    }
  };

  const onKeyUp = (evt: any) => {
    if (evt.keyCode === 27 || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
      onListItemsCloseByKey();
    }
  };

  useEffect(() => {
    const elementsFromLocaleStorage: Set<string> = isUseLocaleStorage
      ? getElementsFromLocalStorage(props.name, ',')
      : props?.elementNamesDefaultSelected?.length > 0
      ? new Set(props.elementNamesDefaultSelected)
      : new Set();
    if (elementsFromLocaleStorage.size > 0) {
      setElementNamesSelected(elementsFromLocaleStorage);
    } else {
      const elementNamesMapped: Array<{ label: string, value: string }> = elementNamesSorted?.map(
        (element: { label: string, value: number | string }) => ({
          label: element?.label,
          value: element?.value?.toString(),
        })
      );

      const columns: Array<string> =
        props?.elementNamesDefaultSelected?.length > 0
          ? props.elementNamesDefaultSelected
          : props?.isSelectAll
          ? getValuesFromElements(elementNamesMapped)
          : [];
      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = columns?.join(',');
        localStorage.setItem(props.name, elementNamesSelectedText);
      }
      setElementNamesSelected(new Set(columns));
    }
    document.addEventListener('mouseup', multiSelectVisibleChange);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', multiSelectVisibleChange);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    const elementNamesSorted: Array<string | { label: string, value: number | string }> = props?.sortDirection
      ? sortObjectData(props.elementNames, 'value', props.sortDirection)
      : props.elementNames;

    const elementNamesMapped: Array<{ label: string, value: string }> = elementNamesSorted?.map(
      (element: { label: string, value: number | string }) => ({
        label: element?.label,
        value: element?.value?.toString(),
      })
    );

    setElementNames(elementNamesMapped);
  }, [props.elementNames]);

  useEffect(() => {
    setElementNamesSelected(new Set(props.elementNamesDefaultSelected));
  }, [props.elementNamesDefaultSelected]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.disabled ? theme?.palette?.baseFontColorOpacity05 : theme?.palette?.baseFontColor;
    const outlinedColor: string = theme.mainOutlinedColor;

    const onListExpanded = () => {
      setExpanded((isExpanded: boolean) => !isExpanded);
    };

    const onColumnNameRemove = (evt: React.ChangeEvent<HTMLButtonElement>) => {
      const element = evt.currentTarget;
      const columnName: string = element?.dataset?.name;
      if (columnName) {
        const elementNamesEdited: Set<string> = isUseLocaleStorage
          ? getElementsFromLocalStorage(props.name, ',')
          : elementNamesSelected;
        elementNamesEdited.delete(columnName);
        if (isUseLocaleStorage) {
          const elementNamesSelectedText: string = Array.from(elementNamesEdited).join(',');
          localStorage.setItem(props.name, elementNamesSelectedText);
        }
        setElementNamesSelected(
          isUseLocaleStorage ? getElementsFromLocalStorage(props.name, ',') : new Set(elementNamesEdited)
        );
        if (props?.onChange) {
          props.onChange(Array.from(elementNamesEdited));
        }
      }
    };

    const onAllElementsSelected = () => {
      const elementsValuesSelected: Array<string> = getValuesFromElements(elementNames);
      const elementNamesSelectedParsed: Set<string> = new Set([
        ...elementsValuesSelected,
        ...Array.from(elementNamesSelected),
      ]);
      setElementNamesSelected(elementNamesSelectedParsed);

      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = Array.from(elementNamesSelectedParsed).join(',');
        localStorage.setItem(props.name, elementNamesSelectedText);
      }
      if (props?.onChange) {
        props.onChange(Array.from(elementNamesSelectedParsed));
      }
      setExpanded(false);
    };

    const onAllElementsUnselected = () => {
      const elementNamesSelectedParsed: Set<string> = new Set();
      setElementNamesSelected(elementNamesSelectedParsed);

      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = Array.from(elementNamesSelectedParsed).join(',');
        localStorage.setItem(props.name, elementNamesSelectedText);
      }
      if (props?.onChange) {
        props.onChange(Array.from(elementNamesSelectedParsed));
      }
      setExpanded(false);
    };

    const arrElementNames: Array<string> =
      elementNamesSelected && elementNamesSelected.size > 0 ? Array.from(elementNamesSelected) : [];

    const elementLabelsFiltered = elementNames?.filter((elementName: { label: string, value: string }) =>
      arrElementNames?.some((arrElement: string) => elementName?.value === arrElement)
    );
    const onSearchStringChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const element = evt.target;
      setSearchText(element.value);
    };

    const onSearchStringClean = () => {
      setSearchText(null);
    };

    const onBtnElementsClickExpand = (evt: React.ChangeEvent<HTMLButtonElement>) => {
      const rootElement = evt.currentTarget;
      const element = evt.target;
      const btnToggleContainerElement = btnToggleContainer?.current;
      // @ts-ignore-next-line
      if (element === rootElement || !btnToggleContainerElement?.contains(element)) {
        setExpanded(!isExpanded);
      }
    };

    const elementNamesFiltered: Array<{ label: string, value: string }> =
      elementNames?.filter(
        (columnName: { label: string, value: string }) =>
          !elementNamesSelected?.has(columnName.value) &&
          (searchText?.length > 2 ? columnName?.label?.toUpperCase()?.indexOf(searchText?.toUpperCase()) > -1 : true)
      ) ?? [];

    const fontSize: number | string = props.fontSize ?? theme.baseFontSize;

    return (
      <MultiSelectContainerStyled
        data-name="multi-select-container"
        width={props?.width}
        borderColor={outlinedColor}
        borderColorFocused={theme.palette.primary.main}
        borderColorHovered={theme.mainOutlinedHoverColor}
        onClick={onBtnElementsClickExpand}
        ref={btnMultiSelect}
      >
        {props?.label && (
          <LabelContainer backgroundColor={theme.mainBackgroundColor}>
            <Label
              fontSize={pixelsMeasureToNumber(fontSize) - 2}
              disabled={props.disabled}
              fontFamily={props?.fontFamily || theme?.fontFamily}
              backgroundColor={theme.mainBackgroundColor}
              data-label="multiselect-label"
            >
              {props?.label}
            </Label>
          </LabelContainer>
        )}
        <FormControl>
          <MultiSelectStyled
            data-id="multi-select-border-right"
            className={props?.className}
            height={props.height}
            isExistLabel={isNotEmptyString(props?.label)}
            borderColor={theme.palette.baseFontColorOpacity05}
          >
            {elementLabelsFiltered?.map((columnNameElement: { label: string, value: string }, index: number) => (
              <FormControl
                key={`${index}-button`}
                width="initial"
                outline={`1px solid ${theme?.palette?.baseFontColorOpacity05}`}
                borderRadius={5}
                padding="1px"
                margin="0 3px 0 0"
                backgroundColor={theme.palette.primary.light}
              >
                <Label
                  fontSize={pixelsMeasureToNumber(fontSize) - 2}
                  htmlFor={`${index}-button`}
                  whiteSpace="normal"
                  wordBreak="break-all"
                  lineHeight={1}
                  color={theme.palette.baseFontColor}
                  backgroundColor="transparent"
                >
                  {columnNameElement.label}
                </Label>{' '}
                <ButtonStyled id={`${index}-button`} onClick={onColumnNameRemove} data-name={columnNameElement.value}>
                  <CrossIcon color={theme.palette.baseFontColor} />
                </ButtonStyled>
              </FormControl>
            ))}
          </MultiSelectStyled>
          <ButtonExpandStyled
            data-name="button-toggle"
            onClick={onListExpanded}
            fontSize={pixelsMeasureToNumber(fontSize) - 2}
            borderColor={outlinedColor}
            borderColorFocused={theme.palette.primary.light}
          >
            {isExpanded ? <ChevronUpIcon color={color} /> : <ChevronDownIcon color={color} />}
          </ButtonExpandStyled>
        </FormControl>
        {isExpanded && (
          <ToggleContainer data-name="toggle-container" ref={btnToggleContainer}>
            <FormControl>
              <Button
                padding="2px"
                width="50%"
                onClick={onAllElementsSelected}
                fontSize={pixelsMeasureToNumber(fontSize) - 2}
                color={theme.palette.baseFontColor}
                backgroundColor={theme.palette.primary.light}
              >
                Select all <CirclePlusIcon color={theme.palette.baseFontColor} />
              </Button>
              <Button
                padding="2px"
                width="50%"
                onClick={onAllElementsUnselected}
                fontSize={pixelsMeasureToNumber(fontSize) - 2}
                color={theme.palette.baseFontColor}
                backgroundColor={theme.palette.primary.light}
              >
                Unselect all <CircleCrossIcon color={theme.palette.baseFontColor} />
              </Button>
            </FormControl>
            <Input
              name="search-values"
              value={searchText}
              onChange={onSearchStringChange}
              onRemove={onSearchStringClean}
              placeholder="Search elements"
              variant="outlined"
            />
            <ListContainerStyled>
              <List
                type="list-buttons"
                onKeyUp={onKeyUp}
                backgroundColor={theme.mainBackgroundColor}
                color={theme.palette.baseFontColor}
              >
                {elementNamesFiltered?.map((columnElement: { label: string, value: string }, index: number) => (
                  <ListItem
                    type="button"
                    key={`${index}-list-item`}
                    padding="5px 0"
                    justifyContent="space-between"
                    color={theme.palette.baseFontColor}
                    data-value={columnElement.value}
                    onClick={onElementNameSelect}
                  >
                    <Label backgroundColor="transparent" data-value={columnElement.value}>
                      {columnElement.label}
                      <FormControl position="absolute" right={5} width="initial" data-value={columnElement.value}>
                        <CirclePlusIcon color={theme.palette.baseFontColor} />
                      </FormControl>
                    </Label>
                  </ListItem>
                ))}
              </List>
            </ListContainerStyled>
          </ToggleContainer>
        )}
      </MultiSelectContainerStyled>
    );
  };

  if (!Consumer) {
    console.error('MultiSelect. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(MultiSelectObjects);
