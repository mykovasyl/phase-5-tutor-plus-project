import React from "react";
import { Container, Row } from "react-bootstrap";
import Student from "./Student";

function Students({ students, setStudents }) {
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
          Your students
        </h2>
        <Row>
          {students.map((student) => {
            return (
              <Student
                key={student.id}
                student={student}
                setStudents={setStudents}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Students;
