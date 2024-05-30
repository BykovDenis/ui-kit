import React, { useEffect, useRef, useState } from 'react';

import {
  FONT_WEIGHT_REGULAR,
  INPUT_TAG,
  TAG_NAME_PATH,
  TAG_NAME_SVG,
  TEXT_ALIGN_LEFT,
  DEFAULT_HEIGHT,
} from '../../constants';
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
import CalendarIcon from '../../icons-components/24x24/calendar-icon';
import FormControl from '../../form-control/src';
import CrossIcon from '../../icons-components/24x24/cross-icon';
import TPatritionDate from '../types/tpatrition-date';
import Button from '../../button/src';
import ChevronBtnLeftIcon from './icons/chevron-btn-left-icon';
import ChevronBtnRightIcon from './icons/chevron-btn-right-icon';
import ButtonDelete from '../../customs-styled-components/button-delete.styled';
import dayjs, { Dayjs } from 'dayjs';
const Datepicker: React.FunctionComponent<IDatepicker> = (props: IDatepicker) => {
  const dateRef = useRef();
  const inputRef: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [dateParsed, setDateParsed] = useState<DateParser | null>(null);
  const [locale, setLocale] = useState<string>(props.locale ?? Locale.Ru);

  // >>> initial values
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
  const [isError, setIsError] = useState<boolean>(props?.error !== undefined ? props.error : false);
  const [isMinDateError, setIsMinDateError] = useState<boolean>(false);
  const [isMaxDateError, setIsMaxDateError] = useState<boolean>(false);
  const [isErrorMessageDisplayed] = useState(
    props.isErrorMessageDisplayed !== undefined ? props.isErrorMessageDisplayed : 'true'
  );
  const [monthName, setMonthName] = useState<IOption | null>(null);
  const [mask] = useState<DatepickerMask>((props.mask as DatepickerMask) || DatepickerMask.DDMMYYYY);

  const minDate: DateParser = isNotEmptyString(props.minDate)
    ? new DateParser(props.minDate, mask)
    : new DateParser((mask as DatepickerMask) === DatepickerMask.YYYYMMDD ? '1971-01-01' : '01.01.1971', mask);
  const maxDate: DateParser = isNotEmptyString(props.maxDate) ? new DateParser(props.maxDate, mask) : null;

  const today: Dayjs = dayjs();
  const todayParsed: string = today.format(DatepickerMask.YYYYMMDD);

  const isValidByMinDate: boolean = props.minDate
    ? todayParsed >= minDate.getDate().format(DatepickerMask.YYYYMMDD)
    : true;
  const isValidByMaxDate: boolean = props.maxDate
    ? todayParsed <= maxDate.getDate().format(DatepickerMask.YYYYMMDD)
    : true;

  const syncDataParaemters = (date: DateParser) => {
    setDateParsed(date);
    setActualMonthNumber(date.getNumberMonth());
    setActualYearNumber(date?.getNumberYear());
    setActiveDayNumber(date?.getNumberCurrentDateOfMonth());
    setActiveMonthNumber(date?.getNumberMonth());
    setActiveYearNumber(date?.getNumberYear());
    setNumberDayInWeek(date?.getNumberDayInWeek());
    setCountDaysIsMonth(date?.getCountDaysInMonth());
  };

  // <<< initial values

  // >> titles

  const textMessageError: string = props?.locale === Locale.Ru ? 'Дата не валидна' : 'Date is not valid';

  const minDateMessage: string = props?.locale === Locale.Ru ? 'Дата меньше допустимой' : 'Date is less than allowed';
  const maxDateMessage: string = props?.locale === Locale.Ru ? 'Дата больше допустимой' : 'Date is more then allowed';

  const isOnInputChangeUsed: boolean = props.isOnInputChangeUsed !== undefined ? props.isOnInputChangeUsed : false;

  const errorMessage = isError
    ? isMinDateError
      ? minDateMessage
      : isMaxDateError
      ? maxDateMessage
      : textMessageError
    : props?.textMessage;

  const setTodayTitle: string = locale === Locale.Ru ? 'Установить сегодня' : 'Set today';

  // << titles

  // >>> events handlers

  const onInputDelete = () => {
    if (props?.onRemove) {
      props?.onRemove(props.name, null);
    }
    setIsExistValue(false);
    setIsVisibleList(false);
    setValue('');
  };

  const onMouseOutUp = (evt: any) => {
    const element: any = evt.target;
    const dataId: string = element?.dataset?.id;
    if (dateRef) {
      const listElement: any = dateRef?.current;
      if (listElement) {
        onDatesContainerClose(searchDomChildElement(listElement, element), evt);
      }
      if (dataId && element.id !== props.id) {
        setIsVisibleList(false);
      }
    }
    if (inputRef) {
      const input = inputRef?.current;
      if (element !== input) {
        if (input?.blur) {
          input.blur();
        }
        if (element?.dataset?.btnSetToday) {
          onBtnCurrentDateSetClick();
          setIsVisibleList(false);
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
  };

  const onInputClick = () => {
    setIsVisibleList(!isVisibleList);
  };

  const onCalendarPanelToggle = (evt: any) => {
    evt.stopPropagation();
    setIsVisibleList((isVisibleList: boolean) => !isVisibleList);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt.target;
    setIsVisibleList(false);
    const datePartitioned: string = isNotEmptyString(element?.value) ? element?.value?.replaceAll(/\D/gi, '') : null;
    const valueParsed: string = datePartitioned ? parseInputDate(datePartitioned, mask as DatepickerMask) : null;
    if (valueParsed !== value) {
      setValue(valueParsed);
    }
  };

  const onInputBlur = () => {
    setIsFocus(false);
    const validationDate: {
      isValid: boolean;
      isErrorMinDate: boolean;
      isErrorMaxDate: boolean;
    } = checkMinMaxDate(dateParsed, props.minDate ? minDate : null, props.maxDate ? maxDate : null);
    if (props?.onBlur && props?.value !== value) {
      props.onBlur(props.name, value, validationDate.isValid && !isError);
    }
  };

  const onDatesContainerClose = (isSearchResult: boolean, evt?: React.ChangeEvent<HTMLElement>) => {
    const element = evt.target;
    if (
      element?.tagName !== INPUT_TAG &&
      element?.dataset?.name !== 'datepicker-calendar-btn-close' &&
      element?.dataset?.daysOnMonth !== 'true' &&
      element?.tagName !== TAG_NAME_SVG &&
      element?.tagName !== TAG_NAME_PATH
    ) {
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
    const dateParsed: DateParser = new DateParser(
      mask === DatepickerMask.YYYYMMDD
        ? `${actualYearNumber}-${actualMonthNumber + 1}-${day}`
        : `${day}.${actualMonthNumber + 1}.${actualYearNumber}`,
      mask
    );

    const valueParsed: string = dateParsed.formatToString();
    if (valueParsed !== value) {
      setValue(valueParsed);
    }
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
    dateParsed?.setToday();
    const valueParsed: string = dateParsed?.formatToString();
    if (valueParsed) {
      syncDataParaemters(dateParsed);
      setValue(valueParsed);
    }
  };

  // <<< events handlers

  // >>> useEffects

  useEffect(() => {
    const dateParsed: DateParser = new DateParser(props.value, mask as DatepickerMask);
    syncDataParaemters(dateParsed);
    document.addEventListener('mouseup', onMouseOutUp);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', onMouseOutUp);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!isError) {
      setIsError(props?.error !== undefined ? props.error : false);
    }
  }, [props.error]);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    setLocale(props.locale);
  }, [props.locale]);

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
        if (isOnInputChangeUsed) {
          dateParsed.changeParsedDate(value);
          if (props?.onChange && props.value !== value) {
            props.onChange(props.name, value, true);
          }
        } else if (props?.onChange) {
          props.onChange(props.name, value, false);
        }
      } else if (dateParsed) {
        dateParsed.changeParsedDate(value);
        const validationDate: {
          isValid: boolean;
          isErrorMinDate: boolean;
          isErrorMaxDate: boolean;
        } = checkMinMaxDate(dateParsed, props.minDate ? minDate : null, props.maxDate ? maxDate : null);
        setIsError(!validationDate.isValid);
        setIsMinDateError(validationDate.isErrorMinDate);
        setIsMaxDateError(validationDate.isErrorMaxDate);
        if (validationDate.isValid) {
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
          if (!isFocus && props?.onBlur && props.value !== value) {
            props.onBlur(props.name, value, validationDate.isValid);
          }
        } else {
          setIsError(true);
        }
        if (props?.onChange && props.value !== value) {
          props.onChange(props.name, value, validationDate.isValid);
        }
      }
    } else {
      setIsExistValue(false);
      setIsMinDateError(false);
      setIsMaxDateError(false);
      if (props?.onChange) {
        props.onChange(props.name, value, props.error !== undefined ? props.error : true);
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

    const hoverColor: string = props.disabled
      ? theme.inactiveColor
      : props?.error
      ? theme?.palette?.secondary?.main
      : theme?.palette.baseFontColor;

    const focusColor: string = props?.error ? theme?.palette?.secondary?.main : theme.palette.primary.main;

    const isSetTodayButtonDisabled: boolean = !isValidByMinDate || !isValidByMaxDate;

    return (
      <DatepickerContainerStyled
        backgroundImage={props?.backgroundImage}
        width={props?.width}
        minWidth={props?.minWidth}
        height={props?.height}
      >
        <DatepickerHeader>
          {props?.label && (
            <LabelContainer
              height={props?.height}
              backgroundColor={theme.mainBackgroundColor}
              isExistValue={isExistValue || isFocus}
            >
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
            data-id={props.id}
            height={props?.height}
            width={props?.width}
            variant={props?.variant}
            value={value}
            textAlign={props?.textAlign || TEXT_ALIGN_LEFT}
            fontSize={fontSize}
            baseFontSize={props?.baseFontSize}
            fontFamily={props?.fontFamily || theme?.fontFamily}
            textMessage={props.textMessage || (isErrorMessageDisplayed && errorMessage)}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            onClick={onInputClick}
            onChange={onInputChange}
            disabled={props?.disabled}
            required={props?.required}
            fontWeight={props?.fontWeight || FONT_WEIGHT_REGULAR}
            isReadOnly={props?.isReadOnly}
            error={isError}
            inputRef={inputRef}
            isNotRunDebounce={true}
            isNotClearable={true}
          />
          <FormControl
            height={20}
            width={20}
            position="absolute"
            right={3}
            top={props?.height ? Math.round(props?.height / 2) - 10 : '50%'}
            transform={props?.height ? 'none' : 'translateY(-50%)'}
          >
            {isNotEmptyString(value) ? (
              !props.isNotClearable && (
                <ButtonDelete
                  data-test="btn-delete-value"
                  onClick={onInputDelete}
                  className="delete-button"
                  hoverColor={hoverColor}
                  focusColor={focusColor}
                  disabled={props?.disabled}
                  type="button"
                >
                  <CrossIcon color={theme.palette.baseFontColor} />
                </ButtonDelete>
              )
            ) : (
              <ButtonDelete
                data-name="datepicker-calendar-btn-close"
                className="delete-button"
                hoverColor={hoverColor}
                focusColor={focusColor}
                disabled={props?.disabled}
                variant="text"
                type="button"
                onClick={
                  theme.components?.Datepicker?.isIconCanBeTodaySelected || props?.isIconCanBeTodaySelected
                    ? onBtnCurrentDateSetClick
                    : onCalendarPanelToggle
                }
              >
                <CalendarIcon color={theme.palette.baseFontColor} data-name="datepicker-calendar-btn-close" />
              </ButtonDelete>
            )}
          </FormControl>
        </DatepickerHeader>
        {isVisibleList && (dateParsed.checkIsValidDate() || !value) && (
          <DatepickerDatesContainer
            outlineColor={theme.mainOutlinedColor}
            backgroundColor={theme.mainBackgroundColor}
            onMouseUp={onMouseOutUp}
            onKeyUp={onKeyUp}
            ref={dateRef}
            datesContainerAlign={props.datesContainerAlign || 'right'}
            top={props?.height || DEFAULT_HEIGHT}
          >
            <FormControl justifyContent="center" margin="0 0 3px 0">
              <Button
                height={15}
                variant="text"
                textDecoration="underline"
                data-btn-set-today="1"
                disabled={isSetTodayButtonDisabled}
                data-test-name="setToday"
              >
                {setTodayTitle}
              </Button>
            </FormControl>
            <MonthsYearsRuleContainer>
              <DatepickerNavigateContainerStyled>
                <DatepickerButtonNavigate
                  id={`get-previous-month-${props.id}`}
                  fontSize={18}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetPreviousMonth}
                >
                  <ChevronBtnLeftIcon color={theme.palette.baseFontColor} />
                </DatepickerButtonNavigate>
                <Select
                  id={`datepicker-month-${props.id}`}
                  name="month"
                  onChange={onMonthNameChange}
                  onRemove={onMonthRemove}
                  activeElement={monthName}
                  elements={months}
                  isNotClearable={true}
                  isCreatable={false}
                  isNotVisibleIndicator={true}
                  baseFontSize={props?.baseFontSize}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  height={30}
                  width={95}
                  isScrollingToSelected={true}
                  margin="0 2px"
                />
                <DatepickerButtonNavigate
                  id={`get-next-month-${props.id}`}
                  fontSize={18}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetNextMonth}
                >
                  <ChevronBtnRightIcon color={theme.palette.baseFontColor} />
                </DatepickerButtonNavigate>
              </DatepickerNavigateContainerStyled>
              <DatepickerNavigateContainerStyled>
                <DatepickerButtonNavigate
                  id={`get-previous-year-${props.id}`}
                  fontSize={18}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetPreviousYear}
                >
                  <ChevronBtnLeftIcon color={theme.palette.baseFontColor} />
                </DatepickerButtonNavigate>
                <Select
                  id={`datepicker-year-${props.id}`}
                  name="year"
                  onChange={onYearNameChange}
                  onRemove={onYearRemove}
                  activeElement={actualYearNumberString}
                  elements={years}
                  isNotClearable={true}
                  isCreatable={false}
                  isNotVisibleIndicator={true}
                  baseFontSize={props?.baseFontSize}
                  fontSize={fontSize}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  height={30}
                  width={60}
                  margin="0 2px"
                  isScrollingToSelected={true}
                />
                <DatepickerButtonNavigate
                  id={`get-next-year-${props.id}`}
                  fontSize={18}
                  fontFamily={props?.fontFamily || theme?.fontFamily}
                  color={theme.palette.primary.main}
                  onClick={onGetNextYear}
                >
                  <ChevronBtnRightIcon color={theme.palette.baseFontColor} />
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
              mask={mask as DatepickerMask}
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

export default Datepicker;
