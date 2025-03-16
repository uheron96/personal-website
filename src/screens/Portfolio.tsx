import { ProtfolioMobileView } from "../responsiveViews/mobile/ProtfolioMobileView";
import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";

export const Portfolio = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  const ScreenContent = () => {
    if (isMobile) return <ProtfolioMobileView />;
   /*  if (isTablet) return <HomeTabletView />;
    if (isDesktop) return <HomeWebView />; */
    return null;
  };

  return <ScreenContent />;
};
