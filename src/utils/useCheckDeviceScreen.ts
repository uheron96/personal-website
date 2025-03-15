import { useEffect, useState } from "react";

const useCheckDeviceScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: any = null;

    const handleWindowSizeChange = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100); // Adjust the debounce delay as needed
    };

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
};

export default useCheckDeviceScreen;
