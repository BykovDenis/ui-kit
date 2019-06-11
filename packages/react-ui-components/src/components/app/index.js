import React, { Component } from 'react';
import CustomButton from 'riski-react-ui/custom-button';
import DatePickerCustom from 'riski-react-ui/date-picker-custom';
import ReactSelectCustom from 'riski-react-ui/react-select-custom';
import NotDataAvailable from 'riski-react-ui/not-data-available';
import Error from 'riski-react-ui/error';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import './index.css';

const styles = theme => ({
  container: {
    margin: '0 auto',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  formSelect: {
    ...theme.formSelect,
    fontSize: '12px',
  },
});

class App extends Component {
  render() {
    const { props } = this;
    const { classes } = props;
    return (
      <div className="App">
        <header>
          <h1>Riski UI Kit</h1>
        </header>
        <main className={classes.container}>
          <div>
            <h2>External components </h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Component name</TableCell>
                  <TableCell>Component</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Custom Button</TableCell>
                  <TableCell>
                    <CustomButton>First custom component</CustomButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date picker</TableCell>
                  <TableCell>
                    <DatePickerCustom value={'2019.04.20'} intl={{ locale: 'en' }} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>
                    <ReactSelectCustom
                      className={classes.formSelect}
                      activeElement="one"
                      elements={['one', 'two', 'three']}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Not data available</TableCell>
                  <TableCell>
                    <NotDataAvailable />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Error</TableCell>
                  <TableCell>
                    <Error />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
