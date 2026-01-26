import { useScroll, useTransform } from "framer-motion";

export const useScrolling = () => {
  const { scrollY } = useScroll();

  return useTransform(
    scrollY,
    [0, 1000],
    [0, 1],
    { clamp: true }
  );
};


const smoothScrollTo = (href: string) => {
  const targetId = href.replace('#', '');
  
  setTimeout(() => {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};



export const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  callback?: () => void
) => {
  e.preventDefault();
  smoothScrollTo(href);

  if (callback) {
    callback();
  }
};
