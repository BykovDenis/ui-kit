import styled from 'styled-components';

type ListItemLinkStyledProps = {
  color: string;
  fontFamily: string;
};

const ListItemLinkStyled = styled.a<ListItemLinkStyledProps>`
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: ${(props: ListItemLinkStyledProps) => props.color};
  font-family: ${(props: ListItemLinkStyledProps) => props.fontFamily};
  height: 100%;
  margin-top: 45px;
  width: 100%;
  text-align: center;
`;

export default ListItemLinkStyled;
