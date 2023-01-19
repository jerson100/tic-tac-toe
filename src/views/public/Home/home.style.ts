import styled from "styled-components";

const HomeContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(36, 36, 36);
  flex-direction: column;
`;

const HomeTitleStyle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: rgb(232, 232, 232);
  margin-bottom: 1rem;
  text-align: center;
`;

export { HomeContainerStyle, HomeTitleStyle };
