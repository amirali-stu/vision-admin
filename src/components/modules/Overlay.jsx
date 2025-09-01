import React from "react";
import ReactDOM from "react-dom";

function Overlay({ isShow, setIsShow }) {
  const overlayRoot = document.getElementById("overlay");
  if (!overlayRoot) return null;
  return ReactDOM.createPortal(
    <div
      className={`absolute inset-0 z-40 w-full h-full transition-all duration-300 bg-gray-200/80 ${
        isShow ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => setIsShow(!isShow)}
    ></div>,
    overlayRoot
  );
}

export default Overlay;
