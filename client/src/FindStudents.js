import React, { useState, useEffect } from "react";
// import { UserContext } from "./App";
import Student from "./Student";

function FindStudents({ setStudents }) {
  const [errors, setErrors] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  // const { currentUser } = useContext(UserContext);

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
      {displayStudents}
      {errors.map((err) => {
        return <div key={err}>{err}</div>;
      })}
    </>
  );
}

export default FindStudents;
