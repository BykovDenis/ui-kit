import styled from 'styled-components';

import TStickyBottomPanel from '../types/tsticky-bottom-panel';
import getMeasureValue from '../../helpers/get-measure-value';

const StickyBottomPanelStyled =
  styled.div <
  TStickyBottomPanel >
  `
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${(props: TStickyBottomPanel) => getMeasureValue(props.height, '25%')};
    background-color: ${(props: TStickyBottomPanel) => props.backgroundColor};
    color: ${(props: TStickyBottomPanel) => props.color};
    overflow-y: auto;
    z-index: 10002;
  `;

export default StickyBottomPanelStyled;
