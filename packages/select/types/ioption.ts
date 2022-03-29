import React from 'react';

interface IOption {
  index?: number | null;
  label: string | React.ReactNode;
  name: string;
  value?: string | null;
}

export default IOption;
