import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

function Student({ student, setStudents }) {
  const [assignments, setAssignments] = useState([]); //set state to student.assignments
  const [modalShow, setModalShow] = useState(false);

  function handleModalShow() {
    setModalShow(!modalShow);
  }

  return (
    <div>
      <button
        onClick={handleModalShow}
        style={{ marginBottom: "10px" }}
        type="button"
      >
        <h2>{student.name}</h2>
        <p>{student.avatar}</p>
      </button>
      <ReactModal
        isOpen={modalShow}
        onRequestClose={handleModalShow}
        ariaHideApp={false}
        contentStyle={{
          backgroundColor: "white",
          borderRadius: "0",
          border: "none",
          boxShadow: "none",
          overflow: "hidden",
          width: "80%",
          height: "80%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h2>{student.name}</h2>
        <p>{student.avatar}</p>
        <p>{student.subjects}</p>
        <p>{student.assignments}</p>
        <Link to="/assignwork" state={{ student: student }}>
          <button type="button">Assign Work</button>
        </Link>
        <button onClick={handleModalShow}>Close</button>
      </ReactModal>
    </div>
  );
}

export default Student;
