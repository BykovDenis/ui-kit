import { styled } from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';
import isNotEmptyNumber from '../../helpers/is-not-empty-number';
import TGridContainerStyled from '../types/tgrid-container-styled';

const GridContainerStyled = styled.div<TGridContainerStyled>`
  ${(props: TGridContainerStyled) => `
    position: ${props?.position ? props?.position : 'relative'};
  display: grid;
  box-sizing: border-box;
  color: ${props?.color || 'inherit'};
  width: ${getMeasureValue(props.width, '100%')};
  max-width: ${props?.maxWidth ? getMeasureValue(props.maxWidth) : getMeasureValue(props.width)};
  white-space: ${props.whiteSpace || 'normal'};
  margin: ${props.margin || 'initial'};
  padding: ${props.padding || 'initial'};
  height: ${getMeasureValue(props.height)};
  background-color: ${props.backgroundColor || 'transparent'};
  text-align: ${props.textAlign || 'initial'};
  min-height: ${getMeasureValue(props.minHeight)};
  overflow-y: ${props.overflowY || 'initial'};
  outline: ${props?.outline || 'none'};
  border-radius: ${getMeasureValue(props?.borderRadius, '0')};
  right: ${getMeasureValue(props.right, 'auto')};
  left: ${getMeasureValue(props.left, 'auto')};
  top: ${getMeasureValue(props.top, 'auto')};
  bottom: ${getMeasureValue(props.bottom, 'auto')};
  font-size: ${getMeasureValue(props.fontSize, 'inherit')};
  font-weight: ${props.fontWeight || 400};
  grid-template-columns: ${props.gridTemplateColumns};
  grid-template-rows:  ${props.gridTemplateRows};
  ${isNotEmptyNumber(props?.zIndex) ? `z-index: ${props.zIndex};` : ''}
  ${props.gridGap ? `gap: ${getMeasureValue(props.gridGap)};` : ''}
  ${props.gridColumnGap ? `grid-column-gap: ${getMeasureValue(props.gridColumnGap)};` : ''}
  ${props.gridRowGap ? `grid-row-gap: ${getMeasureValue(props.gridRowGap)};` : ''}
  ${props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${props.alignItems ? `align-items: ${props.alignItems};` : ''}
  ${props?.marginTop ? `margin-top: ${getMeasureValue(props.marginTop)};` : ''}
  ${props?.marginLeft ? `margin-left: ${getMeasureValue(props.marginLeft)};` : ''}
  ${props?.marginRight ? `margin-right: ${getMeasureValue(props.marginRight)};` : ''}
  ${props?.marginBottom ? `margin-bottom: ${getMeasureValue(props.marginBottom)};` : ''}
  ${props?.paddingTop ? `padding-top: ${getMeasureValue(props.paddingTop)};` : ''}
  ${props?.paddingLeft ? `padding-left: ${getMeasureValue(props.paddingLeft)};` : ''}
  ${props?.paddingRight ? `padding-right: ${getMeasureValue(props.paddingRight)};` : ''}
  ${props?.paddingBottom ? `padding-bottom: ${getMeasureValue(props.paddingBottom)};` : ''}
  ${props?.border ? `border: ${props.border};` : ''}
  ${props?.borderBottom ? `border-bottom: ${props.borderBottom};` : ''}
  ${props?.lineHeight ? `line-height: ${props.lineHeight};` : ''}
  ${props?.wordBreak ? `word-break: ${props.wordBreak};` : ''}
  ${props?.overflowY ? `overflow-y: ${props.overflowY};` : ''}
  ${props?.overflow ? `overflow: ${props.overflow};` : ''}
`}
`;

export default GridContainerStyled;
