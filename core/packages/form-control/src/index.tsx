import React from 'react';

import IFormControl from '../types/iform-control';
import { useTheme } from '@dbykov-ui-kit/styles';
import styles from './form-control.module.css';
import { px, compactStyles } from '../../helpers/inline-style';

const FormControl: React.FunctionComponent<IFormControl> = (props: IFormControl) => {
  const theme = useTheme();

  const {
    children,
    className,
    // applied through the style object below
    color,
    backgroundColor,
    fontSize,
    fontWeight,
    fontStyle,
    position,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    flexGrow,
    flexWrap,
    gap,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    whiteSpace,
    textAlign,
    outline,
    borderRadius,
    right,
    left,
    top,
    bottom,
    zIndex,
    transform,
    lineHeight,
    wordBreak,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    border,
    borderBottom,
    overflow,
    overflowY,
    // the styled version never rendered these; is-prop-valid dropped them
    display: _display,
    fontFamily: _fontFamily,
    opacity: _opacity,
    overflowX: _overflowX,
    regExp: _regExp,
    error: _error,
    colorTheme: _colorTheme,
    ref: _ref,
    ...domProps
  } = props;

  const style: React.CSSProperties = compactStyles({
    fontSize: px(fontSize ?? theme.baseFontSize),
    color,
    backgroundColor,
    fontWeight,
    fontStyle,
    position,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    flexGrow,
    flexWrap,
    gap: px(gap),
    width: px(width),
    maxWidth: px(maxWidth),
    minWidth: px(minWidth),
    height: px(height),
    maxHeight: px(maxHeight),
    minHeight: px(minHeight),
    whiteSpace,
    textAlign,
    outline,
    borderRadius: px(borderRadius),
    right: px(right),
    left: px(left),
    top: px(top),
    bottom: px(bottom),
    zIndex,
    transform,
    lineHeight,
    wordBreak: wordBreak as React.CSSProperties['wordBreak'],
    margin,
    marginTop: px(marginTop),
    marginRight: px(marginRight),
    marginBottom: px(marginBottom),
    marginLeft: px(marginLeft),
    padding,
    paddingTop: px(paddingTop),
    paddingRight: px(paddingRight),
    paddingBottom: px(paddingBottom),
    paddingLeft: px(paddingLeft),
    border,
    borderBottom,
    overflow,
    overflowY,
    ...(props as { style?: React.CSSProperties }).style,
  });

  return (
    <div
      {...domProps}
      className={className ? `${styles.formControl} ${className}` : styles.formControl}
      style={style}
    >
      {children}
    </div>
  );
};

export default FormControl;
