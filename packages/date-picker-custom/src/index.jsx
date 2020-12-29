import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import MuiFormControl from '@material-ui/core/FormControl';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MuiIconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import enLocale from 'date-fns/locale/en-US';
import ruLocale from 'date-fns/locale/ru';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import IconClear from '@material-ui/icons/Clear';

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
    flexDirection: 'row !important',
  },
})(MuiFormControl);

const styles = () => ({
  datePickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    '& input': {
      width: '145px',
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
    },
    '& p': {
      position: 'absolute',
      top: '100%',
    },
  },
});

const fromDateUtc = date => (date ? moment.parseZone(date).utc(true) : '');

function DatePickerCustom(props) {
  const localeMap = {
    en: enLocale,
    ru: ruLocale,
  };

  let datePickerRef = useRef();
  const { label, value, classes, disabled } = props;

  const datePickerChangeHandler = newDate => {
    const newDateValue = newDate ? fromDateUtc(newDate).format('DD.MM.YYYY') : null;
    props.datePickerChangeHandler(props.name, newDateValue);
  };

  const datePickerCleanHandler = () => {
    setTimeout(() => {
      datePickerRef.current.querySelector('input').value = null;
    }, 0);
    datePickerChangeHandler(null);
  };

  const containerStyles = cn({
    [classes.datePickerContainer]: true,
    [props.className]: true,
  });

  return (
    <Fragment> 
      <FormControl className={containerStyles} disabled={disabled}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[props.locale]}>
          <KeyboardDatePicker
            clearable={props.clearable}
            animateYearScrolling={true}
            allowKeyboardControl={true}
            error={props.error}
            autoOk={true}
            ampm={false}
            className={classes.container}
            disableopenonenter={disabled.toString()}
            disablePast={disabled}
            disableFuture={disabled}
            format="dd.MM.yyyy"
            placeholder={props.locale === 'en' ? 'DD.MM.YYYY' : 'ДД.ММ.ГГГГ'}
            invalidDateMessage={props.invalidDateMessage}
            InputProps={{
              readOnly: disabled,
              disabled: disabled,
              ref: datePickerRef,
            }}
            label={label}
            value={value}
            maxDate={props.maxDate}
            minDate={props.minDate}
            minDateMessage={props.minDateMessage}
            maxDateMessage={props.maxDateMessage}
            onChange={newDate => datePickerChangeHandler(newDate)}
            variant="inline"
          />
        </MuiPickersUtilsProvider>
        <IconButton color="primary" onClick={datePickerCleanHandler} disabled={!value}>
          <IconClear />
        </IconButton>
      </FormControl>
    </Fragment>
  );
}

DatePickerCustom.defaultProps = {
  datePickerChangeHandler: () => {},
  datePickerInputChangeHandler: () => {},
  disabled: false,
  error: false,
  maxDate: '2099-12-31',
  minDate: '1900-01-01',
  minDateMessage: '',
  maxDateMessage: '',
  locale: 'ru',
  clearable: 'true',
};

DatePickerCustom.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  clearable: PropTypes.string,
  datePickerChangeHandler: PropTypes.func,
  datePickerInputChangeHandler: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  intl: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  invalidDateMessage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.string,
  maxDateMessage: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default withStyles(styles)(DatePickerCustom);
