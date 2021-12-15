import React, { Fragment } from 'react';
import Button from '@sber-riski-cib-ui/core/button';
import SberRiskiReactUiProvider from '@sber-riski-cib-ui/core';
import ButtonLocal from '../button';
import {themes} from "../styles/themes";
import './index.css';


const App: React.FunctionComponent = () => {

  const ThemeContext = React.createContext(themes.light);

  const onBtnClick = () => {
    console.log('Clicked');
  }

  return (
    <Fragment>
      <div>
      <p>Tools Kit UI</p>
      <table>
        <thead>
          <tr>
            <th>From UI Kit</th>
            <th>From local folder</th>
          </tr>
        </thead>
        <tbody>
          <tr><td col-span="2">Base button</td></tr>
          <tr>
            <td>
              <SberRiskiReactUiProvider ><Button ReactThemeContext={ThemeContext}>Click me!</Button></SberRiskiReactUiProvider>
            </td>
            <td>
                <ButtonLocal onClick={onBtnClick} backgroundColor="#ff0000" color="green" className="button-pink">Click me !!!</ButtonLocal>
            </td>
        </tr>
        </tbody>
      </table>
      </div>
    </Fragment>);
}

export default App;
