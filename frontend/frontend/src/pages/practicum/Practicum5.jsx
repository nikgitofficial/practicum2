import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Practicum5 = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getdata = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.log("failed to load data", err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const filteredData = data.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Practicum5</h1>
      <Link to="/">Home</Link>
      <br />

      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredData.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Practicum5;
