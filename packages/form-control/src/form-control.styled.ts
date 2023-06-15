import styled from 'styled-components';
import IFormControlStyled from '../types/iform-control-styled';
import getMeasureValue from '../../helpers/get-measure-value';
import isNotEmptyNumber from '../../helpers/is-not-empty-number';

const FormControlStyled =
  styled.div <
  IFormControlStyled >
  `
  position: ${(props: IFormControlStyled) => (props?.position ? props?.position : 'relative')};  
  display: flex;
  box-sizing: border-box;
  color: ${(props: IFormControlStyled) => props?.color || 'inherit'};
  flex-direction: ${(props: IFormControlStyled) => props?.flexDirection || 'row'};    
  justify-content: ${(props: IFormControlStyled) => props?.justifyContent || 'initial'};
  align-items:  ${(props: IFormControlStyled) => props.alignItems};
  width: ${(props: IFormControlStyled) => getMeasureValue(props.width, '100%')};
  max-width: ${(props: IFormControlStyled) =>
    props?.maxWidth ? getMeasureValue(props.maxWidth) : getMeasureValue(props.width)};
  white-space: ${(props: IFormControlStyled) => props.whiteSpace || 'no-wrap'};
  margin: ${(props: IFormControlStyled) => props.margin || 'initial'};
  padding: ${(props: IFormControlStyled) => props.padding || 'initial'};
  height: ${(props: IFormControlStyled) => getMeasureValue(props.height)};
  flex-grow: ${(props: IFormControlStyled) => props.flexGrow || 'initial'};
  background-color: ${(props: IFormControlStyled) => props.backgroundColor || 'transparent'};
  text-align: ${(props: IFormControlStyled) => props.textAlign || 'initial'};
  max-height: ${(props: IFormControlStyled) => getMeasureValue(props.maxHeight)};
  min-height: ${(props: IFormControlStyled) => getMeasureValue(props.minHeight)};
  overflow-y: ${(props: IFormControlStyled) => props.overflowY || 'initial'};
  flex-wrap: ${(props: IFormControlStyled) => props.flexWrap || 'initial'};
  outline: ${(props: IFormControlStyled) => props?.outline || 'none'};
  border-radius: ${(props: IFormControlStyled) => getMeasureValue(props?.borderRadius, '0')};
  right: ${(props: IFormControlStyled) => getMeasureValue(props.right, 'auto')};
  left: ${(props: IFormControlStyled) => getMeasureValue(props.left, 'auto')};
  top: ${(props: IFormControlStyled) => getMeasureValue(props.top, 'auto')};
  bottom: ${(props: IFormControlStyled) => getMeasureValue(props.bottom, 'auto')};
  font-size: ${(props: IFormControlStyled) => getMeasureValue(props.fontSize, 'inherit')}
  ${(props: IFormControlStyled) => (props?.alignSelf ? `align-self: ${props.alignSelf};` : '')}
  ${(props: IFormControlStyled) => (isNotEmptyNumber(props?.zIndex) ? `z-index: ${props.zIndex};` : '')}
`;

export default FormControlStyled;
