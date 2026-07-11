import CSS from 'csstype';

type PopupProps = React.AriaAttributes & {
  children?: React.ReactNode;
  isOpen: boolean;
  /** called on Escape while the popup is open */
  onClose?: () => void;
  width?: CSS.Property.Width | number;
  zIndex?: CSS.Property.ZIndex;
};

export default PopupProps;
