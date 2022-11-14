import React, { useState } from "react";

function SignUp() {
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    tutor: false,
  });

  function handleSubmit() {
    console.log("Works!");
    // confirm if pass === passConf
    // alert/error if not - student signup not supported
    // POST if ok to proper signup - tutor or student
    // resp is ok?
    // navigate to
  }

  function handleInputChange(e) {
    console.log(signupForm);
    if (e.target.name === "tutor") {
      setSignupForm({ ...signupForm, [e.target.name]: !!e.target.checked });
    } else {
      setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    }
  }

  return (
    <div>
      <h1>
        Join our growing family of tutors looking to organize their student's
        work
      </h1>
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
          name="passwordConfirmation"
          type="password"
          placeholder="Confirm password"
          value={signupForm.passwordConfirmation}
          onChange={handleInputChange}
        />
        <label>
          Are you signing up as a tutor? Check this box:
          <input
            name="tutor"
            checked={signupForm.tutor}
            type="checkbox"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
}

export default SignUp;
