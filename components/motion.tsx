"use client";
import { motion, Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: .5, ease: "easeOut" } }
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: .08 } }
};

export const MotionDiv = motion.div;
export const MotionButton = motion.a;
