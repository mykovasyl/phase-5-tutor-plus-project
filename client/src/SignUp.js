import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState([]);
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    type: "",
    name: "",
    subjects: "",
    grade: "",
    headline: "",
    email: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupForm),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(navigate("/login"));
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  }

  function handleInputChange(e) {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  }

  function handleOptionChange(e) {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Join our growing family of tutors and students!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Choose a username:
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={signupForm.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Enter your email:
          <input
            name="email"
            type="text"
            placeholder="email@example.com"
            value={signupForm.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Create a password:
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={signupForm.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Confirm password:
          <input
            name="password_confirmation"
            type="password"
            placeholder="Confirm password"
            value={signupForm.password_confirmation}
            onChange={handleInputChange}
          />
        </label>
        <p>
          Are you signing up as a tutor or student?
          <label>
            <input
              type="radio"
              name="type"
              value="Student"
              checked={signupForm.type === "Student"}
              onChange={handleOptionChange}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Tutor"
              checked={signupForm.type === "Tutor"}
              onChange={handleOptionChange}
            />
            Tutor
          </label>
        </p>
        {/* tutor or student signup options */}
        {signupForm.type === "Tutor" ? (
          <>
            <label>
              Full name:
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={signupForm.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Subjects:
              <input
                name="subjects"
                type="text"
                placeholder="Subjects"
                value={signupForm.subjects}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Choose a headline:
              <input
                name="headline"
                type="text"
                placeholder="Headline"
                value={signupForm.headline}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : signupForm.type === "Student" ? (
          <>
            <label>
              Full name:
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={signupForm.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Grade:
              <input
                name="grade"
                type="text"
                placeholder="Grade"
                value={signupForm.grade}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        <button type="submit">Sign up!</button>
        {error.map((err) => {
          <h4>{err}</h4>;
        })}
      </form>
    </div>
  );
}

export default SignUp;
