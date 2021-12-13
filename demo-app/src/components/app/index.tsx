import React from 'react';
import Button from '@sber-riski-cib-ui/core/button';
// @ts-ignore
import ButtonLocal from '../button/dist';

function App() {
  return (<div>
    <p>Tools Kit UI</p>
    <table>
      <tr>
        <th>From UI Kit</th>
        <th>From local folder</th>
      </tr>
      <tr><td col-span="2">Base button</td></tr>
      <tr>
        <td>
          <Button>Click me!</Button>
        </td>
        <td>
          <ButtonLocal>Click me!</ButtonLocal>
        </td>
      </tr>
    </table>



  </div>);
}

export default App;
