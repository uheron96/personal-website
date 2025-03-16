import { ProjectMobileView } from "../responsiveViews/mobile/ProjectMobileView";
import { ProtfolioMobileView } from "../responsiveViews/mobile/ProtfolioMobileView";
import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";

export const Project = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  const ScreenContent = () => {
    if (isMobile) return <ProjectMobileView />;
   /*  if (isTablet) return <HomeTabletView />;
    if (isDesktop) return <HomeWebView />; */
    return null;
  };

  return <ScreenContent />;
};
