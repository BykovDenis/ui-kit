import GridContainer from '../../../packages/grid-container/src';
import Datepicker from '@sber-risks-ui/core/datepicker';
import { useState } from 'react';

const MixedComponents: React.FunctionComponent = () => {
  const [datepickerValue, setDatepickerValue] = useState<string | undefined>(undefined);

  return (
    <>
      <GridContainer>
        <GridContainer>
          <Datepicker id="datepicker-1" name="someDatepicker" value={datepickerValue} />
        </GridContainer>
      </GridContainer>
    </>
  );
};

export default MixedComponents;
