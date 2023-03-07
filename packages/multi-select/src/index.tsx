import React, { PropsWithChildren, useEffect, useState } from 'react';
import TMultiSelect from '../types/tmulti-select';
import ITheme from '../../styles/types/itheme';
import MultiSelectStyled from './multi-select-styled';
import Label from '../../label/src';
import FormControl from '../../form-control/src';
import IconButton from '../../icon-button/src';
import CrossIcon from '../../icons-components/24x24/cross-icon';
import Button from '../../button/src';
import ChevronUpIcon from '../../icons-components/24x24/chevron-up-icon';
import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import List from '../../list/src';
import ListItem from '../../list-item/src';
import AddIcon from '../../icons-components/36x36/add-icon';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import getElementsFromLocalStorage from '../../helpers/get-elements-from-localstorage';

const MultiSelect: React.FunctionComponent<PropsWithChildren<TMultiSelect>> = (
  props: TMultiSelect
) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [elementNames, setelementNames] = useState<Array<string>>(props.elementNames);
  const [elementNamesSelected, setElementNamesSelected] = useState<Set<string>>(null);
  const [isUseLocaleStorage ] =  useState<boolean>(props?.isUseLocaleStorage !== undefined ? props.isUseLocaleStorage : false);

  useEffect(() => {
    const elementsFromLocaleStorage: Set<string> = isUseLocaleStorage ? getElementsFromLocalStorage(props.name, ',') : props?.elementNamesDefaultSelected?.length > 0 ? new Set(props.elementNamesDefaultSelected) : new Set();
    if (elementsFromLocaleStorage.size > 0) {
      setElementNamesSelected(elementsFromLocaleStorage);
    } else {
      const columns: Array<string> = props?.elementNamesDefaultSelected?.length > 0 ? props.elementNamesDefaultSelected : props.elementNames;
      if (isUseLocaleStorage) {
        const elementNamesSelectedText: string = columns?.join(',');
        localStorage.setItem(props.name, elementNamesSelectedText);
      } else
      setElementNamesSelected(new Set(columns));
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
        const elementNamesEdited: Set<string> = isUseLocaleStorage ? getElementsFromLocalStorage(props.name, ',') : elementNamesSelected;
        elementNamesEdited.delete(columnName);
        if (isUseLocaleStorage) {
          const elementNamesSelectedText: string = Array.from(elementNamesEdited).join(',');
          localStorage.setItem(props.name, elementNamesSelectedText);
        }
        setElementNamesSelected(isUseLocaleStorage ? getElementsFromLocalStorage(props.name, ',') : new Set(elementNamesEdited));
        if (props?.onChange) {
          props.onChange(Array.from(elementNamesSelected));
        }
      }
    };

    const arrElementNames: Array<string> =
      elementNamesSelected && elementNamesSelected.size > 0 ? Array.from(elementNamesSelected) : [];

    const elementNamesFiltered: Array<string> =
      elementNames?.filter((columnName: string) => !elementNamesSelected?.has(columnName)) ?? [];

    // @ts-ignore
    return (
      <FormControl flexDirection="column" width={props?.width}>
        <MultiSelectStyled className={props?.className} color={color} minHeight={props.minHeight}>
          {arrElementNames?.map((columnNameElement: string, index: number) => (
            <FormControl
              key={`${index}-button`}
              width="initial"
              outline={`1px solid ${theme?.palette?.baseFontColorOpacity05}`}
              borderRadius={5}
              padding="3px 5px"
              margin="0 3px 0 0"
            >
              <Label htmlFor={`${index}-button`}>{columnNameElement}</Label>{' '}
              <IconButton id={`${index}-button`} onClick={onColumnNameRemove} data-name={columnNameElement}>
                <CrossIcon color={color} />
              </IconButton>
            </FormControl>
          ))}
        </MultiSelectStyled>
        <Button onClick={onListExpanded}>
          Add items {isExpanded ? <ChevronUpIcon color={color} /> : <ChevronDownIcon color={color} />}
        </Button>
        {isExpanded && (
          <List>
            {elementNamesFiltered?.map((columnNameElement: string, index: number) => (
              <ListItem key={`${index}-list-item`} padding="5px 0">
                <Label htmlFor={`${index}-list-item`} padding="0 5px 0 0" height="100%">
                  {columnNameElement}
                </Label>
                <IconButton
                  id={`${index}-list-item`}
                  data-name={columnNameElement}
                  onClick={onElementNameSelect}
                  variant="text"
                >
                  <AddIcon color={color} />
                </IconButton>
              </ListItem>
            ))}
          </List>
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
