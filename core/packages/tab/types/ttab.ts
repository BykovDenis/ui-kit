import TBaseStyles from '../../types/tbase-styles';
import React from 'react';

type TTab = TBaseStyles & {
  name?: string,
  isActive?: boolean,
  tabActive?: number | string,
  onChange?: (tabActive: number | string, evt: React.ChangeEvent<HTMLButtonElement>) => void,
  isUpperCase?: boolean,
};

export default TTab;
