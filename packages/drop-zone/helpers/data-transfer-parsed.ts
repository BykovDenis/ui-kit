const cb = (file: File) => file;

function dataTransferParsed(data: DataTransfer): Array<File> {
  const files: Array<File> = [];
  if (data?.items?.length > 0) {
    for (let i = 0; i < files?.length; i++) {
      const file: any = files[i];
      files.push(file?.getAsFile(cb));
    }
  }
  return files;
  // return data?.items?.map(element => element?.getAsFile(cb)) ?? [];
}

export default dataTransferParsed;
