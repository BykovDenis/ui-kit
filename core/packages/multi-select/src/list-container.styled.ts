import styled from 'styled-components';

type TListContainerStyled = {
  backgroundColor: string;
  outlinedColor: string;
};

const ListContainerStyled = styled('div')<TListContainerStyled>`
  ${(props: TListContainerStyled) => `
  top: 100%;
  background-color: ${props.backgroundColor};
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px ${props.outlinedColor}, 0px 4px 11px ${props.outlinedColor};
  margin-bottom: 5px;
  position: absolute;
  width: 100%;
  z-index: 10001;
  box-sizing: border-box;
  max-height: 500px;
  overflow-y: auto;
  `}
`;

export default ListContainerStyled;
