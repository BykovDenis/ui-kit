import React from 'react';

// import WarningIcon from './img/warning-icon.svg';
import WarningPanelContainer from './warning-panel-container';
import WarningPanelDescription from './warning-panel-description';
import WarningIconComponent from './warning-component';

interface IWarningPanel {
  title: string;
}

const WarningPanel: React.FunctionComponent<IWarningPanel> = (props: IWarningPanel) => {
  return (
    <WarningPanelContainer>
      <WarningIconComponent />
      <WarningPanelDescription>{props.title}</WarningPanelDescription>
    </WarningPanelContainer>
  );
};

export default WarningPanel;
