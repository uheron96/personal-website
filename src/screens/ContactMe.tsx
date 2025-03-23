import useCheckDeviceScreen from "../utils/useCheckDeviceScreen";
import { ContactMeMobileView } from "../responsiveViews/mobile/ContactMeMobileView";
import { ContactMeWebView } from "../responsiveViews/web/ContactMeWebView";

export const ContactMe = () => {
  const { isMobile, isTablet, isDesktop } = useCheckDeviceScreen();

  const ScreenContent = () => {
    if (isMobile) return <ContactMeMobileView />;
    if (isTablet) return <ContactMeMobileView />;
    if (isDesktop) return <ContactMeWebView />;
    return null;
  };

  return <ScreenContent />;
};
