import List from "@dbykov-ui-kit/core/list";
import ListItem from "@dbykov-ui-kit/core/list-item";
import Typography from "@dbykov-ui-kit/core/typography";
import FlexContainer from "@dbykov-ui-kit/core/flex-container";
import { useContext } from "react";
import { ReactThemeContext } from "./app";
import { ITheme } from "@dbykov-ui-kit/core/styles";
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
  const isTableActive: boolean = pathname?.indexOf("/table") > -1;
  const isCheckboxE2EActive: boolean = pathname?.indexOf("/checkbox-e2e") > -1;
  const isRadioE2EActive: boolean = pathname?.indexOf("/radio-e2e") > -1;
  const isTabsE2EActive: boolean = pathname?.indexOf("/tabs-e2e") > -1;
  const isPopupE2EActive: boolean = pathname?.indexOf("/popup-e2e") > -1;
  const isFileUploaderE2EActive: boolean =
    pathname?.indexOf("/file-uploader-e2e") > -1;
  const isPopupActive: boolean = pathname?.indexOf("/popup") > -1;
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
              isTableActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/table"
            >
              Table testing
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isCheckboxE2EActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/checkbox-e2e"
            >
              Checkbox E2E
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isRadioE2EActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/radio-e2e"
            >
              Radio E2E
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isTabsE2EActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/tabs-e2e"
            >
              Tabs E2E
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isPopupE2EActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/popup-e2e"
            >
              Popup E2E
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={
              isFileUploaderE2EActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/file-uploader-e2e"
            >
              FileUploader E2E
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
          <ListItem
            type="text"
            backgroundColor={
              isPopupActive
                ? theme.palette.primary.main
                : theme.mainBackgroundColor
            }
            height={60}
          >
            <ListItemLinkStyled
              color={theme.palette.baseFontColor}
              fontFamily={theme.fontFamily}
              href="/popup"
            >
              Popup
            </ListItemLinkStyled>
          </ListItem>
        </List>
      </FlexContainer>
    </>
  );
};

export default SideBar;
