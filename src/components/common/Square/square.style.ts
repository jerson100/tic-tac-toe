import styled from "styled-components";

const SquareContainerStyle = styled.div`
  border: solid 1px red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(232, 232, 232);
  box-shadow: 0px 0px 4px 2px red;
  cursor: pointer;
  transition: transform 0.4s linear;
  &:hover {
    transform: scale(0.8);
  }
`;

export { SquareContainerStyle };
