import { styled } from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';
import isNotEmptyNumber from '../../helpers/is-not-empty-number';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import IFormControl from '../types/iform-control';

const FormControlStyled = styled.div<IFormControl>`
  ${(props: IFormControl) => `
    position: ${props?.position ? props?.position : 'relative'};
    display: flex;
    box-sizing: border-box;
    color: ${props?.color || 'inherit'};
    flex-direction: ${props?.flexDirection || 'row'};
    justify-content: ${props?.justifyContent || 'initial'};
    align-items: ${props.alignItems};
    width: ${getMeasureValue(props.width, '100%')};
    white-space: ${props.whiteSpace || 'no-wrap'};
    margin: ${props.margin || 'initial'};
    padding: ${props.padding || 'initial'};
    height: ${getMeasureValue(props.height)};
    flex-grow: ${props.flexGrow || 'initial'};
    background-color: ${props.backgroundColor || 'transparent'};
    text-align: ${props.textAlign || 'initial'};
    max-height: ${getMeasureValue(props.maxHeight)};
    min-height: ${getMeasureValue(props.minHeight)};
    overflow-y: ${props.overflowY || 'initial'};
    flex-wrap: ${props.flexWrap || 'initial'};
    outline: ${props?.outline || 'none'};
    border-radius: ${getMeasureValue(props?.borderRadius, '0')};
    right: ${getMeasureValue(props.right, 'auto')};
    left: ${getMeasureValue(props.left, 'auto')};
    top: ${getMeasureValue(props.top, 'auto')};
    bottom: ${getMeasureValue(props.bottom, 'auto')};
    font-size: ${getMeasureValue(props.fontSize, 'inherit')};
    ${props?.alignSelf ? `align-self: ${props.alignSelf};` : ''}
    ${isNotEmptyNumber(props?.zIndex) ? `z-index: ${props.zIndex};` : ''}
    ${isNotEmptyString(props?.transform) ? `transform: ${props.transform};` : ''}
    ${props?.maxWidth ? `max-width: ${getMeasureValue(props.maxWidth)};` : ''}
    ${props?.minWidth ? `min-width: ${getMeasureValue(props.minWidth)};` : ''}
    ${props?.fontStyle ? `font-style: ${props.fontStyle};` : ''}
    ${props?.gap ? `gap: ${getMeasureValue(props.gap)};` : ''}
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

export default FormControlStyled;
