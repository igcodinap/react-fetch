import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async function() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error('Failed to fetch data');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Example</h1>
      {loading && <p>Loading...</p>}{/* if loading is true, show Loading... */}
      {error && <p>Error: {error}</p>} {/* if error is true, show Error: {error} */}
      {data && <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Fetch;
