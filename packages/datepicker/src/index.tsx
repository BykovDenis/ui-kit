import React, { useEffect, useRef, useState } from 'react';

import { DEFAULT_HEIGHT, FONT_WEIGHT_REGULAR, INPUT_TAG, KEY_ESCAPE, TEXT_ALIGN_LEFT } from '../../constants';
import Divider from '../../divider/src/index.styled';
import Locales from '../../enums/locales';
import searchDomChildElement from '../../helpers/search-dom-child-element';
import Input from '../../input/src';
import Label from '../../label/src';
import Select from '../../select/src';
import IOption from '../../select/types/ioption';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import monthsElementEn from '../dictionaries/months-en';
import monthsElementRu from '../dictionaries/months-ru';
import DateParser from '../helpers/date-parser';
import IDatepicker from '../types/idatepicker';
import DatepickerButtonNavigate from './datepicker-button-navigate/index';
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

  const [isExistValue, setIsExistValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(props.value);
  const [isVisibleList, setIsVisibleList] = useState(false);
  const [currentDayNumber, setCurrentDayNumber] = useState(dateParsed?.getNumberCurrentDateOfMonth());
  const [currentMonthNumber, setCurrentMonthNumber] = useState(dateParsed?.getNumberMonth()?.toString());
  const [currentYearNumber, setCurrentYearNumber] = useState(dateParsed?.getNumberYear());
  const [numberDayInWeek, setNumberDayInWeek] = useState(dateParsed?.getNumberDayInWeek());
  const [countDaysIsMonth, setCountDaysIsMonth] = useState(dateParsed?.getCountDaysInMonth());
  const [isError, setIsError] = useState(false);

  const onInputDelete = (name: string) => {
    props?.onRemove(name, null);
    setIsExistValue(false);
    setIsVisibleList(false);
    setValue('');
  };

  const onDatesContainerCloseByKey = () => {
    setIsFocus(false);
    setIsVisibleList(false);
  };

  const onMouseOutUp = (evt: any) => {
    const element: any = evt.target;
    if (dateRef) {
      const listElement: any = dateRef?.current;
      if (listElement) {
        onDatesContainerClose(searchDomChildElement(listElement, element), evt);
      }
    }
  };

  const onKeyUp = (evt: any) => {
    if (evt.keyCode === 27 || evt.code === KEY_ESCAPE || evt.key === KEY_ESCAPE) {
      onDatesContainerCloseByKey();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', onMouseOutUp);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('mouseup', onMouseOutUp);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    dateParsed = new DateParser(props.value);
    setCurrentDayNumber(dateParsed?.getNumberCurrentDateOfMonth());
    setCurrentMonthNumber(dateParsed?.getNumberMonth()?.toString());
    setCurrentYearNumber(dateParsed?.getNumberYear());
    setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
    setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
    if (props.value !== null) {
      setIsExistValue(true);
    }
  }, [props.value]);

  useEffect(() => {
    if (value !== props.value) {
      dateParsed = new DateParser(value);
      setCurrentDayNumber(null);
      setNumberDayInWeek(dateParsed?.getNumberDayInWeek());
      setCountDaysIsMonth(dateParsed?.getCountDaysInMonth());
    }
  }, [currentMonthNumber]);

  useEffect(() => {
    if (value !== props.value) {
      dateParsed = new DateParser(value);
      setCurrentDayNumber(null);
      setNumberDayInWeek(dateParsed.getNumberDayInWeek());
      setCountDaysIsMonth(dateParsed.getCountDaysInMonth());
    }
  }, [currentYearNumber]);

  const onInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    const valueParsed: string = element.value.trim();
    // setValue(valueParsed);
    setIsVisibleList(false);
  };

  const onInputFocus = () => {
    setIsFocus(true);
    setIsVisibleList(true);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element: any = evt.target;
    setIsExistValue(element?.value?.trim() > '');
    const regExpr: RegExp = new RegExp('(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})');
    const datePartitioned: { day: string, month: string, year: string } =
      element?.value !== null ? element?.value?.replaceAll('.', '')?.match(regExpr)?.groups : null;
    const valueParsed: string = `${datePartitioned.day}.${datePartitioned.month}.${datePartitioned.year}`;
    setValue(valueParsed);
    dateParsed = new DateParser(valueParsed);
    if (props.onChange && dateParsed.checkIsValidateDate()) {
      props.onChange(props.name, valueParsed, true);
      setIsError(false);
    } else {
      setIsError(true);
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

  const months: Array<string> = props.locale === Locales.Ru || !props?.locale ? monthsElementRu : monthsElementEn;
  const years: Array<string> = new Array(100)
    .fill(currentYearNumber - 50)
    .map((element: number, index: number) => (element + index)?.toString());

  const componentThemed: any = (theme: ITheme) => {
    const fontSize: number = props?.fontSize ?? theme?.baseFontSize;
    const labelFontSize: number = isExistValue || isFocus ? fontSize - 2 : fontSize;

    const onMonthNameChange = (option: IOption): void => {
      dateParsed = new DateParser(value);
      dateParsed.changeMonth(option.index);
      setCurrentMonthNumber(dateParsed.getNumberMonth().toString());
      setValue(dateParsed.formatToString());
    };

    const onYearNameChange = (option: IOption): void => {
      dateParsed = new DateParser(value);
      dateParsed.changeYear(option.value !== null ? parseInt(option.value, 10) : null);
      setCurrentYearNumber(dateParsed.getNumberYear());
      setValue(dateParsed.formatToString());
    };

    const onDayChange = (day: number): void => {
      dateParsed = new DateParser(value);
      dateParsed.changeDay(day);
      const valueParsed: string = dateParsed.formatToString();
      setCurrentDayNumber(dateParsed.getNumberCurrentDateOfMonth());
      setValue(valueParsed);
      props?.onChange(props.name, valueParsed, true);
      setIsVisibleList(false);
      setIsExistValue(true);
    };

    const onMonthRemove = (name: string, value: string) => {
      setCurrentMonthNumber(value);
    };

    const onYearRemove = (name: string, value: string) => {
      setCurrentYearNumber(parseInt(value, 10));
    };

    const onGetPreviousMonth = () => {
      dateParsed = new DateParser(value);
      dateParsed.changeToThePreviousMonth();
      setValue(dateParsed.formatToString());
    };
    const onGetNextMonth = () => {
      dateParsed = new DateParser(value);
      dateParsed.changeMonth(dateParsed.getNumberMonth() + 1);
      setValue(dateParsed.formatToString());
    };
    const onGetPreviousYear = () => {
      dateParsed = new DateParser(value);
      dateParsed.changeToThePreviousYear();
      setValue(dateParsed.formatToString());
    };
    const onGetNextYear = () => {
      dateParsed = new DateParser(value);
      dateParsed.changeToTheNextYear();
      setValue(dateParsed.formatToString());
    };

    const month: string = months[parseInt(currentMonthNumber, 10)];

    const monthTitle: string = props?.locale === Locales.Ru || !props?.locale ? 'Месяц' : 'Month';
    const yearTitle: string = props?.locale === Locales.Ru || !props?.locale ? 'Год' : 'Year';

    const textMessageError: string = props?.locale === Locales.Ru ? 'Дата не валидна' : 'Date is not valid';
    const textMessage = isError ? textMessageError : props?.textMessage;

    const currentYearNumberString: string = currentYearNumber.toString();

    return (
      <DatepickerContainerStyled
        backgroundImage={props?.backgroundImage}
        width={props?.width}
        height={props?.height || DEFAULT_HEIGHT}
      >
        <DatepickerHeader>
          {props?.label && (
            <LabelContainer isExistValue={isExistValue || isFocus}>
              <Label
                htmlFor={props.id}
                fontSize={labelFontSize}
                isFocus={isFocus}
                isReadOnly={props.isReadOnly}
                fontWeight={props?.fontWeight}
                isDisabled={props.disabled}
                fontFamily={props?.fontFamily || theme?.fontFamily}
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
          />
        </DatepickerHeader>
        {isVisibleList && (
          <DatepickerDatesContainer onMouseUp={onMouseOutUp} onKeyUp={onDatesContainerCloseByKey} ref={dateRef}>
            <MonthsYearsRuleContainer>
              <DatepickerNavigateContainerStyled>
                {/*<DatepickerButtonNavigate*/}
                {/*  id="get-previous-month"*/}
                {/*  fontSize={fontSize}*/}
                {/*  fontFamily={props?.fontFamily || theme?.fontFamily}*/}
                {/*  color={theme.palette.primary.main}*/}
                {/*  onClick={onGetPreviousMonth}*/}
                {/*>*/}
                {/*  {'<'}*/}
                {/*</DatepickerButtonNavigate>*/}
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
                {/*<DatepickerButtonNavigate*/}
                {/*  id="get-next-month"*/}
                {/*  fontSize={fontSize}*/}
                {/*  fontFamily={props?.fontFamily || theme?.fontFamily}*/}
                {/*  color={theme.palette.primary.main}*/}
                {/*  onClick={onGetNextMonth}*/}
                {/*>*/}
                {/*  {'>'}*/}
                {/*</DatepickerButtonNavigate>*/}
              </DatepickerNavigateContainerStyled>
              <DatepickerNavigateContainerStyled>
                {/*<DatepickerButtonNavigate*/}
                {/*  id="get-previous-year"*/}
                {/*  fontSize={fontSize}*/}
                {/*  fontFamily={props?.fontFamily || theme?.fontFamily}*/}
                {/*  color={theme.palette.primary.main}*/}
                {/*  onClick={onGetPreviousYear}*/}
                {/*>*/}
                {/*  {'<'}*/}
                {/*</DatepickerButtonNavigate>*/}
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
                {/*<DatepickerButtonNavigate*/}
                {/*  id="get-next-year"*/}
                {/*  fontSize={fontSize}*/}
                {/*  fontFamily={props?.fontFamily || theme?.fontFamily}*/}
                {/*  color={theme.palette.primary.main}*/}
                {/*  onClick={onGetNextYear}*/}
                {/*>*/}
                {/*  {'>'}*/}
                {/*</DatepickerButtonNavigate>*/}
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
              currentMonthNumber={+currentMonthNumber + 1}
              currentYearNumber={currentYearNumber}
              currentDayNumber={currentDayNumber}
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

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Datepicker);
