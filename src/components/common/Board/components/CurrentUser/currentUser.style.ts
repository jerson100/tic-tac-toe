import styled from "styled-components";

export const CurrentUserContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50px);
  grid-template-rows: repeat(2, 50px);
  row-gap: 1rem;
  column-gap: 1rem;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
