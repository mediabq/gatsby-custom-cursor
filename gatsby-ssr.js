import React from "react";
import Cursor from "./src/components/Cursor";

export const wrapPageElement = ({ element }) => {
  <>
    <Cursor />
    {element}
  </>;
};
