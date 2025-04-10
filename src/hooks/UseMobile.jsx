import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    // Create the media query list
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Define the handler function
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };
    
    // Add the event listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleResize);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleResize);
    }
    
    // Cleanup function
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleResize);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleResize);
      }
    };
  }, []);

  return isMobile;
}