import React, { useState, useEffect } from "react";

function FindStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setStudents(data);
      });
  }, []);

  return (
    <>
      <h1>Find Your Student</h1>
    </>
  );
}

export default FindStudents;
