import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerStyle = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

export const TitleStyle = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: yellow;
  &:hover {
    text-decoration: underline;
  }
`;
