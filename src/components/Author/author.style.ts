import styled from "styled-components";

const ContainerStyle = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: white;
  background-color: rgba(255, 0, 0, 0.2);
  border: solid 1px red;
  padding: 0.6rem 0.8rem;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 0, 0, 0.4);
  }
`;

export { ContainerStyle };
