import React, { Fragment, useState } from 'react';
import Button from '@sber-riski-cib-ui/core/button';
import SberRiskiReactUiProvider from '@sber-riski-cib-ui/core';
import ButtonLocal from '../button';
import { themes } from '../styles/src/themes';
import './index.css';
import Input from '../input/src';

const App: React.FunctionComponent = () => {
  const [value, setValue] = useState('2');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    setValue(element?.value);
  };

  const ThemeContext = React.createContext(themes.light);

  const onBtnClick = () => {
    console.log('Clicked');
  };

  return (
    <Fragment>
      <SberRiskiReactUiProvider>
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
              <tr>
                <td col-span="2">Base button</td>
              </tr>
              <tr>
                <td>
                  <Button ReactThemeContext={ThemeContext}>Click me!</Button>
                </td>
                <td>
                  <ButtonLocal onClick={onBtnClick} backgroundColor="#ff0000" color="green" className="button-pink">
                    Click me !!!
                  </ButtonLocal>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Input value={value} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SberRiskiReactUiProvider>
    </Fragment>
  );
};

export default App;
