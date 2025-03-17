import React, { useState } from "react";
import ReactDOM from "react-dom";


const ButtonWithTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <button
      onMouseEnter={() => setShowTooltip(true)}  // Show tooltip on hover
      onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when not hovered
    >
      Hover me!
      {showTooltip &&
  ReactDOM.createPortal(
    <div className="tooltip">This is a tooltip</div>,
    document.getElementById("portal-root")
  )}
    </button>
  );
};

export default ButtonWithTooltip;
