import styles from './styles.module.css';

import { useEffect, useRef, useState } from 'react';

import type ITheme from '../../styles/types/itheme';
import type PopupProps from '../types/popup-props';
import { createPortal } from 'react-dom';
import getMeasureValue from '../../helpers/get-measure-value';

const Popup: React.FunctionComponent<PopupProps> = (props: PopupProps) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  const refPortal = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  let top: number = 0;
  let left: number = 0;
  let width: number = 0;

  if (refPortal?.current) {
    const clientRectPosition: any = refPortal.current.getBoundingClientRect();
    top = clientRectPosition.bottom + window.scrollY;
    left = clientRectPosition.left;
    width = clientRectPosition.width;
  } else {
    const clientRectPosition: any = document.querySelector(`#${props.id}`)?.getBoundingClientRect();
    if (clientRectPosition) {
      top = clientRectPosition.bottom + window.scrollY;
      left = clientRectPosition.left;
      width = clientRectPosition.width;
    }
  }

  const PopupPortal = () =>
    createPortal(
      <div className={styles.popup} style={{ top, left, width: props?.width ? getMeasureValue(props?.width) : width }}>
        {props.children}
      </div>,
      document.body
    );

  const componentThemed: any = (theme: ITheme) => {
    return (
      <div id={props.id} ref={refPortal} className={styles['popup-container']}>
        {props.isOpen ? <PopupPortal /> : null}
      </div>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Popup;
