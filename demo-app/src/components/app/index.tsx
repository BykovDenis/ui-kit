import React from 'react';
import Button from '@sber-riski-cib-ui/core/button';
// @ts-ignore
import ButtonLocal from '../button';

function App() {
  return (<div>
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
          <Button>Click me!</Button>
        </td>
        <td>
          <ButtonLocal>Click me!</ButtonLocal>
        </td>
      </tr>
      </tbody>
    </table>
  </div>);
}

export default App;
