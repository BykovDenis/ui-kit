import React, { PropsWithChildren, useEffect, useState } from 'react';
import TTableColumnsVisible from '../types/ttable-columns-visible';
import { ITheme } from '../../package/styles/dist';
import TableColumnsVisibleStyled from './table-columns-visible-styled';
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

const TableColumnsVisible: React.FunctionComponent<PropsWithChildren<TTableColumnsVisible>> = (
  props: TTableColumnsVisible
) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [columnNames, setColumnNames] = useState<Array<string>>(props.columnNames);
  const [columnNamesSelected, setColumnNamesSelected] = useState<Set<string>>(null);

  useEffect(() => {
    setColumnNamesSelected(getElementsFromLocalStorage(props.name, ','));
  }, []);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    setColumnNames(props.columnNames);
  }, [props.columnNames]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.disabled ? theme?.palette?.baseFontColorOpacity05 : theme?.palette?.baseFontColor;

    const onListExpanded = () => {
      setExpanded((isExpanded: boolean) => !isExpanded);
    };

    const onColumnNameSelect = (evt: React.ChangeEvent<HTMLButtonElement>) => {
      const element = evt.currentTarget;
      const columnName: string = element?.dataset?.name;
      if (isNotEmptyString(columnName)) {
        const columnNamesEdited: Set<string> = columnNamesSelected.add(columnName);
        const columnNamesSelectedText: string = Array.from(columnNamesEdited).join(',');
        localStorage.setItem(props.name, columnNamesSelectedText);
        setColumnNamesSelected(getElementsFromLocalStorage(props.name, ','));
      }
    };

    const onColumnNameRemove = (evt: React.ChangeEvent<HTMLButtonElement>) => {
      const element = evt.currentTarget;
      const columnName: string = element?.dataset?.name;
      if (columnName) {
        const columnNamesEdited: Set<string> = getElementsFromLocalStorage(props.name, ',');
        columnNamesEdited.delete(columnName);
        const columnNamesSelectedText: string = Array.from(columnNamesEdited).join(',');
        localStorage.setItem(props.name, columnNamesSelectedText);
        setColumnNamesSelected(getElementsFromLocalStorage(props.name, ','));
      }
    };

    const arrColumnNames: Array<string> =
      columnNamesSelected && columnNamesSelected.size > 0 ? Array.from(columnNamesSelected) : [];

    const columnNamesFiltered: Array<string> =
      columnNames?.filter((columnName: string) => !columnNamesSelected?.has(columnName)) ?? [];

    // @ts-ignore
    return (
      <FormControl flexDirection="column" width={props?.width}>
        <TableColumnsVisibleStyled className={props?.className} color={color} minHeight={props.minHeight}>
          {arrColumnNames?.map((columnNameElement: string, index: number) => (
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
        </TableColumnsVisibleStyled>
        <Button onClick={onListExpanded}>
          Add items {isExpanded ? <ChevronUpIcon color={color} /> : <ChevronDownIcon color={color} />}
        </Button>
        {isExpanded && (
          <List>
            {columnNamesFiltered?.map((columnNameElement: string, index: number) => (
              <ListItem key={`${index}-list-item`} padding="5px 0">
                <Label htmlFor={`${index}-list-item`} padding="0 5px 0 0">
                  {columnNameElement}
                </Label>
                <IconButton
                  id={`${index}-list-item`}
                  data-name={columnNameElement}
                  onClick={onColumnNameSelect}
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

TableColumnsVisible.defaultProps = {
  name: new Date()?.valueOf()?.toString(),
};

export default React.memo(TableColumnsVisible);
