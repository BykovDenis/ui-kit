import React, { Component } from 'react';
import CustomButton from 'riski-react-ui-components/packages/custom-button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CustomButton>First custom component</CustomButton>
        </header>
      </div>
    );
  }
}

export default App;
