import React from 'react';

import TGridContainer from '../types/tgrid-container';
import { useTheme } from '@dbykov-ui-kit/styles';
import styles from './grid-container.module.css';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import getMeasureValue from '../../helpers/get-measure-value';
import { px, compactStyles } from '../../helpers/inline-style';

const GridContainer: React.FunctionComponent<TGridContainer> = (props: TGridContainer) => {
  const theme = useTheme();

  const {
    children,
    className,
    // applied through the style object below
    color,
    backgroundColor,
    fontSize,
    fontWeight,
    position,
    width,
    maxWidth,
    height,
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
    justifyContent,
    alignItems,
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
    // grid-specific inputs consumed below
    columns,
    rows: _rows,
    gap,
    columnWidth,
    rowHeight,
    gridTemplateColumns,
    gridTemplateRows,
    gridColumnGap,
    gridRowGap,
    // the styled version never rendered these; is-prop-valid dropped them
    display: _display,
    flexDirection: _flexDirection,
    alignSelf: _alignSelf,
    fontFamily: _fontFamily,
    fontStyle: _fontStyle,
    flexGrow: _flexGrow,
    flexWrap: _flexWrap,
    maxHeight: _maxHeight,
    minWidth: _minWidth,
    opacity: _opacity,
    transform: _transform,
    overflowX: _overflowX,
    regExp: _regExp,
    error: _error,
    colorTheme: _colorTheme,
    ref: _ref,
    ...domProps
  } = props;

  // the styled version sized rows by the columns count too — kept as is
  const columnsCount: number = columns ?? 1;
  const repeatTrack = (size?: number | string): string =>
    new Array(columnsCount).fill(getMeasureValue(size, 'auto')).join(' ');

  const style: React.CSSProperties = compactStyles({
    color: color || theme?.palette?.baseFontColor,
    backgroundColor: backgroundColor || theme.mainBackgroundColor,
    fontSize: px(fontSize ?? theme.baseFontSize),
    gridTemplateColumns: isNotEmptyString(gridTemplateColumns) ? gridTemplateColumns : repeatTrack(columnWidth),
    gridTemplateRows: isNotEmptyString(gridTemplateRows) ? gridTemplateRows : repeatTrack(rowHeight),
    gap: px(gap),
    rowGap: px(gridRowGap),
    columnGap: px(gridColumnGap),
    position,
    width: px(width),
    maxWidth: px(maxWidth) ?? px(width),
    height: px(height),
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
    justifyContent,
    alignItems,
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
    fontWeight,
    ...(props as { style?: React.CSSProperties }).style,
  });

  return (
    <div
      {...domProps}
      className={className ? `${styles.gridContainer} ${className}` : styles.gridContainer}
      style={style}
    >
      {children}
    </div>
  );
};

export default GridContainer;
