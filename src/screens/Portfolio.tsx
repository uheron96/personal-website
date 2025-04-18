import { useEffect } from "react";
import { ProtfolioMobileView } from "../responsiveViews/mobile/ProtfolioMobileView";
import { PortfolioWebView } from "../responsiveViews/web/PortfolioWebView";
import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";
import posthog from "posthog-js";

export const Portfolio = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  useEffect(() => {
    posthog.capture("viewed_portfolio_page");
  }, []);

  const ScreenContent = () => {
    if (isMobile) return <ProtfolioMobileView />;
    if (isTablet) return <ProtfolioMobileView />;
    if (isDesktop) return <PortfolioWebView />;
    return null;
  };

  return <ScreenContent />;
};
