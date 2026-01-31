import { Box, BoxProps } from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";

export type MotionBoxProps = BoxProps & MotionProps;

const MotionBoxComponent = motion.create(Box);

const MotionBox = ({ ...props }: MotionBoxProps) => {
  return <MotionBoxComponent {...props} />;
};

export default MotionBox;
