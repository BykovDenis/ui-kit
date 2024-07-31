import React from 'react';
import Typography from '@sber-risks-ui/core/typography';
import FlexContainer from '@sber-risks-ui/core/flex-container';
import TextField from '@sber-risks-ui/core/textfield';
import GridContainer from '../../../packages/grid-container/src';
import Label from '@sber-risks-ui/core/label';
import Button from '@sber-risks-ui/core/button';
import Input from '@sber-risks-ui/core/input';

const ErrorsStateTesting: React.FunctionComponent = () => {
  const [textFieldErrorValue, setTextFieldErrorValue] = React.useState<string | undefined | null>(undefined);
  const [inputErrorValue, setInputErrorValue] = React.useState<string | undefined | null>(undefined);
  const [textFieldErrorFlag, setTextFieldErrorFlag] = React.useState<boolean>(false);

  const onTextFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setTextFieldErrorValue(element.value);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    setInputErrorValue(element.value);
  };

  const onTextFieldRemove = () => {
    setTextFieldErrorValue(null);
  };

  const onInputRemove = () => {
    setInputErrorValue(null);
  };

  const onSetErrorTextFieldButtonClick = () => {
    setTextFieldErrorFlag(true);
  };

  return (
    <>
      <FlexContainer width={900} flexDirection="column">
        <Typography variant="H1" textAlign="center">
          Testing of state errors
        </Typography>
        <GridContainer gap={20}>
          <Button id="set-error" onClick={onSetErrorTextFieldButtonClick}>
            set error
          </Button>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="textField">TextField component</Label>
            <TextField
              id="textField"
              onChange={onTextFieldChange}
              onRemove={onTextFieldRemove}
              value={textFieldErrorValue}
              error={textFieldErrorFlag || (textFieldErrorValue as string)?.length < 10}
            />
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 2fr" gap={20} width="initial">
            <Label htmlFor="textField">Input component</Label>
            <Input
              id="input"
              onChange={onInputChange}
              onRemove={onInputRemove}
              value={inputErrorValue}
              error={textFieldErrorFlag || (inputErrorValue as string)?.length < 10}
              isNotRunDebounce={true}
            />
          </GridContainer>
        </GridContainer>
      </FlexContainer>
    </>
  );
};

export default ErrorsStateTesting;
