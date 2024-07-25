import styled from 'styled-components';
import TTypography from '../types/ttypography';
import getMeasureValue from '../../helpers/get-measure-value';

const PhraseStyled = styled.p<TTypography>`
  position: relative;
  font-family: ${(props: TTypography) => props.fontFamily};
  color: ${(props: TTypography) => props.color};
  font-size: ${(props: TTypography) => props.fontSize}px;
  line-height: ${(props: TTypography) => props.lineHeight ?? 0.7};
  white-space: ${(props: TTypography) => (props?.whiteSpace ? props.whiteSpace : 'nowrap')};
  font-weight: ${(props: TTypography) => props.fontWeight || 'inherit'};
  width: ${(props: TTypography) => getMeasureValue(props?.width)};
  height: ${(props: TTypography) => getMeasureValue(props?.height)};
  background-color: ${(props: TTypography) => (props.backgroundColor ? props.backgroundColor : 'inherit')};
  word-break: ${(props: TTypography) => props.wordBreak ?? 'initial'};
  ${(props: TTypography) => (props?.textAlign ? `text-align: ${props.textAlign}` : '')};
  ${(props: TTypography) => (props?.opacity ? `opacity: ${props.opacity};` : '')}
  ${(props: TTypography) => (props?.padding ? `padding: ${props.padding};` : '')}
  ${(props: TTypography) => (props?.margin ? `margin: ${props.margin};` : '')}
  ${(props: TTypography) => (props?.display ? `display: ${props.display};` : '')}
  ${(props: TTypography) => (props?.flexDirection ? `flex-direction: ${props.flexDirection};` : '')}
  ${(props: TTypography) => (props?.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
  ${(props: TTypography) => (props?.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props: TTypography) => (props?.alignSelf ? `align-self: ${props.alignSelf};` : '')}
`;

export default PhraseStyled;
