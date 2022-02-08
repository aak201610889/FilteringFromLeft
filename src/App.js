import React, { useState } from 'react';
import data from './data';
import Name from './Name';
import Job from './Job';
function App() {

  const [Data, setData] = useState(data);


  const allName  =[... new Set(data.map((item) => item.name))];
  const [name, setName] = useState(allName);
  const filterName = (name) => {
    const newItems = data.filter((item) => item.name === name);
    setData(newItems);
  };

 
 
  return (
    <div className="App">
      <h1>Expierence</h1>
      <Name name={allName} filterName={filterName} />
      <Job Data={Data} />
    </div>
  );
}

export default App;
