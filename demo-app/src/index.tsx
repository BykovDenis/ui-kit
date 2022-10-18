import React from 'react';
import ReactDOM from 'react-dom';

import getNewReactThemeContext from '@sber-riski-cib-ui/core/styles';
import theme from './themes';
import App from './components/app';

const ReactThemeContext: any = getNewReactThemeContext(theme);

ReactDOM.render(
  <ReactThemeContext.Provider value={theme}>
    <App />
  </ReactThemeContext.Provider>,
  document.getElementById('ui-riski-cib-ui')
);
