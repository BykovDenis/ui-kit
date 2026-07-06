import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TStickyBottomPanel from '../types/tsticky-bottom-panel';
import StickyBottomPanelStyled from './sticky-bottom-panel.styled';
import FormControl from '@dbykov-ui-kit/form-control';
import IconButton from '@dbykov-ui-kit/icon-button';
import CircleCrossIcon from '../../icons-components/24x24/circle-cross-icon';
import { onKeyUpEscapeEventHandler } from '../../helpers/on-key-up-event-handler';
import { useTheme } from '@dbykov-ui-kit/styles';

const StickyBottomPanel: React.FunctionComponent<TStickyBottomPanel> = (props: TStickyBottomPanel) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);
  const [panelAlign] = useState<'left' | 'right' | 'center'>(props.panelAlign || 'center');

  const onKeyUp = (evt: any) => {
    if (isOpen) {
      onKeyUpEscapeEventHandler(evt, props.onDialogVisibleChange);
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

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props?.backgroundColor || theme?.mainBackgroundColor;
    const color: string = props?.color || theme.palette.baseFontColor;

    return isOpen ? (
      <StickyBottomPanelStyled
        {...props}
        backgroundColor={backgroundColor}
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


  return componentThemed(theme);
};

export default StickyBottomPanel;
