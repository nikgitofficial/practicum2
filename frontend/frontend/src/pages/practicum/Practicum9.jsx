import React from "react";

const Practicum9 = () => {
  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 68 },
    { name: "David", score: 74 },
    { name: "Eve", score: 91 }
  ];

  return (
    <>
      <h2>Student Scores</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name}: {student.score}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Practicum9;
