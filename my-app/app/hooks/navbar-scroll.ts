import { useScroll, useTransform } from "framer-motion";

export const useScrolling = () => {
  const { scrollY } = useScroll();

  return useTransform(
    scrollY,
    [0, 700],
    [0, 1],
    { clamp: true }
  );
};
