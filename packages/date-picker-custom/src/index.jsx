import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CalendarTodayIcon from '@material-ui/icons/Today';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormControl from '@material-ui/core/FormControl';
import { DatePicker } from 'material-ui-pickers';
import moment from 'moment';
import 'moment/locale/ru';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';

moment.locale('en');

const fromDateUtc = date => (date ? moment.parseZone(date).utc(true) : '');

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
            // mask={value => (value ? [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/] : [])}
            value={value}
            onChange={newDate => datePickerChangeHandler(name, fromDateUtc(newDate))}
            disableOpenOnEnter
            animateYearScrolling={false}
            leftArrowIcon={<ChevronLeftIcon />}
            rightArrowIcon={<ChevronRightIcon />}
            maxDate={props.maxDate}
            minDate={props.minDate}
            minDateMessage={props.minDateMessage}
            maxDateMessage={props.maxDateMessage}
            error={props.error}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
    </Fragment>
  );
}

DatePickerCustom.defaultProps = {
  datePickerChangeHandler: () => {},
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
