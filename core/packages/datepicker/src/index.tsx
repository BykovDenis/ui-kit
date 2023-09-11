import React, { useEffect, useRef, useState } from 'react';

import { DEFAULT_HEIGHT, FONT_WEIGHT_REGULAR, INPUT_TAG, KEY_ESCAPE, TEXT_ALIGN_LEFT } from '../../constants';
import Divider from '../../divider/src/divider.styled';
import Locale from '../../enums/locale';
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
import sortArray from '../../helpers/sort-array';
import SortDirection from '../../enums/sort-direction';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import parseInputDate from '../helpers/parse-input-date';
import DatepickerMask from '../enums/datepicker-mask';
import checkMinMaxDate from '../helpers/check-min-max-date';
import onKeyUpEventHandler from '../../helpers/on-key-up-event-handler';
import IconButton from '../../icon-button/src';
import CalendarIcon from "../../icons-components/24x24/calendar-icon";
import FormControl from '../../form-control/src';
import CrossIcon from "../../icons-components/24x24/cross-icon";
import TpatritionDate from "../types/tpatrition-date";
import TPatritionDate from "../types/tpatrition-date";
const Datepicker: React.FunctionComponent<IDatepicker> = (props: IDatepicker) => {
  const dateRef = useRef();
  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [dateParsed, setDateParsed] = useState<DateParser | null>(null);
  const [dateParsedOriginal] = useState<DateParser>(new DateParser(props.value, props.mask as DatepickerMask));

  // >>> initial values
  const locale: string = props.locale ?? Locale.Ru;
  const [months, setMonths] = useState<Array<IOption>>(locale === Locale.Ru ? monthsElementRu : monthsElementEn);
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<string>(props.value);
  const [isVisibleList, setIsVisibleList] = useState(false);
  const [actualMonthNumber, setActualMonthNumber] = useState<number | null>(null);
  const [actualYearNumber, setActualYearNumber] = useState<number | null>(null);
  const [activeDayNumber, setActiveDayNumber] = useState<number | null>(null);
  const [activeMonthNumber, setActiveMonthNumber] = useState<number | null>(null);
  const [activeYearNumber, setActiveYearNumber] = useState<number | null>(null);
  const [numberDayInWeek, setNumberDayInWeek] = useState<number | null>(null);
  const [countDaysIsMonth, setCountDaysIsMonth] = useState<number | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isMinDateError, setIsMinDateError] = useState<boolean>(false);
  const [isMaxDateError, setIsMaxDateError] = useState<boolean>(false);
  const [isErrorMessageDisplay] = useState(
    props.isErrorMessageDisplay !== undefined ? props.isErrorMessageDisplay : 'true'
  );
  const [monthName, setMonthName] = useState<IOption | null>(null);

  const minDate: DateParser = isNotEmptyString(props.minDate)
    ? new DateParser(props.minDate, props.mask as DatepickerMask)
    : new DateParser(
        (props.mask as DatepickerMask) === DatepickerMask.YYYYMMDD ? '1971-01-01' : '01.01.1971',
        props.mask as DatepickerMask
      );
  const maxDate: DateParser = isNotEmptyString(props.maxDate)
    ? new DateParser(props.maxDate, props.mask as DatepickerMask)
    : null;

  useEffect(() => {
    const dateParsed: DateParser = new DateParser(props.value, props.mask as DatepickerMask);
    setDateParsed(dateParsed);
    setActualMonthNumber(dateParsed.getNumberMonth());
    setActualYearNumber(dateParsed?.getNumberYear());
    setActiveDayNumber(dateParsed?.getNumberCurrentDateOfMonth());
    setActiveMonthNumber(dateParsed?.getNumberMonth());
    setActiveYearNumber(dateParsed?.getNumberYear());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
  }, []);

  // >> titles

  const monthTitle: string = props?.locale === Locale.Ru || !props?.locale ? 'Месяц' : 'Month';
  const yearTitle: string = props?.locale === Locale.Ru || !props?.locale ? 'Год' : 'Year';

  const textMessageError: string = props?.locale === Locale.Ru ? 'Дата не валидна' : 'Date is not valid';

  const minDateMessage: string = props?.locale === Locale.Ru ? 'Дата меньше допустимой' : 'Date is less than allowed';
  const maxDateMessage: string = props?.locale === Locale.Ru ? 'Дата больше допустимой' : 'Date is more then allowed';

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
    const cb = () => {
      setIsFocus(false);
      setIsVisibleList(false);
    };

    onKeyUpEventHandler(evt, cb);
  };

  const onInputFocus = () => {
    setIsFocus(true);
    setIsVisibleList(true);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt.target;
    setIsVisibleList(false);
    const datePartitioned: string = isNotEmptyString(element?.value) ? element?.value?.replaceAll(/\D/gi, '') : null;
    const valueParsed: string = datePartitioned ? parseInputDate(datePartitioned, props.mask as DatepickerMask) : null;
    if (valueParsed !== value) {
      setValue(valueParsed);
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
    dateParsed.changeMonth(parseInt(option.value, 10) - 1);
    setActualMonthNumber(parseInt(option.value, 10));
    const valueParsed: string = dateParsed.formatToString();
    if (valueParsed !== value) {
      setValue(valueParsed);
    }
    setMonthName(option);
  };

  const onYearNameChange = (option: IOption): void => {
    dateParsed.changeParsedDate(value);
    dateParsed.changeYear(option.value !== null ? parseInt(option.value, 10) : null);
    setActualYearNumber(dateParsed.getNumberYear());
    const valueParsed: string = dateParsed.formatToString();
    if (valueParsed !== value) {
      setValue(valueParsed);
    }
  };

  const onDayChange = (day: number): void => {
    dateParsed.changeParsedDate(value);
    dateParsed.changeDay(day);
    dateParsed.changeMonth(actualMonthNumber - 1);
    dateParsed.changeYear(actualYearNumber);
    const valueParsed: string = dateParsed.formatToString();
    if (valueParsed !== value) {
      setValue(valueParsed);
    }
    // if (props?.onChange) {
    //   props.onChange(props.name, valueParsed, true);
    // }
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
    dateParsed.changeToThePreviousMonth();
    setActualMonthNumber(dateParsed.getNumberMonth());
  };
  const onGetNextMonth = () => {
    dateParsed.changeToTheNextMonth();
    setActualMonthNumber(dateParsed.getNumberMonth());
  };
  const onGetPreviousYear = () => {
    dateParsed.changeToThePreviousYear();
    setActualYearNumber(dateParsed.getNumberYear());
  };
  const onGetNextYear = () => {
    dateParsed.changeToTheNextYear();
    setActualYearNumber(dateParsed.getNumberYear());
  };

  const onBtnCurrentDateSetClick = () => {
    dateParsed.setToday();
    const valueParsed: string = dateParsed.formatToString();
    if (valueParsed !== value) {
      setValue(valueParsed);
    }
  }

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
    if (props.value !== value) {
      setValue(props.value);
    }
  }, [props.value]);

  useEffect(() => {
    if (value) {
      setIsExistValue(true);
      if (value && value.length !== 10) {
        setIsError(true);
      } else if (dateParsed) {
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
            isError: boolean;
            isErrorMinDate: boolean;
            isErrorMaxDate: boolean;
          } = checkMinMaxDate(dateParsed, props.minDate ? minDate : null, props.maxDate ? maxDate : null);
          setIsError(errors.isError);
          setIsMinDateError(errors.isErrorMinDate);
          setIsMaxDateError(errors.isErrorMaxDate);
          if (props?.onChange && props.value !== value) {
            props.onChange(props.name, value, !errors.isError);
          }
        } else {
          setIsError(true);
        }
      }
    }
  }, [value]);

  useEffect(() => {
    setMonths(locale === Locale.Ru ? monthsElementRu : monthsElementEn);
  }, [locale]);

  useEffect(() => {
    if (months && months?.length > 0) {
      setMonthName(months[actualMonthNumber]);
    }
  }, [months]);

  useEffect(() => {
    if (actualMonthNumber !== null && actualMonthNumber !== undefined) {
      setMonthName(months[dateParsed.getNumberMonth()]);
      setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
      setActualYearNumber(dateParsed.getNumberYear());
      setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
      setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
    }
  }, [actualMonthNumber]);

  useEffect(() => {
    if (actualYearNumber !== null && actualYearNumber !== undefined) {
      setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
      setActualMonthNumber(dateParsed.getNumberMonth());
      setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
      setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
    }
  }, [actualYearNumber]);

  // <<< useEffects

  const years: Array<string> = sortArray(
    new Array(100)
      .fill((actualYearNumber ?? 0) - 50)
      .map((element: number, index: number) => (element + index)?.toString()),
    SortDirection.Desc
  );

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    const actualYearNumberString: string = actualYearNumber?.toString();
    const todayPartitioned: TPatritionDate = dateParsed?.getTodayPartitionedDate();

    return (
      <DatepickerContainerStyled
        backgroundImage={props?.backgroundImage}
        width={props?.width}
        minWidth={props?.minWidth}
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
            textMessage={isErrorMessageDisplay && textMessage}
            onFocus={onInputFocus}
            onClick={onInputFocus}
            onBlur={onInputBlur}
            onChange={onInputChange}
            disabled={props?.disabled}
            required={props?.required}
            fontWeight={props?.fontWeight || FONT_WEIGHT_REGULAR}
            isReadOnly={props?.isReadOnly}
            isNotUseDebounce={true}
            error={isError}
            inputRef={inputRef}
            isNotClearable={true}
          />
          <FormControl position="absolute" top="50%" right={0} width="initial" transform="translateY(-50%)">{
            isNotEmptyString(value) ?
            <IconButton variant="text" onClick={onInputDelete}>
              <CrossIcon color={theme.palette.baseFontColor} />
            </IconButton> :
            <IconButton variant="text" onClick={onBtnCurrentDateSetClick}>
              <CalendarIcon color={theme.palette.baseFontColor} />
            </IconButton>
          }
          </FormControl>
        </DatepickerHeader>
        {isVisibleList && (
          <DatepickerDatesContainer
            backgroundColor={theme.mainBackgroundColor}
            onMouseUp={onMouseOutUp}
            onKeyUp={onKeyUp}
            ref={dateRef}
          >
            <MonthsYearsRuleContainer>
              <DatepickerNavigateContainerStyled>
                <DatepickerButtonNavigate
                  id={`get-previous-month-${props.id}`}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetPreviousMonth}
                >
                  {'<'}
                </DatepickerButtonNavigate>
                <Select
                  id={`datepicker-month-${props.id}`}
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
                  isScrollingToSelected={true}
                />
                <DatepickerButtonNavigate
                  id={`get-next-month-${props.id}`}
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
                  id={`get-previous-year-${props.id}`}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetPreviousYear}
                >
                  {'<'}
                </DatepickerButtonNavigate>
                <Select
                  id={`datepicker-year-${props.id}`}
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
                  isScrollingToSelected={true}
                />
                <DatepickerButtonNavigate
                  id={`get-next-year-${props.id}`}
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
              activeMonthNumber={activeMonthNumber}
              activeYearNumber={activeYearNumber}
              actualMonthNumber={actualMonthNumber}
              actualYearNumber={actualYearNumber}
              activeDayNumber={activeDayNumber}
              todayPartitioned={todayPartitioned}
              color={theme.palette.baseFontColor}
              primaryColor={theme.palette.primary.main}
              fontSize={fontSize}
              fontFamily={props?.fontFamily || theme?.fontFamily}
              backgroundColor={theme.mainBackgroundColor}
              hoverBackgroundColor={theme.palette.primary.lighter}
              activeBackgroundColor={theme.palette.primary.light}
              numberDayInWeek={numberDayInWeek}
              onDayChange={onDayChange}
              minDate={minDate}
              maxDate={maxDate}
              mask={props.mask as DatepickerMask}
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

export default React.memo(Datepicker);
