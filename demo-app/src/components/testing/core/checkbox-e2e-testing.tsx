import React, { useState } from "react";
import Typography from "@dbykov-ui-kit/core/typography";
import Checkbox from "@dbykov-ui-kit/core/checkbox";
import Button from "@dbykov-ui-kit/core/button";
import FlexContainer from "@dbykov-ui-kit/core/flex-container";

const CheckboxE2ETesting: React.FunctionComponent = () => {
  const [accept, setAccept] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="flex-start"
      gap={12}
      margin="20px 0"
      width={700}
    >
      <Typography variant="H1">Checkbox E2E testing</Typography>

      <Checkbox
        id="checkbox-e2e-accept"
        name="checkbox-e2e-accept"
        label="Accept terms"
        checked={accept}
        onChange={(evt: any) => setAccept(!!evt?.target?.checked)}
      />

      <Checkbox
        id="checkbox-e2e-newsletter"
        name="checkbox-e2e-newsletter"
        label="Subscribe newsletter"
        checked={newsletter}
        onChange={(evt: any) => setNewsletter(!!evt?.target?.checked)}
      />

      <Checkbox
        id="checkbox-e2e-disabled"
        name="checkbox-e2e-disabled"
        label="Disabled option"
        checked={false}
        disabled={true}
        onChange={() => undefined}
      />

      <Button
        id="checkbox-e2e-reset"
        onClick={() => {
          setAccept(false);
          setNewsletter(false);
        }}
      >
        Reset
      </Button>

      <div id="checkbox-e2e-state">
        accept:{accept ? "true" : "false"};newsletter:{newsletter ? "true" : "false"}
      </div>
    </FlexContainer>
  );
};

export default CheckboxE2ETesting;

