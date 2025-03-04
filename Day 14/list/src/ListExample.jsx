import React from "react";

const ListExample = () => {
  const handleItemClick = (item) => {
    console.log(`Item ${item} clicked!`);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Prevents the list item from being selected
    console.log("Button clicked, but item is NOT selected!");
  };

  return (
    <ul>
      {["Apple", "Banana", "Cherry"].map((fruit, index) => (
        <li
          key={index}
          onClick={() => handleItemClick(fruit)}
          style={{ padding: "10px", border: "1px solid gray", marginBottom: "5px" }}
        >
          {fruit}
          <button onClick={handleButtonClick} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListExample;
