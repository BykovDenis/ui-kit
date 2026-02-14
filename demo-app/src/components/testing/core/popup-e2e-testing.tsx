import React, { useState } from "react";
import Typography from "@dbykov-ui-kit/core/typography";
import Popup from "@dbykov-ui-kit/core/popup";
import Button from "@dbykov-ui-kit/core/button";
import FlexContainer from "@dbykov-ui-kit/core/flex-container";

const PopupE2ETesting: React.FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);
  const [zIndex, setZIndex] = useState<number>(9999);

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="flex-start"
      gap={12}
      margin="20px 0"
      width={700}
    >
      <Typography variant="H1">Popup E2E testing</Typography>

      <FlexContainer gap={10}>
        <Button id="popup-e2e-open" onClick={() => setOpen(true)}>
          Open popup
        </Button>
        <Button id="popup-e2e-close" onClick={() => setOpen(false)}>
          Close popup
        </Button>
        <Button id="popup-e2e-zindex-toggle" onClick={() => setZIndex((prev) => (prev === 9999 ? 10001 : 9999))}>
          Toggle z-index
        </Button>
      </FlexContainer>

      <Popup isOpen={isOpen} width={320} zIndex={zIndex}>
        <div id="popup-e2e-content">
          <div id="popup-e2e-text">Popup body</div>
          <Button id="popup-e2e-inner-close" onClick={() => setOpen(false)}>
            Close from popup
          </Button>
        </div>
      </Popup>
    </FlexContainer>
  );
};

export default PopupE2ETesting;

