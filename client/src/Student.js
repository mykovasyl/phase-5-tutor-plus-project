import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import AssignmentRow from "./AssignmentRow";
import { Button, CloseButton, Stack } from "react-bootstrap";

function Student({ student }) {
  const [assignments, setAssignments] = useState(student.assignments);
  const [modalShow, setModalShow] = useState(false);

  function handleModalShow() {
    setModalShow(!modalShow);
  }

  let assignmentsInProgress = assignments.map((assignment) => {
    return (
      <AssignmentRow
        key={assignment.id}
        // avatar={assignment.avatar}
        assignments={assignments}
        setAssignments={setAssignments}
        id={assignment.id}
        name={assignment.name}
        subject={assignment.subject}
        notes={assignment.notes}
        tutorId={assignment.tutor_id}
      />
    );
  });

  return (
    <div style={{ width: "33.3%" }}>
      <Button
        variant="outline-dark"
        onClick={handleModalShow}
        style={{
          marginBottom: "16px",
          borderRadius: "8px",
          width: "100%",
          height: "80%",
          boxShadow:
            "rgb(0 0 0 / 3%) 0px -1px 0px 0px, rgb(0 0 0 / 16%) 0px 2px 8px 0px, rgb(0 0 0 / 16%) 0px 10px 8px -5px, rgb(0 0 0 / 16%) 0px 12px 32px -2px",
        }}
        type="button"
      >
        <h2>{student.name}</h2>
        {/* <p>{student.avatar}</p> */}
      </Button>
      <ReactModal
        isOpen={modalShow}
        onRequestClose={handleModalShow}
        ariaHideApp={false}
      >
        <Row>
          <Stack direction="horizontal">
            <h2>{student.name}</h2>
            {/* <p>{student.avatar}</p> */}
            <div className="ms-auto">
              <CloseButton onClick={handleModalShow} />
            </div>
          </Stack>
        </Row>
        <Link to="/assignwork" state={{ studentId: student.id }}>
          <Button type="button" variant="primary">
            Assign Work
          </Button>
        </Link>
        <div>
          <br></br>
          <Row>
            <Col>
              <h5>Assignments ({assignments.length}):</h5>
              <Table striped hover style={{ marginTop: "24px" }}>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Subject</td>
                    <td>Notes</td>
                    <td>File</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>{assignmentsInProgress}</tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </ReactModal>
    </div>
  );
}

export default Student;
