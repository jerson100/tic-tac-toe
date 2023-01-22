import { CurrentUserProps } from "../../../../../types";
import { CurrentUserContainerStyle } from "./currentUser.style";

const CurrentUser = ({ current }: CurrentUserProps) => {
  return (
    <CurrentUserContainerStyle>
      <p>
        turno: <span>{current}</span>
      </p>
    </CurrentUserContainerStyle>
  );
};

export default CurrentUser;
