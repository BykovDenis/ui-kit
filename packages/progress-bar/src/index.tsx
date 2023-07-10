import React, { useEffect, useState } from 'react';
import TProgressBar from '../types/tprogress-bar';
import ProgressBarContainerStyled from './progress-bar-container.styled';
import ProgressBarFillContainerStyled from './progress-bar-fill-container.styled';
import ProgressValueStyled from './progress-value.styled';
import ITheme from '../../styles/types/itheme';
import MiddleEllipseContainer from './middle-ellipse-container';

const ProgressBar: React.FunctionComponent<TProgressBar> = (props: TProgressBar) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const isDisabled: boolean = props.disabled || false;
    const backgroundColor: string = props?.backgroundColor ?? theme.mainBackgroundColor;
    const fillColor: string = isDisabled
      ? theme.inactiveBackgroundColor
      : props?.fillColor ?? theme.palette.primary.main;
    const color: string = isDisabled
      ? theme.inactiveBackgroundColor
      : props?.fontColor ?? theme?.palette?.primary?.main;
    const height: number | string = props?.height ?? 40;
    const borderColor: string = isDisabled
      ? theme.inactiveBackgroundColor
      : props.borderColor ?? theme.palette.primary.main;
    const borderRadius: number | string = props.borderRadius || 15;
    const borderStyle: string = props.borderStyle || 'solid';
    const borderWidth: number | string = props.borderWidth || 1;
    const progress: number = props.progress || 0;
    const isAnimate: boolean = props.isAnimate || false;
    const fontSize: number | string = props.fontSize || theme.palette.baseFontColor;
    const direction: string = 'ltr';
    const fontFamily: string = props.fontFamily || theme.fontFamily;

    return (
      <ProgressBarContainerStyled
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderRadius={borderRadius}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        height={height}
        direction={direction}
        fontFamily={fontFamily}
      >
        <ProgressBarFillContainerStyled
          progress={progress}
          fillColor={fillColor}
          borderRadius={borderRadius}
          isAnimate={isAnimate}
        />
        <ProgressValueStyled
          fontSize={fontSize}
          fillColor={progress >= 51 ? props.backgroundColor : fillColor || color}
          backgroundColor={progress <= 49 ? props.backgroundColor : fillColor || color}
          direction={direction}
        >
          <MiddleEllipseContainer
            backgroundValue={progress > 50 && progress <= 53 ? backgroundColor : 'transparent'}
            color={progress > 53 ? props.backgroundColor : color}
          >
            {progress}%
          </MiddleEllipseContainer>
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
  direction: 'ltr',
};

export default ProgressBar;
