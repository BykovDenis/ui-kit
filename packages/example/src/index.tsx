import React from 'react';
import Iexample from '../types/iexample';

const Example: React.FunctionComponent<Iexample> = (props: Iexample) => {
  return <p>{props.title}</p>;
};

export default Example;
