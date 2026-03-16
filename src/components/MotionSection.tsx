import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const MotionSection = ({ children, className, delay = 0 }: MotionSectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      ...sectionVariants,
      visible: {
        ...sectionVariants.visible,
        transition: {
          ...sectionVariants.visible.transition,
          delay,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
