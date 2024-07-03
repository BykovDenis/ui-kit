import IMask from 'imask';

function getConfigDate() {
  return {
    d: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 9999,
      maxLength: 4,
    },
  };
}

export default getConfigDate;
