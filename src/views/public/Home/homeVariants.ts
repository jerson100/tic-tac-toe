import { Variants } from "framer-motion";

const homeVariants: Variants = {
  hidden: {
    scale: 0,
    y: "-100px",
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
};

export { homeVariants };
