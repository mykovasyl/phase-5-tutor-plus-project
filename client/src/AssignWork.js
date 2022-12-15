import React, { useState } from "react";

function AssignWork() {
  const [error, setError] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  function onFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", selectedFile);
    fetch("/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { formData },
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
        Select a file:
        <input type="file" onChange={onFileChange} />
      </label>
      <button type="submit">Upload</button>
      {error.map((error) => {
        return <p key={error}>{error}</p>;
      })}
    </form>
  );
}

export default AssignWork;
