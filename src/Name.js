import React from "react";

function Name({ name, filterName }) {
  return (
    <div>
      {name.map((category) => {
        return (
          <span key={category} onClick={() => filterName(category)}>
            {category}
          </span>
        );
      })}
    </div>
  );
}

export default Name;
