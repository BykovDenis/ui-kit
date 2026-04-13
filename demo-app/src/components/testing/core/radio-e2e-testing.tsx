import React, { useState } from "react";
import Typography from "@dbykov-ui-kit/core/typography";
import Radio from "@dbykov-ui-kit/core/radio";
import FlexContainer from "@dbykov-ui-kit/core/flex-container";

const RadioE2ETesting: React.FunctionComponent = () => {
  const [priority, setPriority] = useState("medium");

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="flex-start"
      gap={12}
      margin="20px 0"
      width={700}
    >
      <Typography variant="H1">Radio E2E testing</Typography>

      <Radio
        id="radio-e2e-low"
        name="radio-e2e-priority"
        label="Low"
        checked={priority === "low"}
        onChange={() => setPriority("low")}
      />
      <Radio
        id="radio-e2e-medium"
        name="radio-e2e-priority"
        label="Medium"
        checked={priority === "medium"}
        onChange={() => setPriority("medium")}
      />
      <Radio
        id="radio-e2e-high"
        name="radio-e2e-priority"
        label="High"
        checked={priority === "high"}
        onChange={() => setPriority("high")}
      />
      <Radio
        id="radio-e2e-disabled"
        name="radio-e2e-priority-disabled"
        label="Disabled"
        checked={false}
        disabled={true}
        onChange={() => undefined}
      />

      <div id="radio-e2e-state">{priority}</div>
    </FlexContainer>
  );
};

export default RadioE2ETesting;

