import React from "react";
import { CommonContextProvider } from "../contexts/CommonCtx";
import ComponentA from "./ComponentA";

const AppContainer = () => {
  return (
    <CommonContextProvider>
      <ComponentA />
    </CommonContextProvider>
  );
};

export default AppContainer;
