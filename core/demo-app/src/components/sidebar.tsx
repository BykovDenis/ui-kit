import List from '../../../packages/list/src';
import ListItem from '../../../packages/list-item/src';
import Typography from '../../../packages/typography/src';
import FlexContainer from '@sber-risks-ui/core/flex-container';
import { useContext } from 'react';
import { ReactThemeContext } from '../app';
import { ITheme } from '@sber-risks-ui/core/styles';
import ListItemLinkStyled from './common/list-item-link.styled';
import TextField from '@sber-risks-ui/core/textfield';

const Sidebar: React.FunctionComponent = () => {
  const pathname: string = document.location.pathname;

  const isDatepickerActive: boolean = pathname?.indexOf('datepickers') > -1;
  const isInputsActive: boolean = pathname?.indexOf('inputs') > -1;
  const isTextFieldsActive: boolean = pathname?.indexOf('textfields') > -1;

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
            backgroundColor={isInputsActive ? theme.palette.primary.main : theme.mainBackgroundColor}
            height={60}
          >
            <ListItemLinkStyled color={theme.palette.baseFontColor} fontFamily={theme.fontFamily} href="/inputs">
              Inputs
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={isTextFieldsActive ? theme.palette.primary.main : theme.mainBackgroundColor}
            height={60}
          >
            <ListItemLinkStyled color={theme.palette.baseFontColor} fontFamily={theme.fontFamily} href="/textfields">
              TextField
            </ListItemLinkStyled>
          </ListItem>
          <ListItem
            type="text"
            backgroundColor={isDatepickerActive ? theme.palette.primary.main : theme.mainBackgroundColor}
            height={60}
          >
            <ListItemLinkStyled color={theme.palette.baseFontColor} fontFamily={theme.fontFamily} href="/datepickers">
              Datepickers
            </ListItemLinkStyled>
          </ListItem>
        </List>
      </FlexContainer>
    </>
  );
};

export default Sidebar;
