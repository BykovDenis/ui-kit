import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TStickyBottomPanel from '../types/tsticky-bottom-panel';
import StickyBottomPanelStyled from './sticky-bottom-panel.styled';
import FormControl from '../../form-control/src';
import IconButton from '../../icon-button/src';
import CircleCrossIcon from '../../icons-components/24x24/circle-cross-icon';
import onKeyUpEventHandler from '../../helpers/on-key-up-event-handler';

const StickyBottomPanel: React.FunctionComponent<TStickyBottomPanel> = (props: TStickyBottomPanel) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);
  const [panelAlign] = useState<'left' | 'right' | 'center'>(props.panelAlign);

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

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props?.backgroundColor || theme?.mainBackgroundColor;
    const color: string = props?.color || theme.palette.baseFontColor;

    return isOpen ? (
      <StickyBottomPanelStyled
        width={props.width}
        backgroundColor={backgroundColor}
        backgroundImage={props.backgroundImage}
        height={props?.height}
        color={color}
        panelAlign={panelAlign}
        borderColor={theme.mainOutlinedColor}
      >
        <FormControl height={40} justifyContent="flex-end" position="absolute" top="0" alignItems="flex-start">
          <IconButton onClick={props.onDialogVisibleChange} variant="text">
            <CircleCrossIcon color={theme.palette.baseFontColor} />
          </IconButton>
        </FormControl>
        <FormControl overflowY="auto" height="95%" alignItems="flex-start">
          {props.children}
        </FormControl>
      </StickyBottomPanelStyled>
    ) : null;
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(StickyBottomPanel);
