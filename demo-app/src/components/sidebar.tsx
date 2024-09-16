import List from "@sber-risks-ui/core/list";
import ListItem from "@sber-risks-ui/core/list-item";
import Typography from "@sber-risks-ui/core/typography";
import FlexContainer from "@sber-risks-ui/core/flex-container";
import { useContext } from "react";
import { ReactThemeContext } from "./app";
import { ITheme } from "@sber-risks-ui/core/styles";
import ListItemLinkStyled from "./common/list-item-link.styled";

const SideBar: React.FunctionComponent = () => {
  const pathname: string = document.location.pathname;

  const isHomePageActive: boolean = pathname === "/";
  const isDatepickerActive: boolean = pathname?.indexOf("datepicker") > -1;
  const isInputActive: boolean = pathname?.indexOf("input") > -1;
  const isTextFieldActive: boolean = pathname?.indexOf("textfield") > -1;
  const isMultiSelectActive: boolean = pathname?.indexOf("/multi-select") > -1;
  const isSwitcherActive: boolean = pathname?.indexOf("/switcher") > -1;
  const isErrorsStateActive: boolean = pathname?.indexOf("/errors-state") > -1;
  const isContainersActive: boolean = pathname?.indexOf("/containers") > -1;
  const isPopupEventAccordionActive: boolean =
    pathname?.indexOf("/popup-event-accordion") > -1;
  const isSelectActive: boolean =
    pathname?.indexOf("select") > -1 && pathname?.indexOf("multi") === -1;
  const isIconActive: boolean = pathname?.indexOf("/icon") > -1;

  const theme: ITheme = useContext(ReactThemeContext);

  return (
    <>
      <FlexContainer flexDirection="column" alignItems="center" gap={10}>
        <Typography variant="H2" textAlign="center">
          Testing components
        </Typography>
        <List type="list" width={250}>
          <ListItem
            type="text"
            backgroundColor={
              isHomePageActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/"
            >
              Home page
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isInputActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/input"
            >
              Input
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isTextFieldActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/textfield"
            >
              TextField
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isDatepickerActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/datepicker"
            >
              Datepicker
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isSelectActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/select"
            >
              Select
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isMultiSelectActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/multi-select"
            >
              Multi select
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isSwitcherActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/switcher"
            >
              Switcher
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isErrorsStateActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/errors-state"
            >
              Errors state
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isContainersActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/containers"
            >
              Containers testing
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isIconActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/icon"
            >
              Icon testing
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isPopupEventAccordionActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/popup-event-accordion"
            >
              Popup event accordion testing
            </ListItemLinkStyled>
          </ListItem>
        </List>
      </FlexContainer>
    </>
  );
};

export default SideBar;
