import React, { useEffect, useRef, useState } from "react";

import { DEFAULT_HEIGHT, FONT_WEIGHT_REGULAR, INPUT_TAG, KEY_ESCAPE, TEXT_ALIGN_LEFT } from "../../constants";
import Divider from "../../divider/src/index.styled";
import Locale from "../../enums/locale";
import searchDomChildElement from "../../helpers/search-dom-child-element";
import Input from "../../input/src";
import Label from "../../label/src";
import Select from "../../select/src";
import ITheme from "../../styles/types/itheme";
import monthsElementEn from "../dictionaries/months-en";
import monthsElementRu from "../dictionaries/months-ru";
import DateParser from "../helpers/date-parser";
import IDatepicker from "../types/idatepicker";
import IOption from "../types/ioption";
import DatepickerButtonNavigate from "./datepicker-button-navigate";
import DatepickerContainerStyled from "./datepicker-container.styled";
import DatepickerDatesContainer from "./datepicker-dates-container.styled";
import DatepickerHeader from "./datepicker-header.styled";
import DatepickerNavigateContainerStyled from "./datepicker-navigate-container.styled";
import DaysOfMonth from "./days-of-month";
import DaysOfWeek from "./days-of-week";
import LabelContainer from "./label-container.styled";
import MonthsYearsRuleContainer from "./months-years-rule-container.styled";
import sortArray from "../../helpers/sort-array";
import SortDirection from "../../enums/sort-direction";
import isNotEmptyString from "../../helpers/is-not-empty-string";
import parseInputDate from "../helpers/parse-input-date";
import DatepickerMask from "../enums/datepicker-mask";
import checkMinMaxDate from "../helpers/check-min-max-date";


const Datepicker: React.FunctionComponent<IDatepicker> = (props: IDatepicker) => {
  const dateRef = useRef();
  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [ mask, setMask ] = useState<DatepickerMask>(DatepickerMask[props?.mask as keyof DatepickerMask] ?? DatepickerMask.DDMMYYYY);
  let dateParsed = new DateParser(props.value, mask);

  // >>> initial values
  const [ months, setMonths ] = useState<Array<IOption>>(null);
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<string>(props.value);
  const [valueState, setValueState] = useState<string>();
  const [isVisibleList, setIsVisibleList] = useState(false);
  const [actualMonthNumber, setActualMonthNumber] = useState<number>(dateParsed.getNumberMonth());
  const [actualYearNumber, setActualYearNumber] = useState<number>(dateParsed?.getNumberYear());
  const [activeDayNumber, setActiveDayNumber] = useState<number>(dateParsed?.getNumberCurrentDateOfMonth());
  const [activeMonthNumber, setActiveMonthNumber] = useState<number>(dateParsed?.getNumberMonth());
  const [activeYearNumber, setActiveYearNumber] = useState<number>(dateParsed?.getNumberYear());
  const [numberDayInWeek, setNumberDayInWeek] = useState(dateParsed?.getNumberDayInWeek());
  const [countDaysIsMonth, setCountDaysIsMonth] = useState(dateParsed?.getCountDaysInMonth());
  const [isError, setIsError] = useState<boolean>(false);
  const [isMinDateError, setIsMinDateError] = useState<boolean>(false);
  const [isMaxDateError, setIsMaxDateError] = useState<boolean>(false);


  const [monthName, setMonthName] = useState<IOption | null>(null);

  const minDate: DateParser = isNotEmptyString(props.minDate) ? new DateParser(props.minDate, mask) : new DateParser(mask === DatepickerMask.YYYYMMDD ? '1971-01-01' : '01.01.1971', mask);
  const maxDate: DateParser = isNotEmptyString(props.maxDate) ? new DateParser(props.maxDate, mask) : null;

  // >> titles

  const monthTitle: string = props?.locale === Locale.Ru || !props?.locale ? 'Месяц' : 'Month';
  const yearTitle: string = props?.locale === Locale.Ru || !props?.locale ? 'Год' : 'Year';

  const textMessageError: string = props?.locale === Locale.Ru ? 'Дата не валидна' : 'Date is not valid';

  const minDateMessage: string =
    props?.locale === Locale.Ru ? 'Дата меньше допустимой' : 'Date is less than allowed';
  const maxDateMessage: string =
    props?.locale === Locale.Ru ? 'Дата больше допустимой' : 'Date is more then allowed';

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

  const onInputFocus = () => {
    setIsFocus(true);
    setIsVisibleList(true);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt.target;
    setIsVisibleList(false);
    const datePartitioned: string =
      isNotEmptyString(element?.value) ? element?.value?.replaceAll(/\D/gi, '') : null;
    const valueParsed: string = datePartitioned
      ? parseInputDate(datePartitioned, mask)
      : null;
    setValue(valueParsed);
  }

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
    dateParsed.changeMonth(parseInt(option.value, 10));
    setActualMonthNumber(parseInt(option.value, 10));
    setValue(dateParsed.formatToString());
    setMonthName(option);
  };

  const onYearNameChange = (option: IOption): void => {
    dateParsed.changeParsedDate(value);
    dateParsed.changeYear(option.value !== null ? parseInt(option.value, 10) : null);
    setActualYearNumber(dateParsed.getNumberYear());
    setValue(dateParsed.formatToString());
  };

  const onDayChange = (day: number): void => {
    dateParsed.changeParsedDate(value);
    dateParsed.changeDay(day);
    dateParsed.changeMonth(actualMonthNumber);
    dateParsed.changeYear(actualYearNumber);
    const valueParsed: string = dateParsed.formatToString();
    setValue(valueParsed);
    props?.onChange(props.name, valueParsed, true);
    setIsVisibleList(false);
    setIsExistValue(true);
  };

  const onMonthRemove = (name: string, value: string) => {
    setActualMonthNumber(parseInt(value, 10));
  };

  const onYearRemove = (name: string, value: string) => {
    setActualYearNumber(parseInt(value));
  };

  const onGetPreviousMonth = () => {
    dateParsed.changeParsedDate(valueState);
    const monthPrevious: number = dateParsed.getNumberMonth() - 1;
    dateParsed.changeToThePreviousMonth();
    setMonthName(months[monthPrevious]);
    setActualMonthNumber(monthPrevious);
    setValueState(dateParsed.formatToString());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setActualYearNumber(dateParsed.getNumberYear());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
  };
  const onGetNextMonth = () => {
    dateParsed.changeParsedDate(valueState);
    const monthNext: number = dateParsed.getNumberMonth() + 1;
    dateParsed.changeMonth(monthNext);
    setMonthName(months[monthNext]);
    setActualMonthNumber(monthNext);
    setValueState(dateParsed.formatToString());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setActualYearNumber(dateParsed.getNumberYear());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
  };
  const onGetPreviousYear = () => {
    dateParsed.changeParsedDate(valueState);
    const yearPrevious: number = dateParsed.getNumberYear() - 1;
    dateParsed.changeToThePreviousYear();
    setValueState(dateParsed.formatToString());
    setActualYearNumber(yearPrevious);
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setActualMonthNumber(dateParsed.getNumberMonth());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
  };
  const onGetNextYear = () => {
    dateParsed.changeParsedDate(valueState);
    const yearNext: number = dateParsed.getNumberYear() + 1;
    dateParsed.changeToTheNextYear();
    setValueState(dateParsed.formatToString());
    setActualYearNumber(yearNext);
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setActualMonthNumber(dateParsed.getNumberMonth());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
  };

  // <<< events handlers

  // >>> helpers

  function actualizingDate() {
    setActualMonthNumber(dateParsed.getNumberMonth());
    setActualYearNumber(dateParsed.getNumberYear());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
  }

  // <<< helpers

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
    setValue(props.value)
  }, [props.value]);

  useEffect(() => {
    if (value) {
      setIsExistValue(true);
      if (value && value.length !== 10) {
        setIsError(true);
      } else {
        dateParsed.changeParsedDate(value);
        if (dateParsed.checkIsNotExistErrorDate()) {
          setActiveDayNumber(dateParsed.getNumberCurrentDateOfMonth());
          setActiveMonthNumber(dateParsed.getNumberMonth());
          setActiveYearNumber(dateParsed.getNumberYear());
          setActualMonthNumber(dateParsed.getNumberMonth());
          setActualYearNumber(dateParsed.getNumberYear());
          setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
          setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
          if (months && months?.length > 0) {
            setMonthName(months[dateParsed.getNumberMonth()]);
          }
          const errors: {
            isError: boolean,
            isErrorMinDate: boolean,
            isErrorMaxDate: boolean,
          } = checkMinMaxDate(dateParsed, props.minDate ? minDate : null, props.maxDate ? maxDate : null);
          setIsError(errors.isError)
          setIsMinDateError(errors.isErrorMinDate);
          setIsMaxDateError(errors.isErrorMaxDate);
        } else {
          setIsError(true);
        }
      }
    }
  }, [value]);

  useEffect(() => {
    if (props.mask) {
      setMask(DatepickerMask[props.mask as keyof DatepickerMask]);
    }
  }, [props.mask])

  useEffect(() => {
    setMonths((props.locale === Locale.Ru || !props?.locale) ? monthsElementRu : monthsElementEn);
  }, [props.locale]);


  useEffect(() => {
    if (months && months?.length > 0) {
      setMonthName(months[actualMonthNumber]);
    }
  }, [months])

  // <<< useEffects



  const years: Array<string> =  sortArray(new Array(100)
    .fill((actualYearNumber ?? 0) - 50)
    .map((element: number, index: number) => (element + index)?.toString()), SortDirection.Desc);

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    const actualYearNumberString: string = actualYearNumber.toString();

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
            onRemove={onInputDelete}
            onChange={onInputChange}
            disabled={props?.disabled}
            required={props?.required}
            fontWeight={props?.fontWeight || FONT_WEIGHT_REGULAR}
            isReadOnly={props?.isReadOnly}
            isNotUseDebounce={true}
            error={isError}
            inputRef={inputRef}
          />
        </DatepickerHeader>
        {isVisibleList && (
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
                  activeElement={monthName}
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
                  activeElement={actualYearNumberString}
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
              actualMonthNumber={actualMonthNumber + 1}
              actualYearNumber={actualYearNumber}
              activeDayNumber={activeDayNumber}
              color={theme.palette.primary.main}
              fontSize={fontSize}
              fontFamily={props?.fontFamily || theme?.fontFamily}
              backgroundColor={theme.mainBackgroundColor}
              numberDayInWeek={numberDayInWeek}
              onDayChange={onDayChange}
              minDate={minDate}
              maxDate={maxDate}
              mask={mask}
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

export default  React.memo(Datepicker);
