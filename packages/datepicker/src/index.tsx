import React, { useEffect, useRef, useState } from 'react';

import { DEFAULT_HEIGHT, FONT_WEIGHT_REGULAR, INPUT_TAG, KEY_ESCAPE, TEXT_ALIGN_LEFT } from '../../constants';
import Divider from '../../divider/src/index.styled';
import Locales from '../../enums/locales';
import searchDomChildElement from '../../helpers/search-dom-child-element';
import Input from '../../input/src';
import Label from '../../label/src';
import Select from '../../select/src';
import ITheme from '../../styles/types/itheme';
import monthsElementEn from '../dictionaries/months-en';
import monthsElementRu from '../dictionaries/months-ru';
import DateParser from '../helpers/date-parser';
import IDatepicker from '../types/idatepicker';
import IOption from '../types/ioption';
import DatepickerButtonNavigate from './datepicker-button-navigate';
import DatepickerContainerStyled from './datepicker-container.styled';
import DatepickerDatesContainer from './datepicker-dates-container.styled';
import DatepickerHeader from './datepicker-header.styled';
import DatepickerNavigateContainerStyled from './datepicker-navigate-container.styled';
import DaysOfMonth from './days-of-month';
import DaysOfWeek from './days-of-week';
import LabelContainer from './label-container.styled';
import MonthsYearsRuleContainer from './months-years-rule-container.styled';

const Datepicker: React.FunctionComponent<IDatepicker> = (props: IDatepicker) => {
  const dateRef = useRef();
  let dateParsed = new DateParser(props.value);

  // >>> initial values

  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(props.value);
  const [valueState, setValueState] = useState(dateParsed.formatToString());
  const [isVisibleList, setIsVisibleList] = useState(false);
  const [currentDayNumber, setCurrentDayNumber] = useState(dateParsed?.getNumberCurrentDateOfMonth());
  const [currentMonthNumber, setCurrentMonthNumber] = useState(dateParsed?.getNumberMonth());
  const [currentYearNumber, setCurrentYearNumber] = useState(dateParsed?.getNumberYear());
  const [activeDayNumber, setActiveDayNumber] = useState(dateParsed?.getNumberCurrentDateOfMonth());
  const [activeMonthNumber, setActiveMonthNumber] = useState(dateParsed?.getNumberMonth());
  const [activeYearNumber, setActiveYearNumber] = useState(dateParsed?.getNumberYear());
  const [numberDayInWeek, setNumberDayInWeek] = useState(dateParsed?.getNumberDayInWeek());
  const [countDaysIsMonth, setCountDaysIsMonth] = useState(dateParsed?.getCountDaysInMonth());
  const [isError, setIsError] = useState(false);
  const [isMinDateError, setIsMinDateError] = useState(false);
  const [isMaxDateError, setIsMaxDateError] = useState(false);

  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;

  const minDate = props.minDate !== null ? new DateParser(props.minDate) : null;
  const maxDate = props.maxDate !== null ? new DateParser(props.maxDate) : null;
  const minDateMilliseconds: number = minDate !== null ? minDate?.getTimestamp() : null;
  const maxDateMilliseconds: number = maxDate !== null ? maxDate?.getTimestamp() : null;

  // >> titles

  const monthTitle: string = props?.locale === Locales.Ru || !props?.locale ? 'Месяц' : 'Month';
  const yearTitle: string = props?.locale === Locales.Ru || !props?.locale ? 'Год' : 'Year';

  const textMessageError: string = props?.locale === Locales.Ru ? 'Дата не валидна' : 'Date is not valid';

  const minDateMessage: string =
    props?.locale === Locales.Ru ? 'Дата меньше допустимой' : 'Date is less than allowed';
  const maxDateMessage: string =
    props?.locale === Locales.Ru ? 'Дата больше допустимой' : 'Date is more then allowed';

  const textMessage = isError
    ? isMinDateError
      ? minDateMessage
      : isMaxDateError
        ? maxDateMessage
        : textMessageError
    : props?.textMessage;

  // << titles

  // <<< initial values



  // >>> events handlers

  const onInputDelete = (name: string) => {
    if (props?.onRemove) {
      props?.onRemove(name, null);
    }
    setIsExistValue(false);
    setIsVisibleList(false);
    setValue('');
  };

  const onMouseOutUp = (evt: any) => {
    const element: any = evt.target;
    if (dateRef) {
      const listElement: any = dateRef?.current;
      if (listElement) {
        onDatesContainerClose(searchDomChildElement(listElement, element), evt);
      }
    }
    if (inputRef) {
      const input = inputRef?.current;
      if (element !== input) {
        if (input?.blur) {
          input.blur();
        }
      }
    }
  };

  const onKeyUp = (evt: any) => {
    if (evt.keyCode === 27 || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
      setIsFocus(false);
      setIsVisibleList(false);
    }
  };

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setIsVisibleList(false);
  };

  const onInputFocus = () => {
    setIsFocus(true);
    setIsVisibleList(true);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt.target;
    const regExpr: RegExp = new RegExp('(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})');
    const datePartitioned: { day: string, month: string, year: string } =
      element?.value !== null ? element?.value?.replaceAll('.', '')?.match(regExpr)?.groups : null;
    const valueParsed: string = datePartitioned
      ? `${datePartitioned?.day}.${datePartitioned?.month}.${datePartitioned?.year}`
      : null;
    if (!valueParsed) {
      setIsError(true);
      dateParsed.changeParsedDate(null);
      props.onChange(props.name, element?.value, false);
      return;
    }
    dateParsed.changeParsedDate(valueState);
    setIsExistValue(element?.value?.trim() > '');
    setValue(valueParsed);
    const dateParsedMilliseconds: number = dateParsed.getTimestamp();
    if (
      props.onChange &&
      dateParsed.isValid &&
      ((minDateMilliseconds && dateParsedMilliseconds >= minDateMilliseconds) || true) &&
      ((maxDateMilliseconds && dateParsedMilliseconds <= maxDateMilliseconds) || true)
    ) {
      props.onChange(props.name, valueParsed, true);
      setIsError(false);
      setIsMinDateError(false);
      setIsMaxDateError(false);
    } else {
      if (minDateMilliseconds && dateParsedMilliseconds < minDateMilliseconds) {
        setIsMinDateError(true);
      } else if (maxDateMilliseconds && dateParsedMilliseconds > maxDateMilliseconds) {
        setIsMaxDateError(true);
      }
      setIsError(true);
      props.onChange(props.name, valueParsed, false);
    }
  };

  const onInputBlur = () => {
    setIsFocus(false);
  };

  const onDatesContainerClose = (isSearchResult: boolean, evt?: React.ChangeEvent<HTMLElement>) => {
    const element = evt.target;
    if (element?.tagName !== INPUT_TAG) {
      if (!isSearchResult) {
        setIsFocus(false);
        setIsVisibleList(false);
      }
    }
  };

  const onMonthNameChange = (option: IOption): void => {
    dateParsed.changeParsedDate(value);
    dateParsed.changeMonth(option.index);
    setCurrentMonthNumber(dateParsed.getNumberMonth());
    setValue(dateParsed.formatToString());
  };

  const onYearNameChange = (option: IOption): void => {
    dateParsed.changeParsedDate(value);
    dateParsed.changeYear(option.value !== null ? parseInt(option.value, 10) : null);
    setCurrentYearNumber(dateParsed.getNumberYear());
    setValue(dateParsed.formatToString());
  };

  const onDayChange = (day: number): void => {
    dateParsed.changeParsedDate(value);
    dateParsed.changeDay(day);
    dateParsed.changeMonth(currentMonthNumber);
    dateParsed.changeYear(currentYearNumber);
    const valueParsed: string = dateParsed.formatToString();
    setCurrentDayNumber(dateParsed.getNumberCurrentDateOfMonth());
    setValue(valueParsed);
    props?.onChange(props.name, valueParsed, true);
    setIsVisibleList(false);
    setIsExistValue(true);
  };

  const onMonthRemove = (name: string, value: string) => {
    setCurrentMonthNumber(parseInt(value, 10));
  };

  const onYearRemove = (name: string, value: string) => {
    setCurrentYearNumber(parseInt(value));
  };

  const onGetPreviousMonth = () => {
    dateParsed.changeParsedDate(valueState);
    dateParsed.changeToThePreviousMonth();
    setActiveDayNumber(dateParsed.getNumberCurrentDateOfMonth());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setValueState(dateParsed.formatToString());
  };
  const onGetNextMonth = () => {
    dateParsed.changeParsedDate(valueState);
    dateParsed.changeMonth(dateParsed.getNumberMonth() + 1);
    setActiveDayNumber(dateParsed.getNumberCurrentDateOfMonth());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setValueState(dateParsed.formatToString());
  };
  const onGetPreviousYear = () => {
    dateParsed.changeParsedDate(valueState);
    dateParsed.changeToThePreviousYear();
    setActiveMonthNumber(dateParsed.getNumberMonth());
    setActiveDayNumber(dateParsed.getNumberCurrentDateOfMonth());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setValueState(dateParsed.formatToString());
  };
  const onGetNextYear = () => {
    dateParsed.changeParsedDate(valueState);
    dateParsed.changeToTheNextYear();
    setActiveMonthNumber(dateParsed.getNumberMonth());
    setActiveDayNumber(dateParsed.getNumberCurrentDateOfMonth());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setValueState(dateParsed.formatToString());
  };

  // <<< events handlers

  // >>> useEffects

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    document.addEventListener('mouseup', onMouseOutUp);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', onMouseOutUp);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    if (props.value !== null) {
      dateParsed.changeParsedDate(props.value);
      setCurrentDayNumber(dateParsed?.getNumberCurrentDateOfMonth());
      setCurrentMonthNumber(dateParsed?.getNumberMonth());
      setCurrentYearNumber(dateParsed?.getNumberYear());
      setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
      setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
      setIsExistValue(true);
    }
  }, [props.value]);

  useEffect(() => {
    dateParsed.changeParsedDate(valueState);
    if (dateParsed.isValid) {
      setCurrentMonthNumber(dateParsed.getNumberMonth());
      setCurrentYearNumber(dateParsed.getNumberYear());
      setCurrentDayNumber(null);
      setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
      setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [valueState, dateParsed.isValid]);

  useEffect(() => {
    dateParsed.changeParsedDate(value);
    if (dateParsed.checkIsNotExistErrorDate()) {
      setActiveDayNumber(dateParsed.getNumberCurrentDateOfMonth());
      setActiveMonthNumber(dateParsed.getNumberMonth());
      setActiveYearNumber(dateParsed.getNumberYear());
    }
    setValueState(value);
  }, [value]);

  // <<< useEffects


  const months: Array<string> = props.locale === Locales.Ru || !props?.locale ? monthsElementRu : monthsElementEn;
  const compareFn = (a, b) => a < b ? 1 : -1;
  const years: Array<string> = new Array(100)
    .fill((currentYearNumber ?? 0) - 50)
    .map((element: number, index: number) => (element + index)?.toString())
    .sort(compareFn);

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    const month: string = months[currentMonthNumber];

    const currentYearNumberString: string = currentYearNumber.toString();

    return (
      <DatepickerContainerStyled
        backgroundImage={props?.backgroundImage}
        width={props?.width}
        height={props?.height || DEFAULT_HEIGHT}
      >
        <DatepickerHeader>
          {props?.label && (
            <LabelContainer backgroundColor={theme.mainBackgroundColor} isExistValue={isExistValue || isFocus}>
              <Label
                htmlFor={props.id}
                fontSize={labelFontSize}
                isFocus={isFocus}
                isReadOnly={props.isReadOnly}
                fontWeight={props?.fontWeight}
                disabled={props.disabled}
                fontFamily={props?.fontFamily || theme?.fontFamily}
                error={isError}
              >
                {props?.label}
              </Label>
            </LabelContainer>
          )}
          <Input
            id={props.id}
            name={props.name}
            height={props?.height || DEFAULT_HEIGHT}
            width={props?.width}
            onChange={onInputChange}
            onRemove={onInputDelete}
            onInput={onInput}
            variant={props?.variant}
            value={value}
            textAlign={props?.textAlign || TEXT_ALIGN_LEFT}
            fontSize={fontSize}
            baseFontSize={props?.baseFontSize}
            fontFamily={props?.fontFamily || theme?.fontFamily}
            textMessage={textMessage}
            onFocus={onInputFocus}
            onClick={onInputFocus}
            onBlur={onInputBlur}
            disabled={props?.disabled}
            required={props?.required}
            fontWeight={props?.fontWeight || FONT_WEIGHT_REGULAR}
            isReadOnly={props?.isReadOnly}
            isNotUseDebounce={true}
            error={isError}
            inputRef={inputRef}
          />
        </DatepickerHeader>
        {!isError && isVisibleList && (
          <DatepickerDatesContainer backgroundColor={theme.mainBackgroundColor}  onMouseUp={onMouseOutUp} onKeyUp={onKeyUp} ref={dateRef}>
            <MonthsYearsRuleContainer>
              <DatepickerNavigateContainerStyled>
                <DatepickerButtonNavigate
                  id="get-previous-month"
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetPreviousMonth}
                >
                  {'<'}
                </DatepickerButtonNavigate>
                <Select
                  id="datepicker-month"
                  name="month"
                  label={monthTitle}
                  onChange={onMonthNameChange}
                  onRemove={onMonthRemove}
                  activeElement={month}
                  elements={months}
                  isNotClearable={true}
                  isCreatable={false}
                  baseFontSize={props?.baseFontSize}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  height={props?.height || DEFAULT_HEIGHT}
                />
                <DatepickerButtonNavigate
                  id="get-next-month"
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetNextMonth}
                >
                  {'>'}
                </DatepickerButtonNavigate>
              </DatepickerNavigateContainerStyled>
              <DatepickerNavigateContainerStyled>
                <DatepickerButtonNavigate
                  id="get-previous-year"
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetPreviousYear}
                >
                  {'<'}
                </DatepickerButtonNavigate>
                <Select
                  id="datepicker-year"
                  name="year"
                  label={yearTitle}
                  onChange={onYearNameChange}
                  onRemove={onYearRemove}
                  activeElement={currentYearNumberString}
                  elements={years}
                  isNotClearable={true}
                  isCreatable={false}
                  baseFontSize={props?.baseFontSize}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  height={props?.height || DEFAULT_HEIGHT}
                />
                <DatepickerButtonNavigate
                  id="get-next-year"
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetNextYear}
                >
                  {'>'}
                </DatepickerButtonNavigate>
              </DatepickerNavigateContainerStyled>
            </MonthsYearsRuleContainer>
            <DaysOfWeek
              primaryColor={theme.palette.primary.main}
              secondaryColor={theme.palette.secondary.main}
              fontSize={fontSize}
              fontFamily={props?.fontFamily || theme?.fontFamily}
              locale={props?.locale}
            />
            <Divider color={theme.palette.primary.main} />
            <DaysOfMonth
              countDaysIsMonth={countDaysIsMonth}
              activeMonthNumber={activeMonthNumber + 1}
              activeYearNumber={activeYearNumber}
              currentMonthNumber={currentMonthNumber + 1}
              currentYearNumber={currentYearNumber}
              activeDayNumber={activeDayNumber}
              color={theme.palette.primary.main}
              fontSize={fontSize}
              fontFamily={props?.fontFamily || theme?.fontFamily}
              backgroundColor={theme.mainBackgroundColor}
              numberDayInWeek={numberDayInWeek}
              onDayChange={onDayChange}
              minDate={props?.minDate}
              maxDate={props?.maxDate}
            />
          </DatepickerDatesContainer>
        )}
      </DatepickerContainerStyled>
    );
  };

  if (!Consumer) {
    console.error('The Datepicker component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

Datepicker.defaultProps = {
  minDate: null,
  maxDate: null,
};

export default React.memo(Datepicker);
