import styled from "styled-components";

export const CurrentUserContainerStyle = styled.div`
  color: ${({ theme }) => theme.colors.TEXT};
  font-size: 1.5rem;
  & span {
    color: yellow;
  }
`;
