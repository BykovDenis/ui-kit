import IMask from 'imask';

const inputMask = (ref: any, maskOptions: any) => {
  if (ref?.current) {
    IMask(ref.current, maskOptions);
  }
};

export default inputMask;
