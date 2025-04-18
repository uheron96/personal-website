import { useEffect } from "react";
import { ProjectMobileView } from "../responsiveViews/mobile/ProjectMobileView";
import { ProjectTabletView } from "../responsiveViews/web/ProjectTabletView";
import { ProjectWebView } from "../responsiveViews/web/ProjectWebView";
import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";
import posthog from "posthog-js";

export const Project = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  useEffect(() => {
    console.log("Project page loaded");
    posthog.capture("viewed_project_page");
  }, []);

  const ScreenContent = () => {
    if (isMobile) return <ProjectMobileView />;
    if (isTablet) return <ProjectTabletView />;
    if (isDesktop) return <ProjectWebView />;
    return null;
  };

  return <ScreenContent />;
};
