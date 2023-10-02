import React, { useEffect } from 'react';

const Mount = () => {
  useEffect(() => {   // function(){} // () => {}
    console.log("Component did mount");

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <h1>Example 1</h1>
    </div>
  );
};

export default Mount;


// Arrow function vs function
// const hola = () => {
//   console.log("hola");
// }

// function hola1 () {
//   console.log("hola");
// }

// hola()
// hola1()