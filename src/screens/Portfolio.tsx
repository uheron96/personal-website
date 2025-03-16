import { ProtfolioMobileView } from "../responsiveViews/mobile/ProtfolioMobileView";
import { PortfolioTabletView } from "../responsiveViews/web/PortfolioTabletView";
import { PortfolioWebView } from "../responsiveViews/web/PortfolioWebView";
import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";

export const Portfolio = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  const ScreenContent = () => {
    if (isMobile) return <ProtfolioMobileView />;
    if (isTablet) return <PortfolioTabletView />;
    if (isDesktop) return <PortfolioWebView />;
    return null;
  };

  return <ScreenContent />;
};
