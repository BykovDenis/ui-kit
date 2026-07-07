import React, { PropsWithChildren, useEffect, useState } from 'react';
import TTableColumnsVisible from '../types/ttable-columns-visible';
import ITheme from '../../styles/types/itheme';
import TableColumnsVisibleStyled from './table-columns-visible-styled';
import Label from '@dbykov-ui-kit/label';
import FormControl from '@dbykov-ui-kit/form-control';
import IconButton from '@dbykov-ui-kit/icon-button';
import CrossIcon from '../../icons-components/24x24/circle-cross-icon';
import Button from '@dbykov-ui-kit/button';
import ChevronUpIcon from '../../icons-components/24x24/chevron-up-icon';
import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import List from '@dbykov-ui-kit/list';
import ListItem from '@dbykov-ui-kit/list-item';
import AddIcon from '../../icons-components/36x36/add-icon';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import getElementsFromLocalStorage from '../../helpers/get-elements-from-localstorage';
import { useTheme } from '@dbykov-ui-kit/styles';

const TableColumnsVisible: React.FunctionComponent<PropsWithChildren<TTableColumnsVisible>> = (
  props: TTableColumnsVisible
) => {
  const theme = useTheme();
  const [isExpanded, setExpanded] = useState<boolean>(false);
  // plain derived value: the useState copy froze the initial prop and
  // needed a sync effect to stay current
  const columnNames: Array<string> = props.columnNames;
  const [columnNamesSelected, setColumnNamesSelected] = useState<Set<string>>(null);

  useEffect(() => {
    const elementsFromLocaleStorage: Set<string> = getElementsFromLocalStorage(props.name, ',');
    if (elementsFromLocaleStorage.size > 0) {
      setColumnNamesSelected(elementsFromLocaleStorage);
    } else {
      const columns: Array<string> =
        props?.columnNamesDefaultSelected?.length > 0 ? props.columnNamesDefaultSelected : props.columnNames;
      const columnNamesSelectedText: string = columns?.join(',');
      localStorage.setItem(props.name, columnNamesSelectedText);
      setColumnNamesSelected(new Set(columns));
    }
  }, []);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.disabled ? theme?.palette?.baseFontColorOpacity05 : theme?.palette?.baseFontColor;

    const onListExpanded = () => {
      setExpanded((isExpanded: boolean) => !isExpanded);
    };

    const onColumnNameSelect = (evt: React.MouseEvent<HTMLButtonElement>) => {
      const element = evt.currentTarget;
      const columnName: string = element?.dataset?.name;
      if (isNotEmptyString(columnName)) {
        const columnNamesEdited: Set<string> = columnNamesSelected.add(columnName);
        const columnNamesSelectedText: string = Array.from(columnNamesEdited).join(',');
        localStorage.setItem(props.name, columnNamesSelectedText);
        const columnNamesEditedNew: Set<string> = getElementsFromLocalStorage(props.name, ',');
        setColumnNamesSelected(columnNamesEditedNew);
        if (props?.onChange) {
          props.onChange(Array.from(columnNamesEditedNew));
        }
      }
    };

    const onColumnNameRemove = (evt: React.MouseEvent<HTMLButtonElement>) => {
      const element = evt.currentTarget;
      const columnName: string = element?.dataset?.name;
      if (columnName) {
        const columnNamesEdited: Set<string> = getElementsFromLocalStorage(props.name, ',');
        columnNamesEdited.delete(columnName);
        const columnNamesSelectedText: string = Array.from(columnNamesEdited).join(',');
        localStorage.setItem(props.name, columnNamesSelectedText);
        const columnNamesEditedNew: Set<string> = getElementsFromLocalStorage(props.name, ',');
        setColumnNamesSelected(columnNamesEditedNew);
        if (props?.onChange) {
          props.onChange(Array.from(columnNamesEditedNew));
        }
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


  return componentThemed(theme);
};

TableColumnsVisible.defaultProps = {
  name: new Date()?.valueOf()?.toString(),
};

export default TableColumnsVisible;
