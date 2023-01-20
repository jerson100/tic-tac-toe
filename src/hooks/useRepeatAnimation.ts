import { useEffect, useState } from "react";
import { RepeatAnimation } from "../types";

const useRepeatAnimation = ({
  count = 3,
  caret = ".",
  delay = 500,
}: RepeatAnimation): string => {
  const [_count, setCount] = useState<number>(1);
  useEffect(() => {
    const handler = () => setCount((prev) => (prev === count ? 1 : prev + 1));
    const interval = setInterval(handler, delay);
    return () => clearInterval(interval);
  }, [count, delay, caret]);
  return caret.repeat(_count);
};

export default useRepeatAnimation;
