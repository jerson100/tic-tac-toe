import { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

export { containerVariants };
