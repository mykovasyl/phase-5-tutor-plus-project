import React from "react";
import { Container, Row } from "react-bootstrap";
import Student from "./Student";

function Students({ students, setStudents }) {
  return (
    <div>
      <Container
        style={{
          marginTop: "24px",
          padding: "20px",
          border: ".5px solid grey",
          borderRadius: "8px",
          width: "75%",
        }}
      >
        <h2>Your students</h2>
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
    </div>
  );
}

export default Students;
