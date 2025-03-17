import React, { useState } from "react";
import ReactDOM from "react-dom";


const ButtonWithTooltip = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 300);
  };
  
  
  
  return (
    <div style={ { position: "relative"}}>
    <button
      onMouseEnter={() => setShowTooltip(true)}  // Show tooltip on hover
      onMouseLeave={() => handleMouseLeave && setShowTooltip(false)} // Hide tooltip when not hovered
    >
      Hover me!
      </button>

      {showTooltip &&
  ReactDOM.createPortal(
    <div className="tooltip">{text}</div>,
    document.getElementById("portal-root")
  )}
  </div>
  );
};

export default ButtonWithTooltip;
