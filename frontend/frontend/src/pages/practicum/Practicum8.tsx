import React, { useState } from "react";

const Practicum8 = () => {

  const add = (a:number ,b:number) => {
    return a + b;
  };

  console.log(add(1, 2)); // 3

  return (
    <>
      {add}
    </>
  );
};

export default Practicum8;
