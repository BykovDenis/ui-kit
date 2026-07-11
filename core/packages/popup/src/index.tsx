import styles from './styles.module.css';

import { useEffect, useRef, useState } from 'react';

import type ITheme from '../../styles/types/itheme';
import type PopupProps from '../types/popup-props';
import getMeasureValue from '../../helpers/get-measure-value';
import { Portal } from '../../portal';
import { useTheme } from '@dbykov-ui-kit/styles';

const Popup: React.FunctionComponent<PopupProps> = (props: PopupProps) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const theme = useTheme();

  const refPortal = useRef<HTMLDivElement | null>(null);
  const refPopup = useRef<HTMLDivElement | null>(null);
  const refPreviouslyFocused = useRef<HTMLElement | null>(null);

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

  const isPopupVisible: boolean = isInitialized && props.isOpen;

  // focus moves into the dialog while it is open and returns to the opener
  // when it closes; Escape asks the owner to close via onClose
  useEffect(() => {
    if (!isPopupVisible) {
      return undefined;
    }
    refPreviouslyFocused.current = (document.activeElement as HTMLElement) ?? null;
    refPopup.current?.focus?.();
    const onKeyUp = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape' && props.onClose) {
        props.onClose();
      }
    };
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keyup', onKeyUp);
      refPreviouslyFocused.current?.focus?.();
    };
  }, [isPopupVisible]);

  const componentThemed: any = (theme: ITheme) => {
    // plain JSX value, not a nested component: a component type created
    // inside render is new on every pass, so React unmounted and remounted
    // the popup content on each parent state update
    const popupPortal = (
      <Portal>
        <div
          className={styles.popup}
          role="dialog"
          aria-label={props['aria-label']}
          aria-labelledby={props['aria-labelledby']}
          ref={refPopup}
          tabIndex={-1}
          style={{
            top,
            left,
            width: props?.width ? getMeasureValue(props?.width) : width,
            backgroundColor: theme.mainBackgroundColor,
            zIndex: props?.zIndex || 2147483647,
            outline: 'none',
          }}
        >
          {props.children}
        </div>
      </Portal>
    );

    return (
      <div ref={refPortal} className={styles['popup-container']}>
        {isPopupVisible ? popupPortal : null}
      </div>
    );
  };


  return componentThemed(theme);
};

export default Popup;
