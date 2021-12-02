import { useEffect, useState } from "react";

const useNavigation = () => {
  const [scroll, setScroll] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const navClass = scroll ? "navbar-scrolled" : "";

  const toggleNav = () => setExpanded(expanded ? false : "expanded");
  const closeNav = () => setExpanded(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return {
    closeNav,
    expanded,
    navClass,
    toggleNav,
  };
};

export default useNavigation;
