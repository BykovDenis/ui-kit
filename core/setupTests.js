const React = require('react');
require('@testing-library/jest-dom');


React.useLayoutEffect = React.useEffect;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
