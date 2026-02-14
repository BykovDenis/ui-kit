import React, { useState } from "react";
import Typography from "@dbykov-ui-kit/core/typography";
import Tabs from "@dbykov-ui-kit/core/tabs";
import Tab from "@dbykov-ui-kit/core/tab";
import FlexContainer from "@dbykov-ui-kit/core/flex-container";

const TabsE2ETesting: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const panelText =
    activeTab === "overview"
      ? "Overview panel"
      : activeTab === "details"
      ? "Details panel"
      : "History panel";

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="flex-start"
      gap={12}
      margin="20px 0"
      width={700}
    >
      <Typography variant="H1">Tabs E2E testing</Typography>

      <Tabs value={activeTab} onChange={(tabActive: string | number) => setActiveTab(tabActive.toString())}>
        <Tab name="overview" className="tabs-e2e-overview">
          Overview
        </Tab>
        <Tab name="details" className="tabs-e2e-details">
          Details
        </Tab>
        <Tab name="history" className="tabs-e2e-history" disabled={true}>
          History
        </Tab>
      </Tabs>

      <div id="tabs-e2e-state">{activeTab}</div>
      <div id="tabs-e2e-panel">{panelText}</div>
    </FlexContainer>
  );
};

export default TabsE2ETesting;

