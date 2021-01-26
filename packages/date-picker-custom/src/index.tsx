import * as React, { ChangeEvent, Fragment, useState, useRef } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiIconButton from '@material-ui/core/IconButton';
import { createStyles, withStyles } from '@material-ui/core/styles';
import IconClear from '@material-ui/icons/Clear';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import cn from 'classnames';
import enLocale from 'date-fns/locale/en-US';
import ruLocale from 'date-fns/locale/ru';
import moment from 'moment';


const IconButton = withStyles(() => ({
  root: {
    margin: 0,
    padding: '0 !important',
    width: '34px',
    height: '34px',
  },
}))(MuiIconButton);

const FormControl = withStyles({
  root: {
    flexDirection: 'row',
  },
})(MuiFormControl);

const fromDateUtc = (date: string) => (date ? moment.parseZone(date).utc(true) : '');

interface Props {
  className?: string;
  classes?: any;
  clearable?: boolean;
  datePickerChangeHandler?: (name: string, newDateValue: any, isValid: boolean) => void;
  onAccept?: (name: string, newDateValue: any, isValid: boolean) => void;
  error?: boolean;
  disabled?: boolean;
  locale?: string;
  label: React.ReactElement | string;
  invalidDateMessage?: React.ReactElement | string;
  maxDate?: string;
  minDate?: string;
  minDateMessage?: string;
  maxDateMessage?: string;
  name: string;
  value: string;
  placeholder?: boolean;
  fontSize?: number;
  useTime?: boolean;
  id?: string;
  intl?: any;
  invalidLabel?: string;
  autoOk?: boolean;
}

const DatePickerCustom: React.FunctionComponent<Props> = (props: Props) => {
  const [ isValid, setIsValid ] = useState(true);
  const [ dateIsEmpty, setDateIsEmpty ] = useState(props.value === null);

  const datePickerRef = useRef();
  const { label, value, classes, disabled, placeholder } = props;

  const datePickerRefClean = () => {
    setDateIsEmpty(true);
    if (datePickerRef?.current !== undefined) {
      // @ts-ignore-line
      const inputElement = datePickerRef.current.querySelector('input');
      if (inputElement) {
        inputElement.value = null;
        setIsValid(true);
      }
    }
  }

  const datePickerChangeHandler = (newDate: string | null, cb: any) => {
    const format = props.useTime ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY';
    const dateFromUtc: any = newDate && fromDateUtc(newDate);
    let newDateValue: string = dateFromUtc ? dateFromUtc.format(format) : null;
    let isDateValid: boolean = null;
    setDateIsEmpty(false);
    if (newDateValue === '' || newDateValue === null) {
      setIsValid(true);
      setDateIsEmpty(true);
    }
    if (dateFromUtc && "isValid" in dateFromUtc) {
      isDateValid = dateFromUtc.isValid();
      setIsValid(isDateValid);
      if (isDateValid) {
        const minDate = moment.parseZone(props.minDate, 'YYYY-MM-DD').utc(true);
        const maxDate = moment.parseZone(props.maxDate, 'YYYY-MM-DD').utc(true);
        if (props.minDate && minDate > dateFromUtc) {
          newDateValue = minDate.format(format);
        } else if (props.maxDate && maxDate < dateFromUtc) {
          newDateValue = maxDate.format(format);
        }
      }
    }
    if (cb) {
      if (isDateValid === true) {
        setIsValid(true);
        cb(props.name, newDateValue, isDateValid);
      } else if (isDateValid === false) {
        setIsValid(false);
        cb(props.name, '', isDateValid);
      } else {
        cb(props.name, null, isValid);
      }
    }
  };

  const datePickerCleanHandler = () => {
    setTimeout(() => datePickerRefClean, 0);
    datePickerChangeHandler(null, props.datePickerChangeHandler);
  };

  const containerStyles = cn({
    [classes.datePickerContainer]: true,
    [props.className]: true,
    [classes.fontSize14]: props.fontSize === 14,
  });

  const datePickerFormat = props.useTime ? 'dd.MM.yyyy HH:mm' : 'dd.MM.yyyy';
  const placeholderEnglish = props.useTime ? 'DD.MM.YYYY HH:MM' : 'DD.MM.YYYY';
  const placeholderRussian = props.useTime ? 'ДД.ММ.ГГГГ ЧЧ:ММ' : 'ДД.ММ.ГГГГ';

  const onDatePickerChange = (newDate: any) => {
    datePickerChangeHandler(newDate, props.datePickerChangeHandler);
  };

  const onDatePickerChangeApply = (newDate: any) => {
    let date: string = newDate;
    if (props.useTime) {
      date = `${moment(newDate).format('YYYY-MM-DD')} 00:00`;
    }
    datePickerChangeHandler(date, props.onAccept);
  };

  enum localeMap {
    en = enLocale as any,
    ru = ruLocale as any
  };

  const { locale }: { locale: string } = props.intl || { locale: 'ru'} ;
  return (
      <Fragment>
        <FormControl className={containerStyles} disabled={disabled} id={props.id}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale as any]}>
            <KeyboardDatePicker
                clearable={props.clearable}
                animateYearScrolling={true}
                allowKeyboardControl={true}
                error={!isValid}
                autoOk={props.autoOk}
                className={classes.container}
                disablePast={disabled}
                disableFuture={disabled}
                format={datePickerFormat}
                placeholder={placeholder ? (props.locale === 'en' ? placeholderEnglish : placeholderRussian) : null}
                invalidDateMessage={!isValid && props.invalidDateMessage}
                InputProps={{
                  readOnly: disabled,
                  disabled,
                  ref: datePickerRef,
                }}
                label={label}
                value={value}
                maxDate={props.maxDate}
                minDate={props.minDate}
                minDateMessage={props.minDate > value && props.minDateMessage}
                maxDateMessage={props.maxDate < value && props.maxDateMessage}
                invalidLabel={props.invalidLabel}
                onChange={onDatePickerChange}
                onAccept={onDatePickerChangeApply}
                variant="inline"
                readOnly={disabled}
            />
          </MuiPickersUtilsProvider>
          {props.clearable && !dateIsEmpty && <IconButton color="primary" onClick={datePickerCleanHandler} disabled={disabled}>
            <IconClear />
          </IconButton>}
        </FormControl>
      </Fragment>
  );
};

const styles = () =>
    createStyles({
      datePickerContainer: {
        display: 'inline-flex',
        flexDirection: 'row !important' as 'row',
        alignItems: 'flex-end',
      },
      container: {
        '& input': {
          width: '100%',
          fontSize: '16px',
        },
        '& label+div': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& button': {
          height: 'auto',
          width: 'auto',
          position: 'relative',
        },
        '& label': {
          paddingBottom: '5px',
          fontWeight: 900,
        },
        '& p': {
          position: 'absolute',
          top: '100%',
        },
      },
      fontSize14: {
        '& input': {
          fontSize: '14px',
        },
      },
    });

DatePickerCustom.defaultProps = {
  datePickerChangeHandler: () => {},
  disabled: false,
  error: false,
  maxDate: '2099-12-31',
  minDate: '1900-01-01',
  minDateMessage: '',
  maxDateMessage: '',
  locale: 'ru',
  clearable: true,
  placeholder: true,
  fontSize: 16,
  useTime: false,
  autoOk: true,
};

export default withStyles(styles)(DatePickerCustom);
