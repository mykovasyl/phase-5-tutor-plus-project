import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Tutor from "./Tutor";
import { UserContext } from "./App";

function Tutors() {
  const { tutors, setStudents } = useContext(UserContext);
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
          Your tutors
        </h2>

        {tutors && (
          <Row>
            {tutors.map((tutor) => {
              return (
                <Tutor key={tutor.id} tutor={tutor} setStudents={setStudents} />
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Tutors;
