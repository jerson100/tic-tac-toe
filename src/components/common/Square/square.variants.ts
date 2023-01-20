import { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    boxShadow: "0px 0px 4px 0px red",
  },
  show: {
    boxShadow: [
      "0px 0px 4px 0px red",
      "0px 0px 4px 8px red",
      "0px 0px 4px 2px red",
    ],
  },
  exit: {
    boxShadow: "0px 0px 4px 0px red",
  },
};

export { containerVariants };
