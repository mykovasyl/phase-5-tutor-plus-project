import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Student from "./Student";

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
      <Container
        style={{
          marginTop: "24px",
          padding: "24px",
          border: ".5px solid grey",
          borderRadius: "8px",
          width: "75%",
        }}
      >
        <h2
          style={{
            border: ".5px solid grey",
            marginBottom: "24px",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          Find Your Student
        </h2>
        <Row>{displayStudents}</Row>
        {errors.map((err) => {
          return <div key={err}>{err}</div>;
        })}
      </Container>
    </>
  );
}

export default FindStudents;
