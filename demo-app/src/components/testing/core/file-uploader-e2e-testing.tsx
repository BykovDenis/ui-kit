import React, {useState} from 'react';
import Typography from '@dbykov-ui-kit/core/typography';
import FlexContainer from '@dbykov-ui-kit/core/flex-container';
import FileUploader from '../../../../../core/packages/file-uploader/src';

const FileUploaderE2ETesting: React.FunctionComponent = () => {
  const [uploadedNames, setUploadedNames] = useState<string[]>([]);

  const onFileUpload = (files: Array<File>) => {
    setUploadedNames(Array.from(files || []).map((file) => file.name));
  };

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="flex-start"
      gap={12}
      margin="20px 0"
      width={700}
    >
      <Typography variant="H1">FileUploader E2E testing</Typography>

      <FileUploader
        id="file-uploader-e2e-input"
        isMultiple={true}
        onFileUpload={onFileUpload}
        width={180}
        height={42}
      >
        Upload files
      </FileUploader>

      <FileUploader id="file-uploader-e2e-disabled" disabled={true} width={180} height={42}>
        Disabled uploader
      </FileUploader>

      <div id="file-uploader-e2e-state">{uploadedNames.join(',')}</div>
    </FlexContainer>
  );
};

export default FileUploaderE2ETesting;
