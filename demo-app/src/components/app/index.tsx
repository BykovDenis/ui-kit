import React, { Fragment, useState } from 'react';
import './index.css';

// @ts-ignore
import Label from '@sber-riski-cib-ui/core/label';
import Button from '@sber-riski-cib-ui/core/button';
import TextField from '@sber-riski-cib-ui/core/textfield';
import Select from '@sber-riski-cib-ui/core/select';
import FormControl from '@sber-riski-cib-ui/core/form-control';
import theme from '../../themes';
import getNewReactThemeContext from '@sber-riski-cib-ui/core/styles';

const App: React.FunctionComponent = () => {
  const [value, setValue] = useState('2');

  const onValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setValue(element.value);
  };

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
            <tr>
              <td col-span="2">Label</td>
            </tr>
            <tr>
              <td>This is a label</td>
              <td>
                <FormControl margin="0 0 5px 0">
                  <Label>This is a label</Label>
                </FormControl>
                <Label error={true}>This is a label</Label>
              </td>
            </tr>
            <tr>
              <td>Button</td>
              <td>
                <FormControl margin="0 0 15px 0">
                  <Button colorTheme="warning">Click me!</Button>
                </FormControl>
                <Button>Click me!</Button>
              </td>
            </tr>
            <tr>
              <td>Text field</td>
              <td>
                <TextField
                  id="text-field"
                  name="textField"
                  value={value}
                  onChange={onValueChange}
                  label="Some textfield"
                />
              </td>
            </tr>
            <tr>
              <td>Select component</td>
              <td>
                <Select id="text-field" name="textField" activeElement="blue" elements={['red', 'blue', 'green']} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default App;
