import styled from 'styled-components';

type DaysOfMonthStyledProps = {
  id: string;
};

const DaysOfMonthStyled = styled.div.attrs({ 'data-days-on-month': true })<DaysOfMonthStyledProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 5px 3px;
`;

export default DaysOfMonthStyled;
