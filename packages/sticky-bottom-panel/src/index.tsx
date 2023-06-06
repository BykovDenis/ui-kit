import React, { useEffect, useState } from 'react';

import TStickyBottomPanel from '../types/tsticky-bottom-panel';
import StickyBottomPanelStyled from './sticky-bottom-panel.styled';
import FormControl from '../../form-control/src';
import IconButton from '../../icon-button/src';
import CircleCrossIcon from '../../icons-components/24x24/circle-cross-icon';
import onKeyUpEventHandler from '../../helpers/on-key-up-event-handler';
import getCssVariables from '../../styles/src/get-css-variables';

const StickyBottomPanel: React.FunctionComponent<TStickyBottomPanel> = (props: TStickyBottomPanel) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);
  const [panelAlign] = useState<'left' | 'right' | 'center'>(props.panelAlign || 'center');
  const cssVariables: any = getCssVariables();

  const onKeyUp = (evt: any) => {
    if (isOpen) {
      onKeyUpEventHandler(evt, props.onDialogVisibleChange);
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

    const backgroundColor: string = props?.backgroundColor || cssVariables.backgroundColor;
    const color: string = props?.color || cssVariables.baseFontColor;

    return isOpen ? (
      <StickyBottomPanelStyled
        width={props.width}
        backgroundColor={backgroundColor}
        backgroundImage={props.backgroundImage}
        height={props?.height}
        color={color}
        panelAlign={panelAlign}
        borderColor={cssVariables.mainOutlinedColor}
        boxShadow={props.boxShadow}
        filter={props.filter}
      >
        <FormControl height={40} justifyContent="flex-end" position="absolute" top="0" alignItems="flex-start">
          <IconButton onClick={props.onDialogVisibleChange} variant="text">
            <CircleCrossIcon color={cssVariables.baseFontColor} />
          </IconButton>
        </FormControl>
        <FormControl overflowY="auto" height="95%" alignItems="flex-start">
          {props.children}
        </FormControl>
      </StickyBottomPanelStyled>
    ) : null;
};

export default React.memo(StickyBottomPanel);
