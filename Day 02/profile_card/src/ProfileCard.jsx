import React from "react";

function ProfileCard() {
  // JSX Expressions
  const name = "Natália Thomé";
  const bio = "Aspiring Frontend Developer | Learning React 🚀";

  // Inline styles in JSX
  const cardStyle = {
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "400px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
