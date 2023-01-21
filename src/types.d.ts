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
}
