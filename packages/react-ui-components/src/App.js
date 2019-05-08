import React, { Component } from 'react';
import CustomButton from 'riski-react-ui-components/custom-button';
import DatePickerCustom from 'riski-react-ui-components/date-picker-custom';
import CustomButtonInternal from '@riski-react-ui-components/custom-button';
import DatePickerCustomInternal from '@riski-react-ui-components/date-picker-custom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>External components </h1>
          <hr/>
          <CustomButton>First custom component</CustomButton>
          <DatePickerCustom value={'2019.04.20'} intl={{locale: 'en'}} />
          <hr/>
          <h1>Internal components </h1>
          <CustomButtonInternal>First custom component</CustomButtonInternal>
          <DatePickerCustomInternal value={'2019.04.20'} intl={{locale: 'en'}} />
        </header>
      </div>
    );
  }
}

export default App;
