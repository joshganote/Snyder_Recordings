import { createContext } from "react";
import { Content } from "./Content";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  return <ContentContext.Provider value={Content}>{children}</ContentContext.Provider>;
};
