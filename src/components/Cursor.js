import React, { useEffect, useState, Fragment } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
    // eslint-disable-next-line
  });

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
  };

  const onMouseMove = (e) => {
    cursorX.set(e.clientX - 25);
    cursorY.set(e.clientY - 25);
    dotX.set(e.clientX - 2);
    dotY.set(e.clientY - 2);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  return (
    <Fragment>
      <motion.svg
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        initial={{ opacity: 1 }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: clicked ? 0.5 : linkHovered ? 1.5 : 1,
        }}
        height="50"
        width="50"
        className="cursor"
      >
        <motion.circle
          cx={25}
          cy={25}
          r={20}
          initial={{ fill: "transparent" }}
          animate={{
            fill: clicked ? "var(--color-black)" : "transparent",
          }}
        />
      </motion.svg>
      <motion.div
        className="dot"
        style={{
          translateX: dotX,
          translateY: dotY,
        }}
        animate={{
          opacity: hidden ? 0 : 1,
        }}
      ></motion.div>
    </Fragment>
  );
};

export default Cursor;
