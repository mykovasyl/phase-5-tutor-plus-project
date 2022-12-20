import React, { useState } from "react";
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function AssignmentRow({ id, name, subject, notes, handleDelete }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: name,
    subject: subject,
    notes: notes,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // function handleEdit() {
  //   setEditing(!editing);
  // }

  function handleUpdate() {
    setEditing(!editing);
    fetch(`/assignments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((updatedChore) => {
        console.log(updatedChore);
        setFormData({ ...formData, updatedChore });
      });
  }

  function tableDataOrInputs() {
    if (!editing) {
      return (
        <>
          <td>{formData.name}</td>
          <td>{formData.subject}</td>
          <td>{formData.notes}</td>
          <td>File link</td>
          <td>
            {/* {completed ? null : (
              <Button variant="warning" onClick={handleEdit}>
                <FaEdit />
              </Button>
            )} */}
            <Button variant="danger">
              <FaTrashAlt onClick={() => handleDelete(id)} />
            </Button>
          </td>
        </>
      );
    } else {
      return (
        <>
          <td>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Form.Control
              type="text"
              name="subjects"
              value={formData.subject}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Form.Control
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Button variant="success" onClick={handleUpdate}>
              <FaCheck />
            </Button>
          </td>
        </>
      );
    }
  }

  return <tr>{tableDataOrInputs()}</tr>;
}

export default AssignmentRow;
