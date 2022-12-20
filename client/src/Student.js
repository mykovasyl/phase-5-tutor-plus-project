import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import AssignmentRow from "./AssignmentRow";

function Student({ student, setStudents }) {
  const [assignments, setAssignments] = useState(student.assignments);
  const [modalShow, setModalShow] = useState(false);

  function handleModalShow() {
    setModalShow(!modalShow);
  }

  function handleDelete(id) {
    fetch(`/assignments/${id}`, {
      method: "DELETE",
    });
    const assignmentsAfterDelete = assignments.filter(
      (assignment) => assignment.id !== id
    );
    setAssignments(assignmentsAfterDelete);
  }

  let assignmentsInProgress = assignments.map((assignment) => {
    return (
      <AssignmentRow
        key={assignment.id}
        // avatar={assignment.avatar}
        id={assignment.id}
        name={assignment.name}
        subject={assignment.subject}
        notes={assignment.notes}
        handleDelete={handleDelete}
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
        <h2>{student.name}</h2>
        {/* <p>{student.avatar}</p> */}
        <p>{student.subject}</p>
        <Link to="/assignwork" state={{ studentId: student.id }}>
          <button type="button">Assign Work</button>
        </Link>
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
            {/* <Col md={6}>
              <h5>Completed assignments ({assignments.length}):</h5>
              <Table striped hover style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                  <td>Name</td>
                    <td>Subject</td>
                    <td>Notes</td>
                    <td>Link to download file</td>
                  </tr>
                </thead>
                <tbody>{completedChoreRows}</tbody>
              </Table>
            </Col> */}
          </Row>
        </div>
        <button onClick={handleModalShow}>Close</button>
      </ReactModal>
    </div>
  );
}

export default Student;
