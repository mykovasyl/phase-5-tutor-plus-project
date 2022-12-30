import React, { useState, useEffect } from "react";
import Student from "./Student";
import { Stack } from "react-bootstrap";

function FindStudents({ setStudents }) {
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

  const displayStudents = allStudents.map((student) => {
    return (
      <Student key={student.id} student={student} setStudents={setStudents} />
    );
  });

  return (
    <>
      <h1>Find Your Student</h1>
      <Stack direction="horizontal" gap={2}>
        {displayStudents}
      </Stack>
      {errors.map((err) => {
        return <div key={err}>{err}</div>;
      })}
    </>
  );
}

export default FindStudents;
