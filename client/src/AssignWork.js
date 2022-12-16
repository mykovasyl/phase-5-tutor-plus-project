import React, { useState } from "react";

function AssignWork() {
  const [error, setError] = useState([]);
  // const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    notes: "",
    subject: "",
  });

  // function onFileChange(e) {
  //   setSelectedFile(e.target.files[0]);
  // }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    // let formData = new FormData();
    // formData.append("attachments", selectedFile);
    fetch("/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    }).then((resp) => {
      if (resp.ok) {
        resp.then((newAssignment) => {
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
