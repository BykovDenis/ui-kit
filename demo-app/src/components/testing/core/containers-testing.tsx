import React, { useContext } from "react";
import { ReactThemeContext } from "../../app";
import styled from "styled-components";

// local components
// import FlexContainer from '../../../packages/flex-container/src';
// import FormControl from '../../../packages/form-control/src';
// import Typography from '../../../packages/typography/src';

// components from package library
import FlexContainer from "@sber-risks-ui/core/flex-container";
import Typography from "@sber-risks-ui/core/typography";
import FormControl from "@sber-risks-ui/core/form-control";

type TableProps = {
  color: string;
  width?: number;
};

const Table = styled.table<TableProps>`
  ${(props: TableProps) => `
      border: 1px solid ${props.color};
      border-collapse: collapse;
      width: 1200px;
      `}
`;

const TableRow = styled.tr<TableProps>`
  ${(props: TableProps) => `
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0;
    `}
`;

const TableCell = styled.td<TableProps>`
  ${(props: TableProps) => `
        padding: 10px;
        border: 1px solid ${props.color};
        position: relative;
        text-align: center !important;
        white-space: normal !important;
        font-size: var(--base-table-font-size) !important;
        height: 35px !important;
        padding: 2px 4px !important;
        line-height: 1.1;
        word-break: break-all !important;
        color: var(--main-font-color) !important;
        background-color: var(--main-background-color) !important;
        border-bottom-color: var(--main-outlined-color) !important;
        ${props?.width ? `width: ${props.width}px;` : ""}`}
`;

const TableCellHeader = styled.td<TableProps>`
  ${(props: TableProps) => `
        padding: 10px;
        border: 1px solid ${props.color};
        font-weight: bold;
        position: relative;
        text-align: center !important;
        white-space: normal !important;
        font-size: var(--base-table-font-size) !important;
        height: 35px !important;
        padding: 2px 4px !important;
        line-height: 1.1;
        word-break: break-all !important;
        color: var(--main-font-color) !important;
        background-color: var(--main-background-color) !important;
        border-bottom-color: var(--main-outlined-color) !important;
        ${props?.width ? `width: ${props.width}px;` : ""}`}
`;

const ContainersTesting: React.FunctionComponent = () => {
  const themes: any = useContext(ReactThemeContext);

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="flex-start"
      gap={10}
      margin="30px 0 30px 0"
      width={500}
    >
      <Typography variant="H1">Containers Testing</Typography>
      <Typography variant="H2">Containers</Typography>
      <Table color={themes.palette.baseFontColor}>
        <thead>
          <tr>
            <TableCellHeader color={themes.palette.baseFontColor} width={350}>
              <FlexContainer justifyContent="flex-end" paddingRight={10}>
                Header 1
              </FlexContainer>
            </TableCellHeader>
            <TableCellHeader color={themes.palette.baseFontColor} width={750}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Header
              </FlexContainer>
            </TableCellHeader>
            <TableCellHeader color={themes.palette.baseFontColor}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Header 3
              </FlexContainer>
            </TableCellHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell color={themes.palette.baseFontColor} width={350}>
              <FlexContainer justifyContent="flex-end" paddingRight={10}>
                Algo Id
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor} width={750}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                222222222222222222222222222222222222
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Row 1, Col 3
              </FlexContainer>
            </TableCell>
          </tr>
          <tr>
            <TableCell color={themes.palette.baseFontColor} width={350}>
              <FlexContainer
                id="container3"
                justifyContent="flex-end"
                paddingRight={10}
              >
                Typologies
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor} width={750}>
              <FlexContainer
                id="container4"
                justifyContent="flex-start"
                paddingRight={10}
              >
                XXXXX,XXXXXX,XXXXX,XXXXXX,XXXXXXX,XXXXXXXX,XXXXXXXXXXXX,XXXXXXXXXX,XXXXXXXX,XXXXXXXXX,XXXXXXXXXX,XXXXXXXXX
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Row 1, Col 3
              </FlexContainer>
            </TableCell>
          </tr>
          <tr>
            <TableCell color={themes.palette.baseFontColor} width={350}>
              <FlexContainer justifyContent="flex-end" paddingRight={10}>
                Pnl Explain Algo Id
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor} width={750}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                222222222222222222222222222222222222
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Row 2, Col 3
              </FlexContainer>
            </TableCell>
          </tr>
          <tr>
            <TableCell color={themes.palette.baseFontColor} width={350}>
              <FormControl
                id="container1"
                justifyContent="flex-end"
                paddingRight={10}
              >
                American Monte Carlo Number Of Paths
              </FormControl>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor} width={750}>
              <FlexContainer
                id="container2"
                justifyContent="flex-start"
                paddingRight={10}
              >
                000
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Row 2, Col 3
              </FlexContainer>
            </TableCell>
          </tr>
          <tr>
            <TableCell color={themes.palette.baseFontColor} width={350}>
              <FlexContainer justifyContent="flex-end" paddingRight={10}>
                Overhedge Relative Digital Spread
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor} width={750}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                0.000
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Row 2, Col 3
              </FlexContainer>
            </TableCell>
          </tr>
          <tr>
            <TableCell color={themes.palette.baseFontColor} width={350}>
              <FlexContainer justifyContent="flex-end" paddingRight={10}>
                Market Data Override Hash
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor} width={750}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                222222222222222222222222222222222222
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Row 2, Col 3
              </FlexContainer>
            </TableCell>
          </tr>
          <tr>
            <TableCell color={themes.palette.baseFontColor} width={350}>
              <FlexContainer justifyContent="flex-end" paddingRight={10}>
                Product
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor} width={750}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Product
              </FlexContainer>
            </TableCell>
            <TableCell color={themes.palette.baseFontColor}>
              <FlexContainer justifyContent="flex-start" paddingRight={10}>
                Row 2, Col 3
              </FlexContainer>
            </TableCell>
          </tr>
        </tbody>
      </Table>
    </FlexContainer>
  );
};

export default ContainersTesting;
