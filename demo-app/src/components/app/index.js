import React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Tablebody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ReactSelectCustom from 'riski-react-ui/react-select-custom';
import ErrorComponent from 'riski-react-ui/error';
import NoDataAvailableComponent from 'riski-react-ui/not-data-available';
import MuiButton from 'riski-react-ui/mui-button';
import DatePickerCustom from 'riski-react-ui/date-picker-custom';
import './index.css';

function Index() {
  return (
    <div className="App">
      <Typography variant="h1">Demo of components</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <DatePickerCustom value="14.01.2019" />
            </TableCell>
            <TableCell>
              <ReactSelectCustom activeElement="one" elements={['one', 'two', 'three']} />
            </TableCell>
            <TableCell>
              <MuiButton>Click me!</MuiButton>
            </TableCell>
            <TableCell>
              <NoDataAvailableComponent />
            </TableCell>
            <TableCell>
              <ErrorComponent />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Index;
