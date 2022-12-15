import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
// import TutorList from "./TutorList";
// import AssignmentsList from "./AssignmentsList";
import FindStudents from "./FindStudents";
import Students from "./Students";
import AssignWork from "./AssignWork";
// import AssignmentsList from "./AssignmentsList";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function App() {
  const [errors, setErrors] = useState([]);
  const [students, setStudents] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user);
          setStudents(user.students);
        });
      } else {
        resp.json().then((error) => setErrors(error));
      }
    });
  }, []);

  function handleLogOut() {
    fetch("/logout", {
      method: "DELETE",
    });
    setCurrentUser({});
    navigate("/");
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home currentUser={currentUser} handleLogOut={handleLogOut} />
          }
        />
        {/* student is logged in */}
        {/* <Route path="/tutors">
          <TutorList />
        </Route>
        <Route path="/assignments">
          <AssignmentsList />
        </Route> */}
        {/* tutor is logged in */}
        <Route
          path="/students"
          element={<Students students={students} setStudents={setStudents} />}
        />
        <Route
          path="/assignwork"
          element={<AssignWork students={students} setStudents={setStudents} />}
        />
        <Route
          path="/findstudents"
          element={
            <FindStudents
              currentUser={currentUser}
              students={students}
              setStudents={setStudents}
            />
          }
        />
        {/* <Route
          path="/assignments"
          element={
            <AssignmentsList students={students} setStudents={setStudents} />
          }
        /> */}
        <Route
          path="/signup"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/login"
          element={<LogIn setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="*"
          element={
            <>
              <h1>404 path not found</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
