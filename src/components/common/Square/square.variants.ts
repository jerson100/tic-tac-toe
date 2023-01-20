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
    backgroundColor: [
      "rgba(255, 0, 0, 0)",
      "rgba(255, 0, 0, .2)",
      "rgba(255, 0, 0, 0)",
    ],
    color: ["rgba(255,255,255,1)", "rgba(255,255,4,1)"],
  },
  exit: {
    boxShadow: "0px 0px 4px 0px red",
  },
};

export { containerVariants };
