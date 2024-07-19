import FlexContainer from '@sber-risks-ui/core/flex-container';
// import FileUploader from '@sber-risks-ui/core/file-uploader';

const FileUploaderTesting: React.FunctionComponent = () => {
  const onFileUpload = (files: Array<File>, evt: any) => {
    console.log(files);
  };

  return (
    <>
      <FlexContainer flexDirection="column" alignItems="ceter" justifyContent="center">
        <FlexContainer>
          File uploader
          {/*<FileUploader*/}
          {/*  width={56}*/}
          {/*  height={46}*/}
          {/*  id="some-some-uploader"*/}
          {/*  disabled={false}*/}
          {/*  onFileUpload={onFileUpload}*/}
          {/*  isMultiple={true}*/}
          {/*>*/}
          {/*  <svg*/}
          {/*    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"*/}
          {/*    focusable="false"*/}
          {/*    aria-hidden="true"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*    data-testid="PublishIcon"*/}
          {/*  >*/}
          {/*    <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"></path>*/}
          {/*  </svg>*/}
          {/*</FileUploader>*/}
        </FlexContainer>
      </FlexContainer>
    </>
  );
};

export default FileUploaderTesting;
