import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';

declare module 'TextField' {
  export interface ITextField extends IInput, ILabel {
    baseFontSize?: number;
    fontFamily?: string;
    fontSize?: number;
    height?: number;
    id: string;
    isExistValue?: boolean;
    label?: string;
    textAlign?: string;
    value?: string | number;
    width?: number;
  }
}


declare module '@sber-riski-cib-ui:textfield' {
  export * from 'TextField';
  export { default as default } from 'TextField';
}
