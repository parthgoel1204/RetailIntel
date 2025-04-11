import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => {
    // Ensure window exists (for SSR, default to false)
    return typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false;
  });

  React.useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleResize);
    } else {
      mediaQuery.addListener(handleResize);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleResize);
      } else {
        mediaQuery.removeListener(handleResize);
      }
    };
  }, []);

  return isMobile;
}

// Opt out of Fast Refresh (HMR) for this non-component module.
if (import.meta.hot) {
  import.meta.hot.decline();
}
