import React from 'react';
import TProgressBar from '../types/tprogress-bar';
import ProgressBarContainerStyled from './progress-bar-container.styled';
import ProgressBarFillContainerStyled from './progress-bar-fill-container.styled';
import ProgressValueStyled from './progress-value.styled';
import ITheme from '../../styles/types/itheme';
import MiddleEllipseContainer from './middle-ellipse-container';
import { useTheme } from '@dbykov-ui-kit/styles';

const ProgressBar: React.FunctionComponent<TProgressBar> = (props: TProgressBar) => {
  const theme = useTheme();

  const componentThemed: any = (theme: ITheme) => {
    const isDisabled: boolean = props.disabled || false;
    const backgroundColor: string = props?.backgroundColor ?? theme.mainBackgroundColor;
    const fillColor: string = isDisabled
      ? theme.inactiveBackgroundColor
      : props?.fillColor ?? theme.palette.primary.main;
    const color: string = isDisabled ? theme.inactiveBackgroundColor : props?.fontColor ?? fillColor;
    const height: number | string = props?.height ?? 40;
    const borderColor: string = isDisabled
      ? theme.inactiveBackgroundColor
      : props.borderColor ?? theme.palette.primary.main;
    const borderRadius: number | string = props.borderRadius || 15;
    const borderStyle: string = props.borderStyle || 'solid';
    const borderWidth: number | string = props.borderWidth || 1;
    const progress: number = props.progress || 0;
    const isAnimate: boolean = props.isAnimate || false;
    const fontSize: number | string = props.fontSize || theme.baseFontSize;
    const direction: 'ltr' | 'rtl' = 'ltr';
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
          backgroundColor={progress <= 45 ? props.backgroundColor : fillColor || color}
          direction={direction}
        >
          <MiddleEllipseContainer
            backgroundValue={progress > 45 && progress <= 51 ? backgroundColor : 'transparent'}
            color={progress > 51 ? backgroundColor : color}
          >
            {progress}%
          </MiddleEllipseContainer>
        </ProgressValueStyled>
      </ProgressBarContainerStyled>
    );
  };


  return componentThemed(theme);
};

ProgressBar.defaultProps = {
  direction: 'ltr',
};

export default ProgressBar;
