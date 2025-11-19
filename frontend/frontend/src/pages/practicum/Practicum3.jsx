import React, { useState } from "react";
import { Link } from "react-router-dom";

const Practicum3 = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show); // Flip state

  return (
    <>
      <h1>Practicum 3 Page</h1>
      <Link to="/">Home</Link>
      <br />
      <button onClick={toggleShow}>
        {show ? "hide" : "show"}
      </button>

      {/* Optional: show content based on state */}
      {show && <h2>This content is visible!</h2>}
    </>
  );
};

export default Practicum3;
