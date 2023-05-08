import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TDropZone from '../types/tdrop-zone';
import DropZoneStyled from './drop-zone.styled';
import InputFileStyled from './input-file.styled';
import Label from '../../label/src';
import dataTransferParsed from '../helpers/data-transfer-parsed';

const DropZone: React.FunctionComponent<TDropZone> = (props: TDropZone) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [isMulti, setIsMulti] = useState<boolean>(props.isMulti !== undefined ? props.isMulti : false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(
    () => () => {
      setIsMulti(false);
      setIsDragOver(false);
    },
    []
  );

  const description: string = props?.description || 'Drag a file to this area or click to select a file';

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.disabled ? theme.inactiveColor : props?.color || theme.palette.baseFontColor;
    const fontSize: number | string = props?.fontSize ? props.fontSize : theme.baseFontSize;

    const onFileAttach = (evt: any) => {
      const element = evt.current;
    };

    const onFileDrop = (evt: any) => {
      evt.preventDefault();
      setIsDragOver(false);
      const data = evt.dataTransfer;
      const filesParsed: Array<File> = dataTransferParsed(data);
      if (props?.onFileAttached) {
        props.onFileAttached(filesParsed);
      }
    };

    const onFileDragOver = (evt: any) => {
      evt.preventDefault();
      const element = evt.current;
      setIsDragOver(true);
    };

    return (
      <DropZoneStyled
        color={color}
        fontFamily={theme.fontFamily}
        backgroundColor={props.disabled ? theme.inactiveBackgroundColor : 'transparent'}
        onDrop={onFileDrop}
        onDragOver={onFileDragOver}
        isDragOver={isDragOver}
      >
        <Label color={color} fontSize={fontSize}>
          <InputFileStyled isMulti={props.isMulti} disabled={props.disabled} onChange={onFileAttach} />
          {description}
        </Label>
      </DropZoneStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(DropZone);
