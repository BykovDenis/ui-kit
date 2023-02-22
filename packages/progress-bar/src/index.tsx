import React, { useEffect, useState } from 'react';
import TProgressBar from '../types/tprogress-bar';
import ProgressBarContainerStyled from './progress-bar-container.styled';
import ProgressBarFillContainerStyled from './progress-bar-fill-container.styled';
import ProgressValueStyled from './progress-value.styled';
import ITheme from '../../styles/types/itheme';

const ProgressBar: React.FunctionComponent<TProgressBar> = (props: TProgressBar) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = theme?.palette?.primary?.main;
    return (
      <ProgressBarContainerStyled
        backgroundColor={props.backgroundColor}
        borderColor={props.borderColor}
        borderRadius={props.borderRadius}
        borderStyle={props.borderStyle}
        borderWidth={props.borderWidth}
        height={props.height}
        direction={props.direction}
        fontFamily={theme.fontFamily}
      >
        <ProgressBarFillContainerStyled
          progress={props.progress}
          fillColor={props?.fillColor || color}
          borderRadius={props.borderRadius}
          isAnimate={props.isAnimate}
        />
        <ProgressValueStyled
          fontSize={props.fontSize}
          fillColor={props.progress >= 51 ? props.backgroundColor : props?.fillColor || color}
          backgroundColor={props.progress <= 49 ? props.backgroundColor : props?.fillColor || color}
          direction={props.direction}
        >
          {props.progress}%
        </ProgressValueStyled>
      </ProgressBarContainerStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

ProgressBar.defaultProps = {
  fillColor: '#2f4699',
  backgroundColor: '#ffffff',
  borderColor: '#666666',
  height: '40px',
  borderRadius: '15px',
  borderStyle: 'solid',
  borderWidth: '1px',
  progress: 40,
  isAnimate: false,
  fontSize: '12px',
  direction: 'ltr',
};

export default ProgressBar;
