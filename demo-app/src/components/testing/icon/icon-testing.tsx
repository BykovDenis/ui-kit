import Typography from "@sber-risks-ui/core/typography";
import React, { useContext } from "react";
import GridContainer from "@sber-risks-ui/core/grid-container";
import { ITheme } from "@sber-risks-ui/core/styles";
import { ReactIconContext, ReactThemeContext } from "../../app";
// local component
// import Icon from "../../../../../icon/src";
// import IconButton from "../../../../../core/packages/icon-button/src";
// import Button from "../../../../../core/packages/button/src";
// components from package library
import Icon from "@sber-risks-ui/icon";
import Button from "@sber-risks-ui/core/button";
import IconButton from "@sber-risks-ui/core/icon-button";

const IconTesting: React.FunctionComponent = () => {
  const theme: ITheme = useContext(ReactThemeContext);
  const contextIcon: any = useContext(ReactIconContext);
  return (
    <GridContainer justifyContent="center" alignItems="center">
      <Typography variant="H1">Icon Testing</Typography>
      <GridContainer gridTemplateColumns="1fr" width={330} gridRowGap="10px">
        <GridContainer
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap="10px"
          gridTemplateRows="70px"
        >
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
            fontWeight={900}
          >
            sm 16px x 16px
          </GridContainer>
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
            fontWeight={900}
          >
            m 24px x 24px
          </GridContainer>
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
            fontWeight={900}
          >
            lg 36px x 36px
          </GridContainer>
        </GridContainer>
        <GridContainer
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap="10px"
          gridTemplateRows="70px"
        >
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
          >
            <Icon name="icon-star" size="sm" />
          </GridContainer>
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
          >
            <Icon name="icon-menu" size="m" />
          </GridContainer>
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
          >
            <Icon name="ic_36_pram" size="lg" />
          </GridContainer>
        </GridContainer>
        <GridContainer
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap="10px"
          gridTemplateRows="70px"
        >
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
          >
            <Icon name="icon-star-filled" size="sm" />
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
            <Icon name="ic_36_moneybag" size="lg" />
          </GridContainer>
        </GridContainer>
        <GridContainer
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap="10px"
          gridTemplateRows="70px"
        >
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton variant="text" color={theme.palette.secondary.main}>
              <Icon name="icon-star" size="sm" />
            </IconButton>
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
            <IconButton variant="text" color={theme.palette.secondary.main}>
              <Icon name="ic_36_pram" size="lg" />
            </IconButton>
          </GridContainer>
        </GridContainer>
        <GridContainer
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap="10px"
          gridTemplateRows="70px"
        >
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton>
              <Icon name="icon-star-filled" size="sm" />
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
          >
            <IconButton>
              <Icon name="ic_36_moneybag" size="lg" />
            </IconButton>
          </GridContainer>
        </GridContainer>
        <GridContainer
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap="10px"
          gridTemplateRows="70px"
        >
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
            color={theme.palette.secondary.main}
          >
            <Button color="inherit">
              <Icon name="icon-star" size="sm" />
            </Button>
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
            <Button color="inherit">
              <Icon name="ic_36_moneybag" size="lg" />
            </Button>
          </GridContainer>
        </GridContainer>
        <GridContainer
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap="10px"
          gridTemplateRows="70px"
        >
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
            color={theme.palette.secondary.main}
          >
            <Button variant="text" color="inherit">
              <Icon name="icon-star-filled" size="sm" />
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
          <GridContainer
            outline={`1px solid ${theme.palette.baseFontColor}`}
            alignItems="center"
            justifyContent="center"
            color={theme.palette.secondary.main}
          >
            <Button variant="text" color="inherit">
              <Icon name="ic_36_pram" size="lg" />
            </Button>
          </GridContainer>
        </GridContainer>
      </GridContainer>
    </GridContainer>
  );
};

export default IconTesting;
