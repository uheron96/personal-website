import { ProjectMobileView } from "../responsiveViews/mobile/ProjectMobileView";
import { ProtfolioMobileView } from "../responsiveViews/mobile/ProtfolioMobileView";
import { ProjectTabletView } from "../responsiveViews/web/ProjectTabletView";
import { ProjectWebView } from "../responsiveViews/web/ProjectWebView";
import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";

export const Project = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  const ScreenContent = () => {
    if (isMobile) return <ProjectMobileView />;
    if (isTablet) return <ProjectTabletView />;
    if (isDesktop) return <ProjectWebView />; 
    return null;
  };

  return <ScreenContent />;
};
