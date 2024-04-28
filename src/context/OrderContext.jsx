import { createContext } from "react";

export default createContext({
  isModeAdmin: true,
  setIsModeAdmin: () => {},

  isCollapsed: true,
  setIsCollapsed: () => {},

  currentTabSelected: true,
  setCurrentTabSelected: () => {},
});
