import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CalendarTodayIcon from '@material-ui/icons/Today';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormControl from '@material-ui/core/FormControl';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import moment from 'moment';
import 'moment/locale/ru';
import MomentUtils from '@date-io/moment';
import dateTime from '../../common/datetime';
import { withStyles } from '@material-ui/core/styles';

// moment.locale('ru');

const styles = () => ({
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
      /* TODO IE 11
			top: '-7px',
			'&:hover': {
				top: '-7px',
			},
			*/
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

function DatePickerCustom(props) {
  const localeMap = {
    en: 'en',
    ru: 'ru',
  };

  const datePickerChangeHandler = (name, newDate) => {
    const newDateValue = newDate ? dateTime.fromDateUtc(newDate) : '';
    props.datePickerChangeHandler(name, newDateValue);
  };

  const datePickerInputChangeHandler = (name, newDate) => {
    props.datePickerInputChangeHandler(name, dateTime.strFormatForDatePicker(newDate || '2019-01-01'));
  };

  const { name, label, value, classes, disabled } = props;
  return (
    <Fragment>
      <FormControl className={props.className} disabled={disabled}>
        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment} locale={localeMap[props.intl.locale]}>
          <DatePicker
            keyboard
            keyboardIcon={<CalendarTodayIcon />}
            className={classes.container}
            mask={value => (value ? [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/] : [])}
            format="YYYY.MM.DD"
            placeholder="YYYY.MM.DD"
            label={label}
            value={value}
            onChange={newDate => datePickerChangeHandler(name, newDate)}
            disableOpenOnEnter={disabled}
            disablePast={disabled}
            disableFuture={disabled}
            animateYearScrolling={false}
            leftArrowIcon={<ChevronLeftIcon />}
            rightArrowIcon={<ChevronRightIcon />}
            maxDate={props.maxDate}
            minDate={props.minDate}
            minDateMessage={props.minDateMessage}
            maxDateMessage={props.maxDateMessage}
            error={props.error}
            invalidDateMessage={props.invalidDateMessage}
            invalidLabel={''}
            onInputChange={e => datePickerInputChangeHandler(name, e.target.value)}
            InputProps={{
              readOnly: disabled,
              disabled: disabled,
            }}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
    </Fragment>
  );
}

DatePickerCustom.defaultProps = {
  datePickerChangeHandler: () => {},
  datePickerInputChangeHandler: () => {},
  disabled: false,
  error: false,
  invalidDateMessage: '  ',
  label: {},
  maxDate: '2099-12-31',
  minDate: '1900-01-01',
  minDateMessage: '',
  maxDateMessage: '',
};

DatePickerCustom.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  datePickerChangeHandler: PropTypes.func,
  datePickerInputChangeHandler: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  intl: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  invalidDateMessage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.string,
  maxDateMessage: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default withStyles(styles)(DatePickerCustom);
