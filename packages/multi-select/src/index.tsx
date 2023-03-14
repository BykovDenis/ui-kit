import React, { PropsWithChildren, useEffect, useState, Fragment, useMemo } from 'react';
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

const MultiSelect: React.FunctionComponent<PropsWithChildren<TMultiSelect>> = (props: TMultiSelect) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [elementNames, setelementNames] = useState<Array<string>>(props.elementNames);
  const [elementNamesSelected, setElementNamesSelected] = useState<Set<string>>(null);
  const [searchText, setSearchText] = useState<string>(null);
  const [isUseLocaleStorage] = useState<boolean>(
    props?.isUseLocaleStorage !== undefined ? props.isUseLocaleStorage : false
  );

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
        props?.elementNamesDefaultSelected?.length > 0 ? props.elementNamesDefaultSelected : props.elementNames;
      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = columns?.join(',');
        localStorage.setItem(props.name, elementNamesSelectedText);
      } else setElementNamesSelected(new Set(columns));
    }
  }, []);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    setelementNames(props.elementNames);
  }, [props.elementNames]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.disabled ? theme?.palette?.baseFontColorOpacity05 : theme?.palette?.baseFontColor;

    const onListExpanded = () => {
      setExpanded((isExpanded: boolean) => !isExpanded);
    };

    const onElementNameSelect = (evt: React.ChangeEvent<HTMLButtonElement>) => {
      const element = evt.currentTarget;
      const columnName: string = element?.dataset?.name;
      if (isNotEmptyString(columnName)) {
        setElementNamesSelected((elementNamesSelected: Set<string>) => new Set(elementNamesSelected.add(columnName)));
        if (isUseLocaleStorage) {
          const elementNamesSelectedText: string = Array.from(elementNamesSelected).join(',');
          localStorage.setItem(props.name, elementNamesSelectedText);
          const elementNamesEditedNew: Set<string> = getElementsFromLocalStorage(props.name, ',');
          if (props?.onChange) {
            props.onChange(Array.from(elementNamesEditedNew));
          }
        } else {
          if (props?.onChange) {
            props.onChange(Array.from(elementNamesSelected));
          }
        }
      }
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
          props.onChange(Array.from(elementNamesSelected));
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
    };

    const onAllElementsUnseleted = () => {
      const elementNamesSelectedParsed: Set<string> = new Set();
      setElementNamesSelected(elementNamesSelectedParsed);

      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = Array.from(elementNamesSelectedParsed).join(',');
        localStorage.setItem(props.name, elementNamesSelectedText);
      }
    };

    const arrElementNames: Array<string> =
      elementNamesSelected && elementNamesSelected.size > 0 ? Array.from(elementNamesSelected) : [];

    const onSearchStringChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const element = evt.target;
      setSearchText(element.value);
    };

    const onSearchStringClean = () => {
      setSearchText(null);
    };

    const elementNamesFiltered: Array<string> =
      elementNames?.filter(
        (columnName: string) =>
          !elementNamesSelected?.has(columnName) &&
          (searchText?.length > 2 ? columnName?.toUpperCase()?.indexOf(searchText?.toUpperCase()) > -1 : true)
      ) ?? [];

    const fontSize: number | string = props.fontSize ?? theme.baseFontSize;

    return (
      <FormControl flexDirection="column" width={props?.width}>
        <FormControl>
          <MultiSelectStyled className={props?.className} color={color} height={props.height}>
            {arrElementNames?.map((columnNameElement: string, index: number) => (
              <FormControl
                key={`${index}-button`}
                width="initial"
                outline={`1px solid ${theme?.palette?.baseFontColorOpacity05}`}
                borderRadius={5}
                padding="1px"
                margin="0 3px 0 0"
                backgroundColor={theme.palette.primary.main}
              >
                <Label
                  fontSize={pixelsMeasureToNumber(fontSize) - 2}
                  htmlFor={`${index}-button`}
                  whiteSpace="normal"
                  wordBreak="break-all"
                  lineHeight={1}
                >
                  {columnNameElement}
                </Label>{' '}
                <ButtonStyled id={`${index}-button`} onClick={onColumnNameRemove} data-name={columnNameElement}>
                  <CrossIcon color={color} />
                </ButtonStyled>
              </FormControl>
            ))}
          </MultiSelectStyled>
          <ButtonExpandStyled onClick={onListExpanded} fontSize={pixelsMeasureToNumber(fontSize) - 2} color={color}>
            {isExpanded ? <ChevronUpIcon color={color} /> : <ChevronDownIcon color={color} />}
          </ButtonExpandStyled>
        </FormControl>
        {isExpanded && (
          <Fragment>
            <FormControl>
              <Button
                padding="2px"
                width="50%"
                onClick={onAllElementsSelected}
                fontSize={pixelsMeasureToNumber(fontSize) - 2}
              >
                Select all <CirclePlusIcon color={color} />
              </Button>
              <Button
                padding="2px"
                width="50%"
                onClick={onAllElementsUnseleted}
                fontSize={pixelsMeasureToNumber(fontSize) - 2}
              >
                Unselect all <CircleCrossIcon color={color} />
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
              <List>
                {elementNamesFiltered?.map((columnNameElement: string, index: number) => (
                  <ListItem key={`${index}-list-item`} padding="5px 0">
                    <Label
                      htmlFor={`${index}-list-item`}
                      padding="0 5px 0 0"
                      height="100%"
                      whiteSpace="normal"
                      wordBreak="break-all"
                      lineHeight={1}
                    >
                      {columnNameElement}
                    </Label>
                    <ButtonStyled id={`${index}-list-item`} data-name={columnNameElement} onClick={onElementNameSelect}>
                      <CirclePlusIcon color={color} />
                    </ButtonStyled>
                  </ListItem>
                ))}
              </List>
            </ListContainerStyled>
          </Fragment>
        )}
      </FormControl>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(MultiSelect);
