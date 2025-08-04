import GridContainer from "@dbykov-ui-kit/core/grid-container";
import Datepicker from "@dbykov-ui-kit/core/datepicker";
import { useState } from "react";

const MixedComponents: React.FunctionComponent = () => {
  const [datepickerValue] = useState<string | undefined>(undefined);

  return (
    <>
      <GridContainer>
        <GridContainer>
          <Datepicker
            id="datepicker-1"
            name="someDatepicker"
            value={datepickerValue}
          />
        </GridContainer>
      </GridContainer>
    </>
  );
};

export default MixedComponents;
