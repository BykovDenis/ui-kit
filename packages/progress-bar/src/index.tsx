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
    const backgroundColor: string = props?.backgroundColor ?? theme.mainBackgroundColor;
    const fillColor: string = props?.fillColor ?? theme.palette.primary.main;
    const color: string = props?.fontColor ?? theme?.palette?.primary?.main;
    const height: number | string = props?.height ?? 40;

    return (
      <ProgressBarContainerStyled
        backgroundColor={backgroundColor}
        borderColor={props.borderColor}
        borderRadius={props.borderRadius}
        borderStyle={props.borderStyle}
        borderWidth={props.borderWidth}
        height={height}
        direction={props.direction}
        fontFamily={theme.fontFamily}
      >
        <ProgressBarFillContainerStyled
          progress={props.progress}
          fillColor={fillColor}
          borderRadius={props.borderRadius}
          isAnimate={props.isAnimate}
        />
        <ProgressValueStyled
          fontSize={props.fontSize}
          fillColor={props.progress >= 51 ? props.backgroundColor : fillColor || color}
          backgroundColor={props.progress <= 49 ? props.backgroundColor : fillColor || color}
          direction={props.direction}
        >
          <MiddleEllipseContainer
            backgroundValue={props.progress > 50 && props.progress <= 53 ? backgroundColor : 'transparent'}
            color={props.progress > 53 ? props.backgroundColor : color}
          >
            {props.progress}%
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
  // fillColor: '#2f4699',
  // backgroundColor: '#ffffff',
  borderColor: '#666666',
  // height: '40px',
  borderRadius: '15px',
  borderStyle: 'solid',
  borderWidth: '1px',
  progress: 40,
  isAnimate: false,
  fontSize: '12px',
  direction: 'ltr',
};

export default ProgressBar;
