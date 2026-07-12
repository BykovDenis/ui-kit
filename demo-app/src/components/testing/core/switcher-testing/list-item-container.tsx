import FlexContainer from '@dbykov-ui-kit/core/flex-container';
import {ITheme, useTheme} from '@dbykov-ui-kit/core/styles';
import NumberContainer from './number-container';

type TypographyWrappedProps = {
  children: React.ReactNode;
  paddingBottom?: number;
  answerIndex: number;
};

const ListItemContainer: React.FunctionComponent<TypographyWrappedProps> = (
  props: TypographyWrappedProps
) => {
  const theme: ITheme = useTheme();
  return (
    <FlexContainer
      justifyContent="flex-start"
      alignItems="baseline"
      width="initial"
    >
      <NumberContainer>{props.answerIndex}.</NumberContainer>
      <FlexContainer
        borderBottom={`1px solid ${theme.mainOutlinedColor}`}
        width="initial"
        paddingBottom={props.paddingBottom ?? 0}
      >
        <FlexContainer
          fontSize={18}
          minHeight={36}
          margin="0"
          alignItems="center"
          wordBreak="break-word"
          whiteSpace="normal"
          width={700}
          lineHeight={2}
        >
          {props.children}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ListItemContainer;
