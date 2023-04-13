import React from 'react';
import TBaseStyles from '../../types/tbase-styles';

type TTabs = TBaseStyles & {
  value: number,
  onChange?: (tabIndex: number, evt: React.ChangeEvent<HTMLButtonElement>) => void,
};

export default TTabs;
