import styled from 'styled-components';
import IFormControlStyled from '../types/iform-control-styled';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import getMeasureValue from '../../helpers/get-measure-value';

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
  max-width: ${(props: IFormControlStyled) => getMeasureValue(props.width)};
  white-space: ${(props: IFormControlStyled) => props.whiteSpace || 'no-wrap'};
  margin: ${(props: IFormControlStyled) => props.margin || 'initial'};
  padding: ${(props: IFormControlStyled) => props.padding || 'initial'};
  height: ${(props: IFormControlStyled) => getMeasureValue(props.height)};
  flex-grow: ${(props: IFormControlStyled) => props.flexGrow || 'initial'};
  background-color: ${(props: IFormControlStyled) => props.backgroundColor || 'transparent'};
  text-align: ${(props: IFormControlStyled) => props.textAlign || 'initial'};
  max-height: ${(props: IFormControlStyled) => props.maxHeight || 'initial'};
  overflow-y: ${(props: IFormControlStyled) => props.overflowY || 'initial'};
  flex-wrap: ${(props: IFormControlStyled) => props.flexWrap || 'initial'};
  outline: ${(props: IFormControlStyled) => props?.outline || 'none'};
  border-radius: ${(props: IFormControlStyled) => getMeasureValue(props?.borderRadius, '0')};
`;

export default FormControlStyled;
