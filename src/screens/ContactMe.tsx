import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";
import { HomeMobileView } from "../responsiveViews/mobile/HomeMobileView";
import { HomeTabletView } from "../responsiveViews/web/HomeTabletView";
import { HomeWebView } from "../responsiveViews/web/HomeWebView";
import { ContactMeMobileView } from "../responsiveViews/mobile/ContactMeMobileView";

export const ContactMe = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  const ScreenContent = () => {
    if (isMobile) return <ContactMeMobileView />;
    /*  if (isTablet) return <HomeTabletView />;
    if (isDesktop) return <HomeWebView />; */
    return null;
  };

  return <ScreenContent />;
};
