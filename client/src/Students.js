import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

function Students({ students, setStudents }) {
  const [modalShow, setModalShow] = useState(false);
  const [subjectFilter, setSubjectFilter] = useState("All");

  const allStudents = students.map((student) => {
    return (
      <div>
        <button onClick={handleModalShow}>
          <p>Student's avatar</p>
          <p>Student's name</p>
          <p>
            Student's subject with the tutor (needs new column in join table)
          </p>
          <p>Student's # of assignments due</p>
        </button>
        <ReactModal isOpen={modalShow} onRequestClose={handleModalShow}>
          <h2>Student name</h2>
          <p>Student avatar</p>
          <p>Subject</p>
          <p>
            Assignments due: <Link to="/assignments">#</Link>
          </p>
          <p>
            Assignments completed: <Link to="/assignments">#</Link>
          </p>
          <button>Assign work</button>
          <button onClick={handleModalShow}>Close</button>
        </ReactModal>
      </div>
    );
  });
  // .filter(student => {student subject === subjectFilter || subjectFilter === "All"})

  // const subjects = self.subjects.map(subject => {
  // return(
  //   <option value=`${subject}`>subject</option>
  // )
  // });

  function handleModalShow() {
    setModalShow(!modalShow);
  }

  function handleFilter(e) {
    setSubjectFilter(e.target.value);
  }

  return (
    <div>
      <div>
        <h1>{subjectFilter} students</h1>
        <select value={subjectFilter} onChange={handleFilter}>
          {/* subjects */}
          <option value="All">All</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
        </select>
      </div>
      <button onClick={handleModalShow}>
        <p>Student's name</p>
        <p>Student's avatar</p>
        <p>Student's # of assignments due</p>
      </button>
      <ReactModal isOpen={modalShow} onRequestClose={handleModalShow}>
        <h2>Student name</h2>
        <p>Student avatar</p>
        <p>Subject</p>
        <p>
          Assignments due: <Link to="/assignments">#</Link>
        </p>
        <p>
          Assignments completed: <Link to="/assignments">#</Link>
        </p>
        <button>Assign work</button>
        <button onClick={handleModalShow}>Close</button>
      </ReactModal>
    </div>
  );
}

export default Students;
