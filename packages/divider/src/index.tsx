import React from 'react';

import DividerStyled from './divider.styled';
import TDivider from '../types/tdivider';

const Divider: React.FunctionComponent<TDivider> = (props: TDivider) => <DividerStyled className={props?.className} width={props?.width} />;

export default React.memo(Divider);
