import React from 'react';
import TBaseStyles from '../../types/tbase-styles';

type TTabs = TBaseStyles & {
  value: number | string,
  onChange?: (tabActive: string | number, evt: React.ChangeEvent<HTMLButtonElement>) => void,
  isUpperCase?: boolean,
};

export default TTabs;
