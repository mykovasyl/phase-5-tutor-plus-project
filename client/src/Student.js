import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

function Student({ student, setStudents }) {
  const [assignments, setAssignments] = useState([]); //set state to student.assignments
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="btn btn-primary"
        style={{ marginBottom: "10px" }}
        disabled={modalIsOpen}
        type="button"
      ></button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
        overlayClassName="modal-overlay"
        className="Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 999,
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90vw",
            minWidth: "90vw",
            maxHeight: "90vh",
            minHeight: "90vh",
          },
        }}
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
        {/* <h2>{student.name}</h2>
        <p>{student.avatar}</p>
        <p>{student.subjects}</p>
        <p>{student.assignments}</p> */}
        <Link to="/assignwork" state={{ student: student }}>
          <button type="button">Assign Work</button>
        </Link>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          Close
        </button>
      </ReactModal>
    </div>
  );
}

export default Student;
