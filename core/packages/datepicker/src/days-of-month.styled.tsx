import styled from 'styled-components';
import UiKitComponent from '../../enums/ui-kit-component';

type DaysOfMonthStyledProps = {
  id: string;
};

const DaysOfMonthStyled = styled.div.attrs({
  'data-days-on-month': true,
  'data-ui-kit-component': UiKitComponent.Datepicker,
})<DaysOfMonthStyledProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 5px 3px;
`;

export default DaysOfMonthStyled;
