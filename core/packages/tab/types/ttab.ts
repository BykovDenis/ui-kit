import React from 'react';

import TBaseStyles from '../../types/tbase-styles';

type TTab = TBaseStyles & {
  name?: string;
  isActive?: boolean;
  tabActive?: number | string;
  onChange?: (tabActive: number | string, evt: React.MouseEvent<HTMLButtonElement>) => void;
  isUpperCase?: boolean;
};

export default TTab;
