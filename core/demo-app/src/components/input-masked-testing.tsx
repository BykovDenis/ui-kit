import React, { useLayoutEffect } from 'react';
import FlexContainer from '@sber-risks-ui/core/flex-container';
import Typography from '@sber-risks-ui/core/typography';
import Input from '../../../packages/input/src';
import FormControl from '@sber-risks-ui/core/form-control';
import Label from '@sber-risks-ui/core/label';
import IMask from 'imask';
import Datepicker from '../../../packages/datepicker/src';
import Locale from '../../../packages/enums/locale';
import DatepickerMask from '../../../packages/datepicker/enums/datepicker-mask';

const InputMaskedTesting = () => {
  const [inputValue, setInputValue] = React.useState<string | undefined>('');
  const [dateValue, setDateValue] = React.useState<string | undefined>();
  const [inputValueDDMMYYYY, setInputValueDDMMYYYY] = React.useState<string | undefined>();

  useLayoutEffect(() => {
    const vanillaInput = document.getElementById('vanilla-input-masked');

    if (vanillaInput) {
      IMask(vanillaInput, {
        // mask: (value: string) => /^\d+$/i.test(value),
        // mask: (value: string) => /^(\d*){2}(\.+)(\d*){2}(\.+)(\d*){4}$/i.test(value),
        mask: Date,
      });

      // vanillaInput.addEventListener('input', (evt: any) => {
      //
      // })
    }
  }, []);

  const onInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    console.log('input date value', evt.target.value);
  };

  const onInputValueRemove = () => {
    setInputValue(undefined);
  };

  const onInputDDMMYYYYValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueDDMMYYYY(evt.target.value);
    console.log('date value', evt.target.value);
  };

  const onInputDDMMYYYYValueRemove = () => {
    setInputValueDDMMYYYY(undefined);
    console.log('date value', null);
  };

  const onDateValueChange = (name: string, newDateValue: string, isValid: boolean) => {
    setDateValue(newDateValue);
    console.log('date value', newDateValue);
  };

  const onDateValueRemove = () => {
    setDateValue(null);
    console.log('date value', null);
  };

  return (
    <>
      <Typography variant="H1" textAlign="center">
        Testing Input masked components
      </Typography>
      <FlexContainer justifyContent="center" alignItems="center" height={200} flexDirection="column">
        <FormControl justifyContent="flex-start" width={400}>
          <Label width="initial" justifyContent="flex-start" htmlFor="date-value">
            Date value
          </Label>
          <Datepicker
            id="date-value"
            name="dateValue"
            value={dateValue}
            onChange={onDateValueChange}
            onRemove={onDateValueRemove}
            locale={Locale.Ru}
            variant="outlined"
          />
        </FormControl>
        <FormControl justifyContent="flex-start" width={400}>
          <Label width="initial" justifyContent="flex-start" htmlFor="input-date-masked">
            Input date masked YYYYMMDD
          </Label>
          <Input
            id="input-date-masked"
            name="inputDateMasked"
            type="date"
            value={inputValue}
            onBlur={onInputValueChange}
            onRemove={onInputValueRemove}
            dateMask={DatepickerMask.YYYYMMDD}
            variant="outlined"
          />
          <Input
            id="input-date-masked2"
            name="inputDateMasked"
            value={inputValue}
            onBlur={onInputValueChange}
            onRemove={onInputValueRemove}
            dateMask={DatepickerMask.YYYYMMDD}
            variant="outlined"
          />
        </FormControl>
        <FormControl justifyContent="flex-start" width={400}>
          <Label width="initial" justifyContent="flex-start" htmlFor="input-date-masked-ddmmyyyy">
            Input date masked DDMMYYYY
          </Label>
          <Input
            id="input-date-masked-ddmmyyyy"
            name="inputDateMasked"
            type="date"
            value={inputValueDDMMYYYY}
            onBlur={onInputDDMMYYYYValueChange}
            onRemove={onInputDDMMYYYYValueRemove}
            dateMask={DatepickerMask.DDMMYYYY}
          />
        </FormControl>
        <FormControl justifyContent="flex-start" width={400}>
          <Label width="initial" justifyContent="flex-start" htmlFor="input-masked">
            Input masked
          </Label>
          <Input
            id="input-masked"
            name="inputMasked"
            type="text"
            value={inputValue}
            onChange={onInputValueChange}
            onRemove={onInputValueRemove}
          />
        </FormControl>
        <FormControl justifyContent="flex-start" width={400} marginTop={30}>
          <Label width="initial" justifyContent="flex-start" htmlFor="vanilla-input-masked">
            Vanilla Input masked
          </Label>
          <input
            type="text"
            id="vanilla-input-masked"
            name="inputMasked"
            style={{
              backgroundColor: 'transparent',
              height: '45px',
              width: '200px',
              border: 'none',
              outline: '1px dashed rgba(255, 255, 255, 0.3)',
              marginLeft: '10px',
              borderRadius: '5px',
              textAlign: 'center',
              fontSize: '14px',
              color: 'white',
            }}
          />
        </FormControl>
      </FlexContainer>
    </>
  );
};

export default InputMaskedTesting;
