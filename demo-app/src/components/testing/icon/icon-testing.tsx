import Typography from "@sber-risks-ui/core/typography";
import React, { useContext } from "react";
import GridContainer from "@sber-risks-ui/core/grid-container";
import { ITheme } from "@sber-risks-ui/core/styles";
import { ReactIconContext, ReactThemeContext } from "../../app";
// local component
import Icon from "../../../../../icon/src";
// import IconButton from "../../../../../core/packages/icon-button/src";
// import Button from "../../../../../core/packages/button/src";
// components from package library
// @ts-ignore
// import Icon from "@sber-risks-ui/icon";
import Button from "@sber-risks-ui/core/button";
import IconButton from "@sber-risks-ui/core/icon-button";

const IconTesting: React.FunctionComponent = () => {
  const theme: ITheme = useContext(ReactThemeContext);
  const contextIcon: any = useContext(ReactIconContext);
  return (
    <GridContainer justifyContent="center" alignItems="center">
      <Typography variant="H1">Icon Testing</Typography>
      <GridContainer
        gridTemplateColumns="100px 100px 100px"
        gridTemplateRows="100px 100px 100px"
      >
        <GridContainer
          outline={`1px solid ${theme.palette.baseFontColor}`}
          alignItems="center"
          justifyContent="center"
        >
          <Icon name="icon-menu" />
        </GridContainer>
        <GridContainer
          outline={`1px solid ${theme.palette.baseFontColor}`}
          alignItems="center"
          justifyContent="center"
        >
          <Icon name="icon-menu-open" />
        </GridContainer>
        <GridContainer
          outline={`1px solid ${theme.palette.baseFontColor}`}
          alignItems="center"
          justifyContent="center"
        >
          <IconButton variant="text" color={theme.palette.secondary.main}>
            <Icon name="icon-menu-open" />
          </IconButton>
        </GridContainer>
        <GridContainer
          outline={`1px solid ${theme.palette.baseFontColor}`}
          alignItems="center"
          justifyContent="center"
        >
          <IconButton>
            <Icon name="icon-menu" />
          </IconButton>
        </GridContainer>
        <GridContainer
          outline={`1px solid ${theme.palette.baseFontColor}`}
          alignItems="center"
          justifyContent="center"
          color={theme.palette.secondary.main}
        >
          <Button color="inherit">
            <Icon name="icon-menu-open" />
          </Button>
        </GridContainer>
        <GridContainer
          outline={`1px solid ${theme.palette.baseFontColor}`}
          alignItems="center"
          justifyContent="center"
          color={theme.palette.secondary.main}
        >
          <Button variant="text" color="inherit">
            <Icon name="icon-menu-open" />
          </Button>
        </GridContainer>
      </GridContainer>
    </GridContainer>
  );
};

export default IconTesting;
