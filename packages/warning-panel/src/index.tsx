import React from 'react';

import WarningIcon from './img/warning-icon.svg';
import WarningPanelContainer from './warning-panel-container';
import WarningPanelDescription from './warning-panel-description';

interface IWarningPanel {
  title: string;
}

const WarningPanel: React.FunctionComponent<IWarningPanel> = (props: IWarningPanel) => {
  return (
    <WarningPanelContainer>
      <img src={WarningIcon} width="24" height="24" />
      <WarningPanelDescription>{props.title}</WarningPanelDescription>
    </WarningPanelContainer>
  );
};

export default WarningPanel;
