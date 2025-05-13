import CSS from 'csstype';

type PopupProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  width?: CSS.Property.Width | number;
  zIndex?: CSS.Property.ZIndex;
};

export default PopupProps;
