import './index.css';

const PulseRingsMultiple: React.FunctionComponent = () => {
  const styles: any = {
    '--arc-palette-maxContrastColor': '#ECEDFEFF',
    '--arc-background-gradient-color1': '#17011EFF',
    '--arc-palette-focus': '#4D54FBCE',
    '--arc-palette-hover': '#5D64FB7A',
    '--arc-palette-minContrastColor': '#212AFBFF',
    '--arc-palette-foregroundSecondary': '#8489FBFF',
    '--arc-palette-backgroundExtra': '#050727F4',
    '--arc-palette-foregroundPrimary': '#ECEDFEFF',
    '--arc-palette-subtitle': '#797A82F9',
    '--arc-palette-cutoutColor': '#212AFBFF',
    '--arc-palette-foregroundTertiary': '#3139FBFF',
    '--arc-background-gradient-color0': '#01021EFF',
    '--arc-palette-title': '#DCDEFDF4',
    '--arc-palette-background': '#0A0D4EF6',
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={styles}>
      <path
        className="spinner_Uvk8"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="translate(12, 12) scale(0)"
      />
      <path
        className="spinner_Uvk8 spinner_ypeD"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="translate(12, 12) scale(0)"
      />
      <path
        className="spinner_Uvk8 spinner_y0Rj"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="translate(12, 12) scale(0)"
      />
    </svg>
  );
};

export default PulseRingsMultiple;
