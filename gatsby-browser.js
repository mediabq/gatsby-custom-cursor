import React from "react";
import Cursor from "./src/components/Cursor";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <div className="test"></div>
      <Cursor />
      {element}
    </>
  );
};
