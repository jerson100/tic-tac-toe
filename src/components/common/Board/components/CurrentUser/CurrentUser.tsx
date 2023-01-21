import { CurrentUserProps } from "../../../../../types";
import { CurrentUserContainerStyle } from "./currentUser.style";

const CurrentUser = ({ current }: CurrentUserProps) => {
  return (
    <CurrentUserContainerStyle>
      <div className={current === "x" ? "active" : ""}>x</div>
      <div className={current === "o" ? "active" : ""}>o</div>
    </CurrentUserContainerStyle>
  );
};

export default CurrentUser;
