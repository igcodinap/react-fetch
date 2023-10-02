import React, { useEffect, useState } from 'react';

const Updated = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  let num = 0;
  function increment() {
    num++;
    console.log(num);
  }
  useEffect(() => {
    console.log("Component did update");

    // return () => {
    //   console.log("Cleanup");
    // };
  }, [num]);
  return (
    <div>
      <h1>Example 2</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>{name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")}>Clear</button>
      <h2>No estado: {num}</h2>
      <button onClick={increment}>Increment no state</button>
    </div>
  );
};

export default Updated;
