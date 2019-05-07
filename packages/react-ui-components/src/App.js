import React, { Component } from 'react';
// import CustomButton from '@riski-react-ui-components/custom-button';
import CustomButton from 'riski-react-ui-components/custom-button';
import DatePickerCustom from 'riski-react-ui-components/date-picker-custom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CustomButton>First custom component</CustomButton>
          <DatePickerCustom value={'2019.04.20'} />
        </header>
      </div>
    );
  }
}

export default App;
