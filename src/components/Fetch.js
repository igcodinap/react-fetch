import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   } else {
  //     throw new Error('Failed to fetch data');
  //   }
  // })
  // .then(data => {
  //   setData(data);
  //   setLoading(false);
  // })
  // .catch(error => {
  //   setError(error.message);
  //   setLoading(false);
  // });

  return (
    <div>
      <h1>Fetch Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
