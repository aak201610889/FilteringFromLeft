import React from "react";

function Name({ name, filterName }) {
  return (
    <div>
      {name.map((category) => {
        return (
          <div key={category} onClick={() => filterName(category)}>
            {category}
          </div>
        );
      })}
    </div>
  );
}

export default Name;
