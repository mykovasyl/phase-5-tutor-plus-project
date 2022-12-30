import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import AssignmentRow from "./AssignmentRow";
import { Stack } from "react-bootstrap";

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
    <div>
      <button
        onClick={handleModalShow}
        style={{ marginBottom: "10px" }}
        type="button"
      >
        <h2>{student.name}</h2>
        {/* <p>{student.avatar}</p> */}
      </button>
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
              <button onClick={handleModalShow}>Close</button>
            </div>
          </Stack>
        </Row>
        <Row>
          <Link to="/assignwork" state={{ studentId: student.id }}>
            <button type="button">Assign Work</button>
          </Link>
        </Row>
        <div>
          <br></br>
          <Row>
            <Col>
              <h5>Assignments ({assignments.length}):</h5>
              <Table striped hover style={{ marginTop: "20px" }}>
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
