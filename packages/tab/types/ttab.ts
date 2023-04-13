import TBaseStyles from '../../types/tbase-styles';
import React from 'react';

type TTab = TBaseStyles & {
  isActive?: boolean,
  tabIndex?: number,
  onChange?: (tabIndex: number, evt: React.ChangeEvent<HTMLButtonElement>) => void,
};

export default TTab;
