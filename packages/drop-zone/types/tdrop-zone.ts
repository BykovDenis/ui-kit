import TBaseStyles from '../../types/tbase-styles';

type TDropZone = TBaseStyles & {
  description?: string,
  mask?: Array<string>,
  isMulti?: boolean,
  isDragOver?: boolean,
  onFileAttached?: (file: Array<File>) => void,
};

export default TDropZone;
