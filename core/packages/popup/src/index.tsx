import styles from './styles.module.css';

import { useEffect, useRef, useState } from 'react';

import type ITheme from '../../styles/types/itheme';
import type PopupProps from '../types/popup-props';
import getMeasureValue from '../../helpers/get-measure-value';
import { Portal } from '../../portal';

const Popup: React.FunctionComponent<PopupProps> = (props: PopupProps) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  const refPortal = useRef<HTMLDivElement | null>(null);

  const initialCoordinated = () => {
    if (typeof window === 'undefined' || !refPortal.current) {
      return;
    }
    const clientRectPosition: any = refPortal.current.getBoundingClientRect();
    if (clientRectPosition) {
      setTop(clientRectPosition.bottom + window.scrollY);
      setLeft(clientRectPosition.left);
      setWidth(clientRectPosition.width);
    }
  };

  useEffect(() => {
    initialCoordinated();
  }, []);

  useEffect(() => {
    if (props.isOpen) {
      setIsInitialized(true);
      initialCoordinated();
    }
  }, [props.isOpen]);

  const componentThemed: any = (theme: ITheme) => {
    const PopupPortal = () => (
      <Portal>
        <div
          className={styles.popup}
          style={{
            top,
            left,
            width: props?.width ? getMeasureValue(props?.width) : width,
            backgroundColor: theme.mainBackgroundColor,
            zIndex: props?.zIndex || 2147483647,
          }}
        >
          {props.children}
        </div>
      </Portal>
    );

    return (
      <div ref={refPortal} className={styles['popup-container']}>
        {isInitialized && props.isOpen ? <PopupPortal /> : null}
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
