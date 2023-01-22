export type UserType = "x" | "o";

export interface LoadingProps {
  isLoading?: bool;
}

export interface RepeatAnimation {
  caret?: string;
  count?: number;
  delay?: number;
}

export interface CurrentUserProps {
  current: UserType;
  winner: string | null;
}

export interface ISquare {
  active: boolean;
  character: UserType | "";
  index: number;
}

export interface SquareProps extends ISquare {
  onclick: (square: ISquare) => void;
}

export interface SquareStyleProps
  extends Pick<ISquare, "active" | "character"> {}
