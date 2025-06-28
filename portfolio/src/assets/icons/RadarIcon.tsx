import { motion } from "framer-motion";

interface RadarIconProps {
  isOpen: boolean;
}

export default function RadarIcon({ isOpen }: RadarIconProps) {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-none stroke-white stroke-2"
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <motion.circle
        cx="32"
        cy="32"
        r="5"
        strokeWidth="3"
        variants={{
          open: { r: 5 },
          closed: { r: 5 },
        }}
      />
      <motion.circle
        cx="32"
        cy="32"
        r="15"
        variants={{
          open: { r: 22, opacity: 1 },
          closed: { r: 15, opacity: 0.6 },
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.circle
        cx="32"
        cy="32"
        r="25"
        variants={{
          open: { r: 30, opacity: 0.4 },
          closed: { r: 25, opacity: 0.2 },
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.svg>
  );
}
