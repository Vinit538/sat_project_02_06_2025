import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // NEW

  useEffect(() => {
    // Only scroll to top on new navigations (PUSH, not POP like back/forward)
    if (navigationType === "PUSH") {
      // window.scrollTo(0, 0);

      window.scrollTo({ top: 0, behavior: "smooth" });

    }
  }, [pathname, navigationType]);

  return null;
}

export default ScrollToTop;
