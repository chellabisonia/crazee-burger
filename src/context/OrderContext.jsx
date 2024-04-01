import { createContext } from "react";

export default createContext({
  isModeAdmin: true,
  setIsModeAdmin: () => {},

  isCollapsed:true,
  setIsCollapsed: () => {},

  isAddTabSelected: true,
  setIsAddTabSelected:() => {},

  isEditTabSelected: true,
  setIsEditTabSelected:() => {},
});
