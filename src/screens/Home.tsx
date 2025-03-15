import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";
import { HomeMobileView } from "../responsiveViews/mobile/HomeMobileView";
import { HomeTabletView } from "../responsiveViews/web/HomeTabletView";
import { HomeWebView } from "../responsiveViews/web/HomeWebView";

export const Home = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  const ScreenContent = () => {
    if (isMobile) return <HomeMobileView />;
    if (isTablet) return <HomeTabletView />;
    if (isDesktop) return <HomeWebView />;
    return null;
  };

  return <ScreenContent />;
};
