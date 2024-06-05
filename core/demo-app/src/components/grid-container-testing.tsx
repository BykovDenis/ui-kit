import GridContainer from '@sber-risks-ui/core/grid-container';
import FlexContainer from '@sber-risks-ui/core/form-control';

const GridContainerTesting: React.FunctionComponent = () => {
  return (
    <>
      <GridContainer
        gridTemplateRows="100px 200px 100px"
        gridTemplateColumns="100px 200px 100px"
        columnWidth={100}
        rowHeight={100}
        gap="30px"
        outline="2px dashed orange"
        width={800}
        height={800}
        margin="0 auto"
        columns={3}
        rows={3}
      >
        <FlexContainer outline="1px solid red"></FlexContainer>
        <FlexContainer outline="1px solid blue"></FlexContainer>
        <FlexContainer outline="1px solid green"></FlexContainer>
        <FlexContainer outline="1px solid yellow"></FlexContainer>
        <FlexContainer outline="1px solid pink"></FlexContainer>
        <FlexContainer outline="1px solid white"></FlexContainer>
        <FlexContainer outline="1px solid brown"></FlexContainer>
        <FlexContainer outline="1px solid gray"></FlexContainer>
        <FlexContainer outline="1px solid black"></FlexContainer>
      </GridContainer>
    </>
  );
};

export default GridContainerTesting;
