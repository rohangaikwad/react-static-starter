import React, { useState } from "react";
export const CommonContext = React.createContext();

export const CommonContextProvider = ({ children }) => {
  const [name, setName] = useState("Rohan");

  return <CommonContext.Provider value={[name, setName]}>{children}</CommonContext.Provider>;
};
