import { ContainerStyle, LinkStyle, TitleStyle } from "./notFound.style";

const NotFound = () => {
  return (
    <ContainerStyle>
      <TitleStyle>Estás navegando por lugares desconocidos.</TitleStyle>
      <LinkStyle to={"/"}>Ir al inicio</LinkStyle>
    </ContainerStyle>
  );
};

export default NotFound;
