import React, { useState, useEffect } from "react";

function FindStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/getstudents")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setStudents(data);
      });
  }, []);

  function handleAddStudent() {
    fetch("/addstudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  }

  const displayStudents = students.map((student) => {
    return (
      // possibly reuse the Student component but need some way to know if student is assigned to tutor for buttons
      <div key={student.id}>
        <img src={student.avatar} alt={student.name} />
        <div>{student.name}</div>
        <div>{student.email}</div>
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
    );
  });

  return (
    <>
      <h1>Find Your Student</h1>
      {displayStudents}
    </>
  );
}

export default FindStudents;
