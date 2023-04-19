import React, { useState, useContext, useRef } from "react";
import { UserContext } from "./App";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function AssignWork() {
  const [error, setError] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { studentId } = location.state;
  const { currentUser, setStudents } = useContext(UserContext);
  const [assignmentData, setAssignmentData] = useState({
    name: "",
    notes: "",
    subject: "",
    tutor_id: currentUser.id,
    student_id: studentId,
  });
  const filesRef = useRef([]);
  const postToGet = useRef(1);
  const [files, setFiles] = useState([]);

  function handleChange(e) {
    setAssignmentData({ ...assignmentData, [e.target.name]: e.target.value });
  }

  function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    for (let data in assignmentData) {
      formData.append(data, assignmentData[data]);
    }

    for (let i = 0; i < filesRef.current.files.length; i++) {
      formData.append("assignment[files][]", filesRef.current.files[i]);
    }

    fetch("/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((newAssignment) => {
          let studentsList = [
            ...new Map(
              newAssignment.tutor.students.map((student) => [
                student["id"],
                student,
              ])
            ).values(),
          ];
          setStudents(studentsList);
          getFiles();
          navigate("/students");
        });
      } else {
        resp.json().then((error) => setError(error.errors));
      }
    });
  }

  function getFiles() {
    fetch(`/assignments/${postToGet.current.value}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFiles(data.files);
      })
      .catch((error) => console.log(error));
  }

  return (
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
        Assignment
      </h2>
      <Form onSubmit={onFormSubmit}>
        <Row>
          <Col>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={assignmentData.name}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Subject:</Form.Label>
            <Form.Control
              type='text'
              name='subject'
              value={assignmentData.subject}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "16px" }}>
          <Col>
            <Form.Label>Notes:</Form.Label>
            <Form.Control
              as='textarea'
              name='notes'
              value={assignmentData.notes}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "16px" }}>
          <Col>
            <Form.Control
              type='file'
              name='file'
              multiple
              ref={filesRef}
              // onChange={(e) => setSelectedFiles(Array.from(e.target.files))}
            />
          </Col>
        </Row>
        <Row
          style={{
            margin: "16px",
            justifyContent: "center",
          }}
        >
          <Button type='submit' variant='success' style={{ maxWidth: "33%" }}>
            Upload
          </Button>
        </Row>
        {/* {error.map((error) => {
          return <p key={error}>{error}</p>;
        })} */}
      </Form>
    </Container>
  );
}

export default AssignWork;
