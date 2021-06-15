import { useState } from "react";

const useHover = () => {
  const [hovered, set] = useState(false);
  const binder = {
    onMouseEnter: () => set(true),
    onMouseLeave: () => set(false),
  };
  return [hovered, binder];
};

export default useHover;
