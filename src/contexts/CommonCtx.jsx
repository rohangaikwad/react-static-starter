import React, { useState, useMemo } from "react";

export const CommonContext = React.createContext();

export const CommonContextProvider = ({ children }) => {
    const [name, setName] = useState("Rohan");
    const values = useMemo(() => ({ name, setName }), [name]);

    return <CommonContext.Provider value={values}>{children}</CommonContext.Provider>;
};
