import styled from 'styled-components';

import TStickyBottomPanel from '../types/tsticky-bottom-panel';
import getMeasureValue from '../../helpers/get-measure-value';
import PanelAlign from '../enums/panel-align';

const StickyBottomPanelStyled =
  styled.div <
  TStickyBottomPanel >
  `
    box-sizing: border-box;
    width: ${(props: TStickyBottomPanel) => getMeasureValue(props.width, '100%')};
    position: fixed;
    left: ${(props: TStickyBottomPanel) =>
      props.panelAlign === PanelAlign.Left ? 0 : props.panelAlign === PanelAlign.Center ? '50%' : 'initial'};
    right: ${(props: TStickyBottomPanel) => (props.panelAlign === PanelAlign.Right ? 0 : 'initial')};
    transform: ${(props: TStickyBottomPanel) => (props.panelAlign === PanelAlign.Center ? 'translateX(-50%)' : 'none')};
    bottom: 0;
    height: ${(props: TStickyBottomPanel) => getMeasureValue(props.height, '25%')};
    color: ${(props: TStickyBottomPanel) => props.color};
    z-index: 10002;
    padding-top:45px;
    border: 1px solid ${(props: TStickyBottomPanel) => props.borderColor};
    border-radius: 5px;
    background : ${(props: TStickyBottomPanel) =>
      props.backgroundColor || props.backgroundImage
        ? `${props?.backgroundColor ? props.backgroundColor : ''} ${
            props?.backgroundImage ? props.backgroundImage : ''
          }`
        : 'none'};
  `;

export default StickyBottomPanelStyled;
