import React from 'react';
import Typography from '@dbykov-ui-kit/core/typography';
import FlexContainer from '@dbykov-ui-kit/core/flex-container';
// local components
// import TextField from '../../../packages/textfield/src';
// import GridContainer from '../../../packages/grid-container/src';
// import Label from '@dbykov-ui-kit/core/label';
// import Button from '../../../packages/button/src';
// import Input from '../../../packages/input/src';
// import Select from '../../../packages/select/src';
// import IOption from '../../../packages/select/types/ioption';
// import Datepicker from '../../../packages/datepicker/src';
// import DatepickerMask from '../../../packages/datepicker/enums/datepicker-mask';
// import Locale from '../../../packages/enums/locale';
// import Checkbox from '../../../packages/checkbox/src';
// import Radio from '../../../packages/radio/src';
// import IconButton from '../../../packages/icon-button/src';
// import Switcher from '../../../packages/switcher/src';
// components from package library
import TextField from '@dbykov-ui-kit/core/textfield';
import GridContainer from '@dbykov-ui-kit/core/grid-container';
import Label from '@dbykov-ui-kit/core/label';
import Button from '@dbykov-ui-kit/core/button';
import Input from '@dbykov-ui-kit/core/input';
import Select from '@dbykov-ui-kit/core/select';
import { IOption } from '@dbykov-ui-kit/core/select';
import Datepicker from '@dbykov-ui-kit/core/datepicker';
import DatepickerMask from '@dbykov-ui-kit/core/datepicker/enums/datepicker-mask';
import Locale from '@dbykov-ui-kit/core/enums/locale';
import Checkbox from '@dbykov-ui-kit/core/checkbox';
import Radio from '@dbykov-ui-kit/core/radio';
import IconButton from '@dbykov-ui-kit/core/icon-button';
import Switcher from '@dbykov-ui-kit/core/switcher';

const ErrorsStateTesting: React.FunctionComponent = () => {
  const [textFieldErrorValue, setTextFieldErrorValue] = React.useState<string | undefined | null>(undefined);
  const [inputErrorValue, setInputErrorValue] = React.useState<string | undefined | null>(undefined);
  const [activeElementSelectErrorValue, setActiveElementSelectErrorValue] = React.useState<string | undefined | null>(
    undefined
  );
  const [dateDottedErrorValue, setDateDottedErrorValue] = React.useState<string | null>(null);
  const [dateDashedErrorValue, setDateDashedErrorValue] = React.useState<string | null>(null);
  const [isTextFieldErrorFlag, setTextFieldErrorFlag] = React.useState<boolean>(false);

  const onTextFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setTextFieldErrorValue(element.value);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setInputErrorValue(element.value);
  };

  const onSelectElementChange = (option: IOption) => {
    setActiveElementSelectErrorValue(option.value?.toString());
  };

  const onSelectElementRemove = () => {
    setActiveElementSelectErrorValue(null);
  };

  const onTextFieldRemove = () => {
    setTextFieldErrorValue(null);
  };

  const onInputRemove = () => {
    setInputErrorValue(null);
  };

  const onSetErrorTextFieldButtonClick = () => {
    setTextFieldErrorFlag((isTextFieldErrorFlag: boolean) => !isTextFieldErrorFlag);
  };

  const onDatepickerDottedChange = (name: string, newDate: string) => {
    setDateDottedErrorValue(newDate);
  };

  const onDatepickerDottedRemove = () => {
    setDateDottedErrorValue(null);
  };

  const onDatepickerDashedChange = (name: string, newDate: string) => {
    setDateDashedErrorValue(newDate);
  };

  const onDatepickerDashedRemove = () => {
    setDateDashedErrorValue(null);
  };

  return (
    <>
      <FlexContainer width={900} flexDirection="column">
        <Typography variant="H1" textAlign="center">
          Testing error state Components
        </Typography>
        <GridContainer gap={20}>
          <Button id="set-error" onClick={onSetErrorTextFieldButtonClick}>
            {`${isTextFieldErrorFlag ? 'un' : ''}set error`}
          </Button>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="textField">TextField</Label>
            <TextField
              id="textField"
              onChange={onTextFieldChange}
              onRemove={onTextFieldRemove}
              value={textFieldErrorValue}
              error={isTextFieldErrorFlag || (textFieldErrorValue as string)?.length < 10}
            />
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="input">Input</Label>
            <Input
              id="input"
              onChange={onInputChange}
              onRemove={onInputRemove}
              value={inputErrorValue}
              error={isTextFieldErrorFlag || (inputErrorValue as string)?.length < 10}
              isNotRunDebounce={true}
            />
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="select">Select</Label>
            <Select
              id="select"
              name="select"
              onChange={onSelectElementChange}
              onRemove={onSelectElementRemove}
              activeElement={activeElementSelectErrorValue}
              elements={['first', 'second', 'third', 'fourth']}
              error={isTextFieldErrorFlag || (activeElementSelectErrorValue as string)?.length < 6}
            />
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="datepicker-dotted">Datepicker Dotted DDMMYYYY</Label>
            <Datepicker
              id="datepicker-dotted"
              name="datepickerDotted"
              onChange={onDatepickerDottedChange}
              onRemove={onDatepickerDottedRemove}
              value={dateDottedErrorValue}
              error={isTextFieldErrorFlag || (dateDottedErrorValue as string)?.length < 6}
              mask={DatepickerMask.DottedDDMMYYYY}
              locale={Locale.Ru}
            />
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="datepicker-dashed">Datepicker Dashed YYYYMMDD</Label>
            <Datepicker
              id="datepicker-dashed"
              name="datepickerDashed"
              onChange={onDatepickerDashedChange}
              onRemove={onDatepickerDashedRemove}
              value={dateDashedErrorValue}
              error={isTextFieldErrorFlag || (dateDashedErrorValue as string)?.length < 6}
              mask={DatepickerMask.DashedYYYYMMDD}
            />
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="button">Button</Label>
            <Button id="button" error={isTextFieldErrorFlag}>
              Click me!
            </Button>
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr" gap={20} width="initial">
            <Label id="label" error={isTextFieldErrorFlag}>
              Label
            </Label>
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 1fr 1fr 1fr" gap={20} width="initial">
            <Label htmlFor="datepicker-dashed">Radio</Label>
            <Radio error={isTextFieldErrorFlag} label="radio-1" id="radio-1" name="radio" checked />
            <Radio error={isTextFieldErrorFlag} label="radio-2" id="radio-2" name="radio" />
            <Radio error={isTextFieldErrorFlag} label="radio-3" id="radio-3" name="radio" />
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 1fr 1fr 1fr" gap={20} width="initial">
            <Label htmlFor="datepicker-dashed">Checkbox</Label>
            <Checkbox error={isTextFieldErrorFlag} label="checkbox-1" id="checkbox-1" name="checkbox-1" checked />
            <Checkbox error={isTextFieldErrorFlag} label="checkbox-2" id="checkbox-2" name="checkbox-2" />
            <Checkbox error={isTextFieldErrorFlag} label="checkbox-3" id="checkbox-3" name="checkbox-3" />
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="icon-button">Icon Button</Label>
            <IconButton width={64} height={64} id="icon-button" error={isTextFieldErrorFlag}>
              !
            </IconButton>
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="switcher">Switcher</Label>
            <Switcher
              activeElement="element2"
              element1="element1"
              element2="element2"
              id="switcher"
              error={isTextFieldErrorFlag}
            />
          </GridContainer>
        </GridContainer>
      </FlexContainer>
    </>
  );
};

export default ErrorsStateTesting;
