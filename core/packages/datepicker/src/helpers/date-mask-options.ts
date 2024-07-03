import IMask from 'imask';

const dateMaskOptions = {
  mask: Date,
  pattern: 'DD{.}`MM{.}`YYYY',
  blocks: {
    DD: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
    },
    YYYY: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 9999,
      maxLength: 4,
    },
  },
  // define date -> str convertion
  format: (date: Date) => {
    let day: number | string = date.getDate();
    let month: number | string = date.getMonth() + 1;
    const year: number | string = date.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return [year, month, day].join('-');
  },

  // optional interval options
  min: new Date(2000, 0, 1), // defaults to `1900-01-01`
  max: new Date(9999, 0, 1), // defaults to `9999-01-01`

  // define str -> date convertion
  parse: (str: string) => {
    const yearMonthDay: Array<string> = str.split('-');
    return new Date(Number(yearMonthDay[0]), Number(yearMonthDay[1]) - 1, Number(yearMonthDay[2]));
  },
  autofix: true, // defaults to `false`

  // pattern options can be set as well
  lazy: false,

  // and other common options
  overwrite: true, // defaults to `false`
};

export default dateMaskOptions;
