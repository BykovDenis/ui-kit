import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import TMultiSelect from '../types/tmulti-select';
import ITheme from '../../styles/types/itheme';
import MultiSelectStyled from './multi-select-styled';
import Label from '@dbykov-ui-kit/label';
import FormControl from '@dbykov-ui-kit/form-control';
import CrossIcon from '../../icons-components/24x24/circle-cross-icon';
import CircleCrossIcon from '../../icons-components/24x24/circle-cross-icon';
import Button from '@dbykov-ui-kit/button';
import ChevronUpIcon from '../../icons-components/24x24/chevron-up-icon';
import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import List from '@dbykov-ui-kit/list';
import ListItem from '@dbykov-ui-kit/list-item';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import getElementsFromLocalStorage from '../../helpers/get-elements-from-localstorage';
import ListContainerStyled from './list-container.styled';
import CirclePlusIcon from '../../icons-components/24x24/circle-plus-icon';
import ButtonStyled from './button.styled';
import pixelsMeasureToNumber from '../../helpers/pixels-measure-to-number';
import Input from '@dbykov-ui-kit/input';
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
import KeyCode from '../../enums/key-code';
import { BUTTON_MULTI_SELECT_CONTAINER, BUTTON_TOGGLE_NAME } from './constants';
import { getIsClient } from '../../utilities/ssr/get-is-client';
import { Portal } from '../../portal';
import { useTheme } from '@dbykov-ui-kit/styles';

type TMultiSelectString = Omit<TMultiSelect, 'elementNames'> & {
  elementNames: Array<string>;
};

const MultiSelectString: React.FunctionComponent<PropsWithChildren<TMultiSelect>> = (rawProps: TMultiSelect) => {
  // index.tsx only renders this component when elementNames[0] is a string —
  // an invariant the type system can't see through that runtime typeof check
  const props = rawProps as TMultiSelectString;
  const theme = useTheme();
  const [isExpanded, setExpanded] = useState<boolean>(false);
  // derived like in multi-select-objects: the useState copy needed a sync
  // effect to follow props.elementNames
  const elementNames: Array<string> = React.useMemo(
    () => (props?.sortDirection ? sortArray(props.elementNames, props.sortDirection) : props.elementNames),
    [props.elementNames, props.sortDirection]
  );
  const [elementNamesSelected, setElementNamesSelected] = useState<Set<string>>(new Set());
  // null (not '') on clear: Input treats null/undefined as uncontrolled,
  // '' as an active clear — same distinction that broke datepicker typing
  const [searchText, setSearchText] = useState<string | null>(null);
  // plain derived values: the useState copies silently ignored prop updates
  const isUseLocaleStorage: boolean = props?.isUseLocaleStorage !== undefined ? props.isUseLocaleStorage : false;
  const variant: string | null = props.variant || MultiSelectVariant.Normal;

  const btnMultiSelect: any = useRef();
  const btnToggleContainer: any = useRef();

  const multiSelectVisibleChange = (evt: any) => {
    const element = evt.target;
    const id: string = element.dataset?.id;
    const value: string = element.dataset?.value;
    const btnMultiSelectElement = btnMultiSelect?.current;
    const btnToggleContainerElement = btnToggleContainer?.current;
    // @ts-ignore-next-line
    if (
      btnMultiSelectElement &&
      !btnMultiSelectElement?.contains(element) &&
      !btnToggleContainerElement?.contains(element) &&
      !value &&
      (!id || id !== props.id)
    ) {
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
    if (evt.keyCode === KeyCode.Escape || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
      onListItemsCloseByKey();
    }
  };
  useEffect(() => {
    const elementsFromLocaleStorage: Set<string> = isUseLocaleStorage
      ? getElementsFromLocalStorage(props.name, ',')
      : (props?.elementNamesDefaultSelected?.length ?? 0) > 0
      ? new Set(props.elementNamesDefaultSelected)
      : new Set();
    if (elementsFromLocaleStorage.size > 0) {
      setElementNamesSelected(elementsFromLocaleStorage);
    } else {
      const columns: Array<string> =
        (props?.elementNamesDefaultSelected?.length ?? 0) > 0
          ? (props.elementNamesDefaultSelected as Array<string>)
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
    if (props.elementNamesDefaultSelected?.length === 0) {
      setElementNamesSelected(new Set());
    }
  }, [props.elementNamesDefaultSelected]);

  const componentThemed: any = (theme: ITheme) => {
    const onListExpanded = () => {
      setExpanded((isExpanded: boolean) => !isExpanded);
    };

    const onColumnNameRemove = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
      evt.stopPropagation();
      const element = evt.currentTarget;
      const id: string | undefined = element?.dataset?.id;
      if (id === props.id) {
        const columnName: string | undefined = element?.dataset?.name;
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

    const onSearchStringChange = (evt: React.ChangeEvent<HTMLInputElement>, name?: string, value?: string | number | null) => {
      if (value !== undefined && value !== null) {
        setSearchText(value.toString());
      }
    };

    const onSearchStringClean = () => {
      setSearchText(null);
    };

    const onBtnElementsClickExpand = (evt: React.MouseEvent<HTMLButtonElement>) => {
      const rootElement = evt.currentTarget;
      const element = evt.target as HTMLElement;
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
      if (evt.keyCode === KeyCode.Escape || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
        onListItemsCloseByKey();
      }
    };

    const elementNamesFiltered: Array<string> =
      elementNames?.filter(
        (columnName: string) =>
          !elementNamesSelected?.has(columnName) &&
          ((searchText?.length ?? 0) >= 1 ? columnName?.toUpperCase()?.indexOf(searchText!.toUpperCase()) > -1 : true)
      ) ?? [];

    const fontSize: number | string = props.fontSize ?? theme.baseFontSize;

    const color: string = props.disabled ? theme?.palette?.baseFontColorOpacity05 : theme?.palette?.baseFontColor;
    const outlinedColor: string = props.disabled ? 'transparent' : theme.mainOutlinedColor;
    const borderColorFocused: string = props.disabled ? 'transparent' : theme.palette.primary.main;
    const borderColorHovered: string = props.disabled ? outlinedColor : theme.mainOutlinedHoverColor;

    let top: number = 0;
    let left: number = 0;
    let width: number = 0;

    if (getIsClient() && btnMultiSelect?.current?.getBoundingClientRect) {
      const clientRectPosition: any = btnMultiSelect.current.getBoundingClientRect();
      top = clientRectPosition.bottom + window.scrollY;
      left = clientRectPosition.left;
      width = clientRectPosition.width;
    }

    // plain JSX value, not a nested component: a component type created
    // inside render is new on every pass, so React unmounted and remounted
    // the whole list on each parent state update (unstable DOM under cursor)
    const selectListContainerPortal = (
      <Portal>
        <ToggleContainer
          data-name="toggle-container"
          data-cy={`${props.id}-toggle-container`}
          id={`${props.id}-panel`}
          role="dialog"
          aria-label={typeof props?.label === 'string' ? props.label : 'Options'}
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
            value={searchText}
            onChange={onSearchStringChange}
            onRemove={onSearchStringClean}
            placeholder="Search elements"
            aria-label="Search elements"
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
              // onMouseDown={onMouseDown}
              backgroundColor={theme.mainBackgroundColor}
              color={theme.palette.baseFontColor}
            >
              {!props.disabled &&
                variant === MultiSelectVariant.Atlas &&
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
                    <Label
                      backgroundColor="transparent"
                      data-value={columnNameElement}
                      fontSize={pixelsMeasureToNumber(fontSize)}
                    >
                      {columnNameElement}
                      <FormControl position="absolute" right={5} width="initial" data-value={columnNameElement}>
                        <CircleCrossIcon color={theme.palette.baseFontColor} />
                      </FormControl>
                    </Label>
                  </ListItem>
                ))}
              {!props.disabled &&
                elementNamesFiltered?.map((columnNameElement: string, index: number) => (
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
                    <Label
                      backgroundColor="transparent"
                      data-value={columnNameElement}
                      fontSize={pixelsMeasureToNumber(fontSize)}
                    >
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
      </Portal>
    );

    return (
      <MultiSelectContainerStyled
        data-name={BUTTON_MULTI_SELECT_CONTAINER}
        data-id={props.id}
        id={props.id}
        width={props?.width}
        borderColor={outlinedColor}
        borderColorFocused={borderColorFocused}
        borderColorHovered={borderColorHovered}
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
                    {columnNameElement}
                  </Label>{' '}
                  <ButtonStyled
                    id={`${props.id}-${index}-button`}
                    onClick={onColumnNameRemove}
                    data-name={columnNameElement}
                    data-id={props.id}
                    aria-label={`Remove ${columnNameElement}`}
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
            data-cy={`${props.id}-btn-expand`}
            aria-expanded={isExpanded}
            aria-haspopup="dialog"
            aria-controls={`${props.id}-panel`}
            aria-label={typeof props?.label === 'string' ? `${props.label}: toggle options` : 'Toggle options'}
            onClick={onListExpanded}
            fontSize={pixelsMeasureToNumber(fontSize)}
            borderColor={outlinedColor}
            borderColorFocused={theme.palette.primary.light}
            disabled={props.disabled}
          >
            {isExpanded ? <ChevronUpIcon color={color} /> : <ChevronDownIcon color={color} />}
          </ButtonExpandStyled>
        </FormControl>
        {isExpanded && selectListContainerPortal}
      </MultiSelectContainerStyled>
    );
  };


  return componentThemed(theme);
};

export default MultiSelectString;
