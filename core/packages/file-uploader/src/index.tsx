import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import FileUploaderProps from '../types/file-uploader-props';
import LabelStyled from './label.styled';
import InputStyled from './input.styled';

const FileUploader: React.FunctionComponent<FileUploaderProps> = (props: FileUploaderProps) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : props?.colorTheme === 'normal' || !props.colorTheme
      ? theme?.palette?.primary?.main
      : theme?.palette?.secondary?.main;

    const color: string = props.disabled ? theme.inactiveColor : props?.color || theme?.palette?.baseButtonFontColor;

    const onFileUpload = (evt: any) => {
      const files: Array<File> = evt?.currentTarget?.files;
      props.onFileUpload(files, evt);
    };

    return (
      <>
        <LabelStyled
          className={props?.className}
          fontFamily={theme?.fontFamily}
          focusColor={props.focusColor || backgroundColor}
          color={props?.color || color}
          fontSize={props?.fontSize ?? theme?.baseFontSize}
          htmlFor={props.id}
          fontWeight={props?.fontWeight}
          width={props?.width}
          backgroundColor={props?.backgroundColor || backgroundColor}
          disabled={props.disabled}
          whiteSpace={props?.whiteSpace}
          justifyContent={props?.justifyContent}
          height={props?.height}
          wordBreak={props?.wordBreak}
          lineHeight={props.lineHeight}
          padding={props?.padding}
        >
          {props.children}
        </LabelStyled>
        {!props.disabled && <InputStyled id={props.id} onChange={onFileUpload} multiple={props?.isMultiple} />}
      </>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default FileUploader;
