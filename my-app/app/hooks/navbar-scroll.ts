import { useScroll, useTransform } from "framer-motion";

export const useScrolling = () => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 200], [0, 1]);;
};
