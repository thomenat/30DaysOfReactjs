import React, { useState, useEffect, useRef } from "react";

const SimpleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown when button is clicked
  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevents this click from triggering document click
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]); // Ensure it runs when isOpen changes

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Button to open dropdown */}
      <button onClick={toggleDropdown}>Toggle Dropdown</button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          style={{
            position: "absolute",
            top: "30px",
            background: "white",
            border: "1px solid gray",
            padding: "10px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <p>Dropdown Content</p>
          <p>Click outside to close</p>
        </div>
      )}
    </div>
  );
};

export default SimpleDropdown;
