import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";
import { HomeMobileView } from "../responsiveViews/mobile/HomeMobileView";
import { HomeTabletView } from "../responsiveViews/web/HomeTabletView";
import { HomeWebView } from "../responsiveViews/web/HomeWebView";
import { useEffect } from "react";
import posthog from "posthog-js";

export const Home = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  useEffect(() => {
    posthog.capture("viewed_home_page");
  }, []);

  const ScreenContent = () => {
    if (isMobile) return <HomeMobileView />;
    if (isTablet) return <HomeTabletView />;
    if (isDesktop) return <HomeWebView />;
    return null;
  };

  return <ScreenContent />;
};
