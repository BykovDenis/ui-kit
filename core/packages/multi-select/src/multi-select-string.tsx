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
import {
  KEY_ESCAPE,
  TAG_NAME_BUTTON,
  TAG_NAME_DIV,
  TAG_NAME_INPUT,
  TAG_NAME_LABEL,
  TAG_NAME_PATH,
  TAG_NAME_SVG,
} from '../../constants';
import MultiSelectVariant from '../enums/multi-select-variant';

const BUTTON_TOGGLE_NAME = 'button-toggle';
const BUTTON_MULTI_SELECT_CONTAINER = 'multi-select-container';

type TMultiSelectString = TMultiSelect & {
  elementNames: Array<string>;
};

const MultiSelectString: React.FunctionComponent<PropsWithChildren<TMultiSelect>> = (props: TMultiSelectString) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [elementNames, setElementNames] = useState<Array<string>>(
    props?.sortDirection ? sortArray(props.elementNames, props.sortDirection) : props.elementNames
  );
  const [elementNamesSelected, setElementNamesSelected] = useState<Set<string>>(null);
  const [searchText, setSearchText] = useState<string>(null);
  const [isUseLocaleStorage] = useState<boolean>(
    props?.isUseLocaleStorage !== undefined ? props.isUseLocaleStorage : false
  );
  const [variant] = useState<string | null>(props.variant || MultiSelectVariant.Normal);

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
    const id: string = element?.dataset?.id;
    if (isNotEmptyString(columnName) && props.id === id) {
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
      const columns: Array<string> =
        props?.elementNamesDefaultSelected?.length > 0
          ? props.elementNamesDefaultSelected
          : props?.isSelectAll
          ? props.elementNames
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
    setElementNames(props?.sortDirection ? sortArray(props.elementNames, props.sortDirection) : props.elementNames);
  }, [props.elementNames]);

  useEffect(() => {
    if (props.elementNamesDefaultSelected?.length === 0) {
      setElementNamesSelected(new Set());
    }
  }, [props.elementNamesDefaultSelected]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.disabled ? theme?.palette?.baseFontColorOpacity05 : theme?.palette?.baseFontColor;
    const outlinedColor: string = theme.mainOutlinedColor;

    const onListExpanded = () => {
      setExpanded((isExpanded: boolean) => !isExpanded);
    };

    const onColumnNameRemove = (evt: React.ChangeEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
      evt.stopPropagation();
      const element = evt.currentTarget;
      const id: string = element?.dataset?.id;
      if (id === props.id) {
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
      }
    };

    const onAllElementsSelected = () => {
      const elementNamesSelectedParsed: Set<string> = new Set([...elementNames, ...Array.from(elementNamesSelected)]);
      setElementNamesSelected(elementNamesSelectedParsed);

      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = Array.from(elementNamesSelectedParsed).join(',');
        localStorage.setItem(props.name, elementNamesSelectedText);
      }
      if (props?.onChange) {
        props.onChange(Array.from(elementNamesSelectedParsed));
      }
      setExpanded(false);
      setSearchText('');
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
      const buttonToggle = rootElement?.dataset?.name;
      const id = rootElement.dataset.id;
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

    const onKeyUp = (evt: any) => {
      if (evt.keyCode === 27 || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
        onListItemsCloseByKey();
      }
    };

    const elementNamesFiltered: Array<string> =
      elementNames?.filter(
        (columnName: string) =>
          !elementNamesSelected?.has(columnName) &&
          (searchText?.length >= 1 ? columnName?.toUpperCase()?.indexOf(searchText?.toUpperCase()) > -1 : true)
      ) ?? [];

    const fontSize: number | string = props.fontSize ?? theme.baseFontSize;

    return (
      <MultiSelectContainerStyled
        data-name={BUTTON_MULTI_SELECT_CONTAINER}
        data-id={props.id}
        width={props?.width}
        borderColor={outlinedColor}
        borderColorFocused={theme.palette.primary.main}
        borderColorHovered={theme.mainOutlinedHoverColor}
        onClick={onBtnElementsClickExpand}
        ref={btnMultiSelect}
        backgroundColor={props.disabled ? theme.inactiveBackgroundColor : 'transparent'}
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
            {variant === MultiSelectVariant.Normal ? (
              arrElementNames?.map((columnNameElement: string, index: number) => (
                <FormControl
                  key={`${index}-button`}
                  width="initial"
                  outline={`1px solid ${theme?.palette?.baseFontColorOpacity05}`}
                  borderRadius={5}
                  padding="1px"
                  margin="0 3px 0 0"
                  backgroundColor={theme.palette.primary.main}
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
                    {columnNameElement}
                  </Label>{' '}
                  <ButtonStyled
                    id={`${props.id}-${index}-button`}
                    onClick={onColumnNameRemove}
                    data-name={columnNameElement}
                    data-id={props.id}
                    disabled={props.disabled}
                  >
                    <CrossIcon color={theme.palette.baseFontColor} />
                  </ButtonStyled>
                </FormControl>
              ))
            ) : (
              <Label>
                {arrElementNames?.length ?? 0} of {elementNames?.length ?? 0} elements selected
              </Label>
            )}
          </MultiSelectStyled>
          <ButtonExpandStyled
            data-name="button-toggle"
            data-id={props.id}
            onClick={onListExpanded}
            fontSize={pixelsMeasureToNumber(fontSize)}
            borderColor={outlinedColor}
            borderColorFocused={theme.palette.primary.light}
          >
            {isExpanded ? <ChevronUpIcon color={color} /> : <ChevronDownIcon color={color} />}
          </ButtonExpandStyled>
        </FormControl>
        {isExpanded && (
          <ToggleContainer
            data-name="toggle-container"
            ref={btnToggleContainer}
            backgroundColor={theme.mainBackgroundColor}
          >
            <FormControl>
              <Button
                padding="2px"
                width="50%"
                onClick={onAllElementsSelected}
                fontSize={pixelsMeasureToNumber(fontSize)}
                color={theme.palette.baseFontColor}
                backgroundColor={theme.palette.primary.light}
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
            <ListContainerStyled
              backgroundColor={theme.mainBackgroundColor}
              outlinedColor={theme.palette.primary.lighter}
            >
              <List
                type="list-buttons"
                onKeyUp={onKeyUp}
                backgroundColor={theme.mainBackgroundColor}
                color={theme.palette.baseFontColor}
              >
                {variant === MultiSelectVariant.Atlas &&
                  arrElementNames?.map((columnNameElement: string, index: number) => (
                    <ListItem
                      type="button"
                      key={`${index}-list-item`}
                      padding="5px 0"
                      justifyContent="space-between"
                      color={theme.palette.baseFontColor}
                      data-value={columnNameElement}
                      data-name={columnNameElement}
                      data-id={props.id}
                      onClick={onColumnNameRemove}
                      backgroundColor={theme.palette.primary.moreLighter}
                    >
                      <Label backgroundColor="transparent" data-value={columnNameElement}>
                        {columnNameElement}
                        <FormControl position="absolute" right={5} width="initial" data-value={columnNameElement}>
                          <CircleCrossIcon color={theme.palette.baseFontColor} />
                        </FormControl>
                      </Label>
                    </ListItem>
                  ))}
                {elementNamesFiltered?.map((columnNameElement: string, index: number) => (
                  <ListItem
                    type="button"
                    key={`${index}-list-item`}
                    padding="5px 0"
                    justifyContent="space-between"
                    color={theme.palette.baseFontColor}
                    data-value={columnNameElement}
                    data-id={props.id}
                    onClick={onElementNameSelect}
                  >
                    <Label backgroundColor="transparent" data-value={columnNameElement}>
                      {columnNameElement}
                      <FormControl position="absolute" right={5} width="initial" data-value={columnNameElement}>
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

export default MultiSelectString;
