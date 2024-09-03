import GridContainer from "@sber-risks-ui/core/grid-container";
import Datepicker from "@sber-risks-ui/core/datepicker";
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
