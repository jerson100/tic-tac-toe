import { Variants } from "framer-motion";

export const LoadingVariants: Variants = {
  hidden: {
    y: " -100%",
    opacity: 0,
    translateX: "-50%",
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 1,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
  },
};
