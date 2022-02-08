import React from 'react';

function Job({ Data }) {
 
  return (
    <div>
      {
        Data.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.date}</h3>
              <p>{item.info}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Job;
