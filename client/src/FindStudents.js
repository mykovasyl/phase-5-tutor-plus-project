import React, { useState, useEffect } from "react";

function FindStudents({ currentUser, students, setStudents }) {
  const [errors, setErrors] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    fetch("/getstudents").then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          setAllStudents(data);
        });
      } else {
        setErrors(resp.json().errors);
      }
    });
  }, []);

  function handleAddStudent(studentId) {
    fetch("/tutor_students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tutor_id: currentUser.id,
        student_id: studentId,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedStudent) => setStudents([...students, updatedStudent]));
  }

  const displayStudents = allStudents.map((student) => {
    return (
      // possibly reuse the Student component but need some way to know if student is assigned to tutor for buttons
      <div key={student.id}>
        <img src={student.avatar} alt={student.name} />
        <div>{student.name}</div>
        <div>{student.email}</div>
        <button onClick={() => handleAddStudent(student.id)}>
          Add Student
        </button>
        {errors.map((error) => {
          return <div key={error}>{error}</div>;
        })}
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
