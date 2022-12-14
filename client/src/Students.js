import React from "react";
import Student from "./Student";

function Students({ students, setStudents }) {
  return (
    <div>
      <h1>Your students</h1>
      {students.map((student) => {
        return (
          <Student
            key={student.id}
            student={student}
            setStudents={setStudents}
          />
        );
      })}
    </div>
  );
}

export default Students;
