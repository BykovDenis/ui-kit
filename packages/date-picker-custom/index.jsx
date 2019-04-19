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
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

moment.locale('en');

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
    },
    '& label': {
      color: red['A700'],
      fontWeight: 900,
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

  const datePickerInputChangeHandler = (name, newDate) => {
    if (!newDate) {
      props.datePickerInputChangeHandler(name, '');
    }
  };

  const { datePickerChangeHandler, name, label, value, classes, disabled } = props;

  return (
    <Fragment>
      <FormControl className={props.className} disabled={disabled}>
        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment} locale={localeMap[props.intl.locale]}>
          <DatePicker
            keyboard
            keyboardIcon={<CalendarTodayIcon />}
            className={classes.container}
            label={label}
            format="YYYY.MM.DD"
            placeholder="2018.10.10"
            value={value || null}
            onChange={newDate => datePickerChangeHandler(name, dateTime.fromDateUtc(newDate))}
            disableOpenOnEnter
            animateYearScrolling={false}
            leftArrowIcon={<ChevronLeftIcon />}
            rightArrowIcon={<ChevronRightIcon />}
            maxDate={props.maxDate}
            minDate={props.minDate}
            minDateMessage={props.minDateMessage}
            maxDateMessage={props.maxDateMessage}
            error={props.error}
            onInputChange={e => datePickerInputChangeHandler(name, e.target.value)}
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
  label: '',
  maxDate: '2099-12-31',
  minDate: '1900-01-01',
  minDateMessage: '',
  maxDateMessage: '',
};

DatePickerCustom.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  error: PropTypes.bool,
  intl: PropTypes.object,
  datePickerChangeHandler: PropTypes.func,
  datePickerInputChangeHandler: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.string,
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.string,
  maxDateMessage: PropTypes.string,
  name: PropTypes.string,
};

export default withStyles(styles)(DatePickerCustom);
