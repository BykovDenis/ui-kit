import React, { Component } from 'react';
import CustomButton from 'riski-react-ui/custom-button';
import DatePickerCustom from 'riski-react-ui/date-picker-custom';
import CustomButtonInternal from '@riski-react-ui/custom-button';
import DatePickerCustomInternal from '@riski-react-ui/date-picker-custom';
import ReactSelectCustomInternal from '@riski-react-ui/react-select-custom';
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
            <CustomButton>First custom component</CustomButton>
            <DatePickerCustom value={'2019.04.20'} intl={{ locale: 'en' }} />
          </div>
          <div>
            <h2>Internal components </h2>
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
                    <CustomButtonInternal>First custom component</CustomButtonInternal>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date picker</TableCell>
                  <TableCell>
                    <DatePickerCustomInternal value={'2019.04.20'} intl={{ locale: 'en' }} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>
                    <ReactSelectCustomInternal
                      className={classes.formSelect}
                      activeElement="one"
                      elements={['one', 'two', 'three']}
                    />
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
