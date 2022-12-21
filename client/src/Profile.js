import React, { useState, useContext } from "react";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function Profile({ setCurrentUser, setStudents }) {
  const { currentUser } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    subjects: currentUser.subjects,
    headline: currentUser.headline,
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleEdit() {
    setEditing(!editing);
  }

  function handleDelete() {
    fetch(`/users/${currentUser.id}`, {
      method: "DELETE",
    });
    setCurrentUser(null);
    setStudents(null);
    navigate("/");
  }

  function handleUpdate() {
    setEditing(!editing);
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setFormData({ ...formData, updatedUser });
      });
  }

  function tableDataOrInputs() {
    if (!editing) {
      return (
        <>
          <td>{currentUser.name}</td>
          <br />
          {/* <td>{currentUser.avatar}</td>
          <br /> */}
          <td>{currentUser.subjects}</td>
          <br />
          <td>{currentUser.headline}</td>
          <br />
          <td>
            <Button variant="warning" onClick={handleEdit}>
              Edit Profile
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete Account
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
              value={formData.subjects}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Form.Control
              type="text"
              name="headline"
              value={formData.headline}
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

  return (
    <>
      <h3>Profile</h3>
      {tableDataOrInputs()}
    </>
  );
}

export default Profile;
