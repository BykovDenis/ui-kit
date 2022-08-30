import styled from 'styled-components';

interface IFormControlStyled {
  alignItems: string;
  backgroundColor?: string;
  color?: string;
  flexDirection: string;
  flexGrow?: number;
  height?: string;
  justifyContent: string;
  margin?: string;
  maxHeight?: string;
  overflowY?: string;
  padding?: string;
  position?: string;
  textAlign?: string;
  whiteSpace?: string;
  width?: string;
}

const FormControlStyled =
  styled.div <
  IFormControlStyled >
  `
  position: ${(props: IFormControlStyled) => (props?.position ? props?.position : 'relative')};  
  display: flex;
  box-sizing: border-box;
  color: ${(props: IFormControlStyled) => (props?.color ? props?.color : 'inherit')};
  flex-direction: ${(props: IFormControlStyled) => props.flexDirection};    
  justify-content: ${(props: IFormControlStyled) => props.justifyContent};
  align-items:  ${(props: IFormControlStyled) => props.alignItems};
  width: ${(props: IFormControlStyled) => (props.width ? props.width : '100%')};
  max-width: ${(props: IFormControlStyled) => (props.width ? props.width : 'initial')};
  white-space: ${(props: IFormControlStyled) => (props.whiteSpace ? props.whiteSpace : 'no-wrap')};
  margin: ${(props: IFormControlStyled) => (props.margin ? props.margin : 'initial')};
  padding: ${(props: IFormControlStyled) => (props.padding ? props.padding : 'initial')};
  height: ${(props: IFormControlStyled) => (props.height ? props.height : 'initial')};
  flex-grow: ${(props: IFormControlStyled) => (props.flexGrow ? props.flexGrow : 'initial')};
  background-color: ${(props: IFormControlStyled) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  text-align: ${(props: IFormControlStyled) => (props.textAlign ? props.textAlign : 'initial')};
  max-height: ${(props: IFormControlStyled) => (props.maxHeight ? props.maxHeight : 'initial')};
  overflow-y: ${(props: IFormControlStyled) => (props.overflowY ? props.overflowY : 'initial')};
`;

export default FormControlStyled;
