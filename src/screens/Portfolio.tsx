import { ProtfolioMobileView } from "../responsiveViews/mobile/ProtfolioMobileView";
import { PortfolioWebView } from "../responsiveViews/web/PortfolioWebView";
import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";

export const Portfolio = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  const ScreenContent = () => {
    if (isMobile) return <ProtfolioMobileView />;
    if (isTablet) return <ProtfolioMobileView />;
    if (isDesktop) return <PortfolioWebView />;
    return null;
  };

  return <ScreenContent />;
};
