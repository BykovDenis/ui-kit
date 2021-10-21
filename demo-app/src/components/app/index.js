import React from 'react';
import './index.css';
import CustomButton from '@sber-riski-cib-ui/core/custom-button'

function Index() {
  return (
    <div className="App">
      <h1>Demo of the common components</h1>
      <table>
        <tbody>
          <tr>
            <td>
            <CustomButton>123</CustomButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Index;
