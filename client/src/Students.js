import React, { useState } from "react";
import ReactModal from "react-modal";

function Students({ students, setStudents }) {
  const [modalShow, setModalShow] = useState(false);
  const [subjectFilter, setSubjectFilter] = useState("All");

  const allStudents = students.map((student) => {
    <div>
      <button onClick={handleModalShow}>
        <p>Student's avatar</p>
        <p>Student's name</p>
        <p>Student's subject with the tutor (needs new column in join table)</p>
        <p>Student's # of assignments due</p>
      </button>
      <ReactModal isOpen={modalShow} onRequestClose={handleModalShow}>
        <h2>Student name</h2>
        <p>Student avatar</p>
        <p>Subject</p>
        <p>Assignments due: # (link to list)</p>
        <p>Assignments completed: # (link to list)</p>
        <button>Assign work</button>
        <button onClick={handleModalShow}>Close</button>
      </ReactModal>
    </div>;
  });
  // .filter(student => {student subject === subjectFilter})
  function handleModalShow() {
    setModalShow(!modalShow);
  }

  function handleFilter(e) {
    setSubjectFilter(e.target.value);
  }

  return (
    <div>
      <h1>{subjectFilter} students</h1>
      <select value={subjectFilter} onChange={handleFilter}>
        <option>All</option>
        <option value="Math">Math</option>
        <option value="English">English</option>
        <option value="History">History</option>
        <option value="Science">Science</option>
      </select>
      <button onClick={handleModalShow}>
        <p>Student's avatar</p>
        <p>Student's name</p>
        <p>Student's subject with the tutor (needs new column in join table)</p>
        <p>Student's # of assignments due</p>
      </button>
      <ReactModal isOpen={modalShow} onRequestClose={handleModalShow}>
        <h2>Student name</h2>
        <p>Student avatar</p>
        <p>Subject</p>
        <p>Assignments due: # (link to list)</p>
        <p>Assignments completed: # (link to list)</p>
        <button>Assign work</button>
        <button onClick={handleModalShow}>Close</button>
      </ReactModal>
    </div>
  );
}

export default Students;
