import React, { useContext } from "react";
import { CommonContext } from "../contexts/CommonCtx";

const ComponentA = () => {
  const [name] = useContext(CommonContext);
  console.log(name);

  return <h1>Hello {name}</h1>;
};

export default ComponentA;
