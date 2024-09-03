import FlexContainer from '@sber-risks-ui/core/flex-container';

type NumberContainerProps = {
  children: React.ReactNode,
  marginBottom?: number,
};

const NumberContainer: React.FunctionComponent<NumberContainerProps> = (props: NumberContainerProps) => {
  return (
    <FlexContainer
      marginBottom={props.marginBottom ?? 0}
      marginRight={10}
      fontSize={18}
      width={25}
      justifyContent="flex-end"
    >
      {props.children}
    </FlexContainer>
  );
};

export default NumberContainer;
