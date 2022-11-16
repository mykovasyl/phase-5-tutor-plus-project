import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    tutor: false,
    name: "",
    subjects: "",
    headline: "",
    hourly_rate: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/usersignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupForm),
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json();
        } else {
          console.log(resp);
        }
      })
      .then((data) => console.log(data));
    // alert/error if not - student signup not supported
    // POST if ok to proper signup - tutor or student
    // resp is ok?
    // navigate to enter tutor/student details
  }

  function handleInputChange(e) {
    if (e.target.name === "tutor") {
      setSignupForm({ ...signupForm, [e.target.name]: !!e.target.checked });
    } else {
      setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    }
  }

  return (
    <div>
      <h1>Join our growing family of tutors and students!</h1>
      <form onSubmit={handleSubmit}>
        <label>Choose a username:</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={signupForm.username}
          onChange={handleInputChange}
        />
        <label>Create a password:</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={signupForm.password}
          onChange={handleInputChange}
        />
        <label>Confirm password:</label>
        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm password"
          value={signupForm.passwordConfirmation}
          onChange={handleInputChange}
        />
        <label>
          Signing up as a tutor? Check this box:
          <input
            name="tutor"
            checked={signupForm.tutor}
            type="checkbox"
            onChange={handleInputChange}
          />
        </label>
        {/* tutor sign up only */}
        {signupForm.tutor ? (
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
            <label>
              Hourly rate:
              <input
                name="hourly_rate"
                type="text"
                placeholder="Hourly rate"
                value={signupForm.hourlyRate}
                onChange={handleInputChange}
              />
            </label>
          </>
        ) : null}
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
}

export default SignUp;
