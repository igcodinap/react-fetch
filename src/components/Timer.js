import React, { useEffect } from 'react';

const Timer = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timer executed");
    }, 3000);

    // return () => {
    //   clearTimeout(timer);
    //   console.log("Timer cleared");
    // };
  }, []);

  return (
    <div>
      <h1>Example 3</h1>
    </div>
  );
};

export default Timer;
