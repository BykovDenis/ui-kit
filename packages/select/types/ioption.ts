import React from 'react';

interface IOption {
  index: number;
  label: string || React.ReactNode;
  name: string;
  value: string;
}

export default IOption;
