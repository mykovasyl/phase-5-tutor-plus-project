import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function AssignWork({ currentUser }) {
  const [error, setError] = useState([]);
  const location = useLocation();
  const { studentId } = location.state;
  // const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    notes: "",
    subject: "",
    // files: [],
    tutor_id: currentUser.id,
    student_id: studentId,
  });

  // function onFileChange(e) {
  //   setFormData({
  //     ...formData,
  //     files: [...formData.files, e.target.files[0]],
  //   });
  // }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    fetch("/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((newAssignment) => {
          console.log(newAssignment);
        });
      } else {
        resp.json().then((error) => setError(error.errors));
      }
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Subject:
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </label>
      <label>
        Notes:
        <input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </label>
      {/* <label>
        Select a file:
        <input type="file" onChange={onFileChange} />
      </label> */}
      <button type="submit">Upload</button>
      {error.map((error) => {
        return <p key={error}>{error}</p>;
      })}
    </form>
  );
}

export default AssignWork;
